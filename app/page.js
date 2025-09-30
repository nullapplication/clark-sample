export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="title">Welcome to Clark Sample</h1>
        <p className="subtitle">A powerful AI-assisted development environment</p>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="icon"></div>
          <h2>Claude AI</h2>
          <p>Powered by Anthropic's Claude, providing intelligent code assistance and natural language understanding.</p>
          <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="feature-link">Visit Claude </a>
        </div>

        <div className="feature-card">
          <div className="icon"></div>
          <h2>Next.js 15</h2>
          <p>Built with the latest Next.js App Router for optimal performance and modern React features.</p>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="feature-link">Visit Next.js </a>
        </div>

        <div className="feature-card">
          <div className="icon"></div>
          <h2>E2B Code Interpreter</h2>
          <p>Execute code securely in isolated sandboxes with E2B's powerful code interpretation capabilities.</p>
          <a href="https://e2b.dev/docs" target="_blank" rel="noopener noreferrer" className="feature-link">Visit E2B</a>
        </div>

        <div className="feature-card">
          <div className="icon"></div>
          <h2>Clark AI Assistant 2</h2>
          <p>Your collaborative AI pair programmer that helps with code reviews, debugging, and architecture decisions.</p>
        </div>
      </div>

      <div className="cta">
        <h3>Ready to build something amazing?</h3>
        <p>This sample demonstrates the integration of cutting-edge AI tools with modern web development.</p>
      </div>
    </main>
  )
}
