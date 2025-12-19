export default function CV() {
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

      {/* CV Content */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h2 className="text-5xl font-bold mb-12">Curriculum Vitae</h2>
        
        {/* Education */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">Education</h3>
          <div className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-2xl font-bold">University of Michigan</h4>
            <p className="text-gray-400 mb-2">Bachelor of Science in Mechanical Engineering</p>
            <p className="text-gray-300">Expected Graduation: [Year]</p>
            <p className="text-gray-300 mt-2">Relevant Coursework: Thermodynamics (ME 235), Mechanics of Materials (ME 211), Differential Equations (MTH 295/296)</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">Experience</h3>
          <div className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-2xl font-bold">Chief Naval Architect</h4>
            <p className="text-gray-400 mb-2">UM::Autonomy | [Start Date] - Present</p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Lead hull design and structural optimization for autonomous surface vessels</li>
              <li>Manage CNC fabrication processes and material procurement</li>
              <li>Coordinate team efforts for mid-February competition deadlines</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">Skills</h3>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="mb-4">
              <h4 className="text-xl font-bold mb-2">Engineering</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">CAD Design</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Naval Architecture</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">CNC Fabrication</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Structural Analysis</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Other</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Kitesurfing</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Skiing</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Climbing</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Mountaineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}