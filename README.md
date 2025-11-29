# Next.js SaaS Infrastructure

A clean Next.js 14 SaaS boilerplate with authentication, subscription management, and dashboard.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Auth**: Supabase Auth
- **Payments**: Stripe (ready for integration)
- **UI**: Radix UI, shadcn/ui components

## 🏗 Project Structure

```
src/
├── app/
│   ├── (auth)/           # Login, Signup pages
│   ├── (dashboard)/      # Dashboard, Subscription pages
│   └── api/
│       └── register/     # User registration endpoint
├── components/           # UI components (Sidebar, etc.)
├── lib/
│   ├── prisma/          # Database client
│   └── supabase/        # Auth client & middleware
└── prisma/
    └── schema.prisma    # Database schema (User, Subscription)
```

## 📦 Installation

### Prerequisites
- Node.js 18+
- Supabase account (PostgreSQL + Auth)
- Stripe account (optional)

### Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Environment Setup**

Create `.env` file:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# Database (Supabase PostgreSQL)
DATABASE_URL="postgresql://postgres.xxx:password@xxx.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.xxx:password@xxx.pooler.supabase.com:5432/postgres"

# Stripe (optional)
STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

3. **Database Setup**
```bash
npm run db:push        # Push schema to Supabase
npx prisma generate    # Generate Prisma client
```

4. **Run Development Server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔑 Database Models

- **User** - User accounts synced with Supabase Auth (id, email, name, avatarUrl, role)
- **Subscription** - Stripe subscription management (userId, stripeCustomerId, plan, status)

## 🚦 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

npm run db:push          # Push Prisma schema to database
npx prisma generate      # Generate Prisma client
npx prisma studio        # Open Prisma Studio GUI
```

## 🎯 Current Features

✅ **Authentication** - Supabase Auth with email/password
✅ **User Registration** - Email confirmation flow
✅ **Protected Routes** - Middleware-based auth guards
✅ **Dashboard** - Simple dashboard layout
✅ **Subscription Page** - Pricing tiers UI (Stripe integration ready)
✅ **Responsive Sidebar** - Mobile-friendly navigation
✅ **Database ORM** - Prisma with PostgreSQL

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## 📝 License

MIT