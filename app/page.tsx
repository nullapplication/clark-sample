export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Clark Sample
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            A powerful demonstration of modern AI-powered development
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">🚀 Next.js 15</h2>
              <p className="text-gray-700 mb-4">
                Built with the latest Next.js App Router for optimal performance and developer experience.
              </p>
              <a 
                href="https://nextjs.org/blog/next-15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more about Next.js 15 →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">🤖 Claude AI</h2>
              <p className="text-gray-700 mb-4">
                Powered by Anthropic's Claude for intelligent code assistance and natural language understanding.
              </p>
              <a 
                href="https://www.anthropic.com/claude" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
              >
                Explore Claude →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">💻 E2B Code Interpreter</h2>
              <p className="text-gray-700 mb-4">
                Secure code execution environment for running and testing code in isolated sandboxes.
              </p>
              <a 
                href="https://e2b.dev/docs/code-interpreter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Discover E2B Code Interpreter →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">⚡ Clark</h2>
              <p className="text-gray-700 mb-4">
                AI-powered collaborative development assistant that helps teams build better software faster.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg mb-6">
              This project combines cutting-edge AI technology with modern web development tools.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}