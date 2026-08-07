export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex justify-center items-center">
            <div className="space-x-8">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600 transition">Home</a>
              <a href="/CV-Ulrico-Zampa.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">CV</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-left-align">
          <h1 className="text-3xl font-normal mb-6 text-gray-900">Ulrico Zampa</h1>
          
          <p className="text-s text-gray-600 leading-relaxed">
            Undergraduate student at the University of Michigan majoring 
            in Naval Architecture and Marine Engineering, passionate about ship design, marine innovation, and 
            hands-on engineering challenges. Currently, I'm working on UM:Autonomy’s new vessel, in 
            preparation for the RoboBoat 2027 Competition in February. 

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
        <p className="text-gray-400 text-sm text-center">© 2026 Amperes</p>
      </footer>
    </main>
  );
}