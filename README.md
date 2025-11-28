# Alignment Wiki

A comprehensive encyclopedia of AI alignment research.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to Project Settings → API
3. Copy the Project URL and anon/public key

### 3. Configure environment

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Setup database

1. Go to Supabase SQL Editor
2. Run the contents of `supabase-setup.sql`

### 5. Create initial admin users

After the first users sign up with these emails, run in SQL Editor:

```sql
UPDATE users SET role = 'admin' WHERE email = 'baldnewguy@gmail.com';
UPDATE users SET role = 'moderator' WHERE email = 'tsymbal1981@yahoo.com';
```

### 6. Run locally

```bash
npm run dev
```

### 7. Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Add domain: alignmentwiki.com

## User Roles

- **Admin**: Can manage users, review edits, access all settings
- **Moderator**: Can review and approve/reject edit suggestions  
- **User**: Can suggest edits to articles

## Structure

```
/wiki/theories/      - Technical approaches
/wiki/people/        - Researchers and practitioners
/wiki/organizations/ - Labs, companies, nonprofits
/wiki/papers/        - Key research papers with abstracts
/wiki/problems/      - Open problems in alignment
```

## Contributing

1. Sign up for an account
2. Navigate to any article
3. Click "Suggest Edit"
4. Submit your changes with sources
5. A moderator will review

## Tech Stack

- Next.js 14
- Tailwind CSS
- Supabase (Auth + Database)
- Vercel (Hosting)
