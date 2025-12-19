export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ulrico Zampa</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">Mechanical Engineer</h2>
        <p className="text-xl text-gray-300 mb-8">
          Building autonomous systems and pushing the boundaries of marine engineering
        </p>
        <a 
          href="#projects" 
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition inline-block"
        >
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1: UM::Autonomy */}
          <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
            <h4 className="text-2xl font-bold mb-4">UM::Autonomy</h4>
            <p className="text-gray-300 mb-4">
              UM::Autonomy Chief Naval Architect for competitive autonomus surface vessel team. 
              Leading hull design, CNC fabrication, and structural optimization for 
              mid-February competition deadlines.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Naval Architecture</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">CNC Manufacturing</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Autodesk Fusion 360</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Rhino 7</span>
            </div>
          </div>

          {/* Project 2 - Add your own */}
          <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
            <h4 className="text-2xl font-bold mb-4"> Project SHEO</h4>
            <p className="text-gray-300 mb-4">
              Coming Soon!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Tag X</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Tag Y</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Tag Z</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 bg-gray-850">
        <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <p>
            Second-year undergraduate student at the University of Michigan (College of Engineering), 
            majoring in Naval Architecture and Marine Engineering, passionate about ship design, marine 
            innovation, and hands-on engineering challenges. Currently, I'm working on UM:Autonomy’s new 
            vessel, ORCA 2, in preparation for the RoboBoat 2026 Competition in February. 
          </p>
          <p>
            When I'm not in the lab or classroom, you can find me kitesurfing, skiing, climbing, 
            or mountaineering - always seeking the next adventure.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
        <p className="text-gray-300 mb-8">Interested in collaborating or want to chat about engineering?</p>
        <a 
          href="mailto:zampau@umich.edu" 
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition inline-block"
        >
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400 border-t border-gray-700">
        <p>© 2026 Ulrico Zampa</p>
      </footer>
    </main>
  );
}