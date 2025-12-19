export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ulrico Zampa</h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition">Home</a>
            <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="/cv" className="hover:text-blue-400 transition">CV</a>
          </div>
        </nav>
      </header>

      {/* Projects Content */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-12">Projects</h2>
        
        <div className="space-y-12">
          {/* Project 1: UM::Autonomy */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4">UM::Autonomy</h3>
            <p className="text-gray-300 mb-4 text-lg">
              Chief Naval Architect for competitive autonomous surface vessel team. 
              Leading hull design, CNC fabrication, and structural optimization for 
              mid-February competition deadlines.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Naval Architecture</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">CNC Fabrication</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">CAD Design</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Structural Optimization</span>
            </div>
          </div>

          {/* Add more projects here */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4">Add Your Next Project</h3>
            <p className="text-gray-300 mb-4 text-lg">
              Description of your project goes here.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Skill 1</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Skill 2</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}