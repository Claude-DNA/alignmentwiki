import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a dummy client for build time, real client for runtime
let supabase: SupabaseClient

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Dummy client for build time - will be replaced at runtime
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key')
}

export { supabase }

// Types
export type UserRole = 'admin' | 'moderator' | 'user'

export interface WikiUser {
  id: string
  email: string
  name: string
  role: UserRole
  created_at: string
}

export interface EditSuggestion {
  id: string
  article: string
  path: string
  edit_type: 'minor' | 'major' | 'new'
  section: string
  current_text: string
  suggested_text: string
  reason: string
  sources: string
  user_id: string
  user_name: string
  user_email: string
  status: 'pending' | 'approved' | 'rejected'
  reviewer_id?: string
  reviewer_notes?: string
  created_at: string
  reviewed_at?: string
}

// Auth helpers
export async function signUp(email: string, password: string, name: string) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (authError) throw authError
  
  if (authData.user) {
    // Create user profile with default 'user' role
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        name,
        role: 'user'
      })
    
    if (profileError) throw profileError
  }
  
  return authData
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser(): Promise<WikiUser | null> {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null
  
  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()
  
  return profile
}

// Edit suggestions
export async function createEditSuggestion(edit: Omit<EditSuggestion, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await supabase
    .from('edit_suggestions')
    .insert({
      ...edit,
      status: 'pending'
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function getEditSuggestions(status?: string) {
  let query = supabase
    .from('edit_suggestions')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (status && status !== 'all') {
    query = query.eq('status', status)
  }
  
  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getUserEditSuggestions(userId: string) {
  const { data, error } = await supabase
    .from('edit_suggestions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function updateEditStatus(
  editId: string, 
  status: 'approved' | 'rejected',
  reviewerId: string,
  notes?: string
) {
  const { data, error } = await supabase
    .from('edit_suggestions')
    .update({
      status,
      reviewer_id: reviewerId,
      reviewer_notes: notes,
      reviewed_at: new Date().toISOString()
    })
    .eq('id', editId)
    .select()
    .single()
  
  if (error) throw error
  return data
}

// Admin functions
export async function getAllUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function updateUserRole(userId: string, role: UserRole) {
  const { data, error } = await supabase
    .from('users')
    .update({ role })
    .eq('id', userId)
    .select()
    .single()
  
  if (error) throw error
  return data
}
