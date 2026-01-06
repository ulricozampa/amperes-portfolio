export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex justify-center items-center">
            <div className="space-x-8">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600 transition">Home</a>
              <a href="/Ulrico Zampa_Resume_2025_D10.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">CV</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-normal mb-6 text-gray-900">Ulrico Zampa</h1>
          <p className="text-l text-gray-600 leading-relaxed mb-4">
            I am interested in building autonomous systems and pushing the boundaries of marine engineering.
          </p>
          <p className="text-m text-gray-600 leading-relaxed">
            My work focuses on naval architecture and structural optimization for autonomous surface vessels. 
            I study Naval Architecture and Marine Engineering at the University of Michigan.
          </p>
        </div>
      </section>

      
      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">zampau@umich.edu</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-100">
        <p className="text-gray-400 text-sm text-center">© 2026 Ulrico Zampa</p>
      </footer>
    </main>
  );
}