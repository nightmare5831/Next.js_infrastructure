export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to Ad SaaS
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your modern advertising management platform
        </p>
        <div className="flex gap-4">
          <a
            href="/login"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="/dashboard"
            className="px-6 py-3 border border-border rounded-md hover:bg-accent transition-colors"
          >
            Dashboard
          </a>
        </div>
      </main>
    </div>
  )
}