export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex justify-center items-center">
            <div className="space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition">Home</a>
              <a href="/CV-Ulrico-Zampa.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">CV</a>
              <a href="/projects" className="text-gray-900 font-medium hover:text-gray-600 transition">Projects</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Projects Content */}
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-normal mb-16 text-gray-900">Projects</h1>
        
        <div className="space-y-16 max-w-3xl">
          {/* Project 1: UM::Autonomy */}
          <div className="border-l-2 border-gray-200 pl-6">
            <h2 className="text-xl font-normal mb-4 text-gray-900">UM::Autonomy: Ann Arbor, Michigan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chief Naval Architect for competitive autonomous surface vessel team. 
              Leading hull design, CNC fabrication, and structural optimization for 
              mid-February competition deadlines.
            </p>
            <a 
              href="https://umautonomy.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-gray-900 hover:text-gray-600 transition mb-6"
            >
              Visit UM::Autonomy →
            </a>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <img 
                src="/Orca.jpg" 
                alt="UM::Autonomy project image 1"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/Orca2 section cut.jpg" 
                alt="UM::Autonomy project image 2"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/IMG_3459.jpg" 
                alt="UM::Autonomy project image 3"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/Comp Photo.jpg" 
                alt="UM::Autonomy project image 4"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/IMG_0159.jpg" 
                alt="UM::Autonomy project image 5"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/Screenshot 2026-01-08 at 13.38.49.jpg" 
                alt="UM::Autonomy project image 6"
                className="w-full h-48 rounded object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-500">Rhino7</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">ORCA3D</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">Autodesk Fusion</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">CNC Fabrication</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">GHS (General Hydrostatic)</span>
            </div>
          </div>

          {/* Project 2: Modellini Marchesoni */}
          <div className="border-l-2 border-gray-200 pl-6">
            <h2 className="text-xl font-normal mb-4 text-gray-900">Urban Models (1:1000): Ticino, Switzerland</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This project translated plans of 23 urban centers in Ticino into wooden and 3-D printed scaled models. The models were commissioned 
              by the cantonal department for the territorial development to provide local municipal administrators with a practical instrument to 
              visualize the present urban configuration and work efficiently on new infrastructure and urban planning.
            </p>

            <a 
              href="https://www.modelli.ch/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-gray-900 hover:text-gray-600 transition mb-6"
            >
              Visit Modellini Marchesoni →
            </a>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <img 
                src="/IMG_7325.jpg" 
                alt=" Modellini image 1"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/IMG_7134.jpg" 
                alt="Modellini image 2"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/Screenshot 2026-01-07 at 09.43.43.jpg" 
                alt="Modellini image 3"
                className="w-full h-48 rounded object-cover"
              />
              <img 
                src="/IMG_7553.jpg" 
                alt="Modellini project image 4"
                className="w-full h-48 rounded object-cover"
              />
              
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-500">Rhino7</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">Formlabs Resin Printers</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">CNC Fabrication</span>
            </div>
          </div>
        </div>
      </section>
    {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-100">
        <p className="text-gray-400 text-sm text-center">© 2026 Amperes</p>
      </footer>  
    </main>
    
    
  );
}