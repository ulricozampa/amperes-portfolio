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
            <h2 className="text-2xl font-normal mb-4 text-gray-900">UM::Autonomy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chief Naval Architect for competitive autonomous surface vessel team. 
              Leading hull design, CNC fabrication, and structural optimization for 
              mid-February competition deadlines.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-500">Naval Architecture</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">CNC Fabrication</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">CAD Design</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">Structural Optimization</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-l-2 border-gray-200 pl-6">
            <h2 className="text-2xl font-normal mb-4 text-gray-900">Add Your Next Project</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Description of your project goes here.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-500">Skill 1</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">Skill 2</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}