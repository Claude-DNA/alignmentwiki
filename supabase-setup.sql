-- Supabase SQL Setup for Alignment Wiki
-- Run this in the Supabase SQL Editor

-- Users table with roles
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'moderator', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Edit suggestions table
CREATE TABLE IF NOT EXISTS edit_suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article TEXT NOT NULL,
  path TEXT NOT NULL,
  edit_type TEXT NOT NULL CHECK (edit_type IN ('minor', 'major', 'new')),
  section TEXT,
  current_text TEXT,
  suggested_text TEXT NOT NULL,
  reason TEXT NOT NULL,
  sources TEXT,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewer_id UUID REFERENCES users(id),
  reviewer_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE edit_suggestions ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can read all users" ON users
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update all users" ON users
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Allow insert for authenticated users" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Edit suggestions policies
CREATE POLICY "Anyone can read approved edits" ON edit_suggestions
  FOR SELECT USING (status = 'approved');

CREATE POLICY "Users can read own edits" ON edit_suggestions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Moderators and admins can read all edits" ON edit_suggestions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'moderator'))
  );

CREATE POLICY "Authenticated users can create edits" ON edit_suggestions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Moderators and admins can update edits" ON edit_suggestions
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'moderator'))
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_edit_suggestions_status ON edit_suggestions(status);
CREATE INDEX IF NOT EXISTS idx_edit_suggestions_user_id ON edit_suggestions(user_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Insert initial admin and moderator users
-- NOTE: You need to first create these users through Supabase Auth, then update their roles here
-- Or insert them directly after they sign up

-- After the users sign up with these emails, run:
-- UPDATE users SET role = 'admin' WHERE email = 'baldnewguy@gmail.com';
-- UPDATE users SET role = 'moderator' WHERE email = 'tsymbal1981@yahoo.com';

-- Article submissions table
CREATE TABLE IF NOT EXISTS article_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  resources JSONB DEFAULT '[]',
  tags TEXT[] DEFAULT '{}',
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewer_id UUID REFERENCES users(id),
  reviewer_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on article_submissions
ALTER TABLE article_submissions ENABLE ROW LEVEL SECURITY;

-- Article submissions policies
CREATE POLICY "Anyone can read approved articles" ON article_submissions
  FOR SELECT USING (status = 'approved');

CREATE POLICY "Users can read own article submissions" ON article_submissions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Moderators and admins can read all article submissions" ON article_submissions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'moderator'))
  );

CREATE POLICY "Authenticated users can create article submissions" ON article_submissions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Moderators and admins can update article submissions" ON article_submissions
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'moderator'))
  );

-- Index for article submissions
CREATE INDEX IF NOT EXISTS idx_article_submissions_status ON article_submissions(status);
CREATE INDEX IF NOT EXISTS idx_article_submissions_user_id ON article_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_article_submissions_category ON article_submissions(category);
