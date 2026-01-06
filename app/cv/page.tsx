export default function CV() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex justify-center items-center">
            <div className="space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition">Home</a>
              <a href="/Ulrico Zampa_Resume_2025_D10.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:text-gray-600 transition">CV</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
            </div>
          </nav>
        </div>
      </header>

      {/* CV Content */}
      <section className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="text-4xl font-normal mb-16 text-gray-900">Curriculum Vitae</h1>
        
        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-8 text-gray-900">Education</h2>
          <div className="border-l-2 border-gray-200 pl-6 mb-6">
            <h3 className="text-xl font-normal text-gray-900">University of Michigan</h3>
            <p className="text-gray-500 mb-2">Bachelor of Science in Naval Architecture and Marine Engineering</p>
            <p className="text-gray-600">Expected Graduation: 2027</p>
            <p className="text-gray-600 mt-3">Relevant Coursework: Thermodynamics (ME 235), Mechanics of Materials (ME 211), Differential Equations (MTH 295/296)</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-8 text-gray-900">Experience</h2>
          <div className="border-l-2 border-gray-200 pl-6 mb-6">
            <h3 className="text-xl font-normal text-gray-900">Chief Naval Architect</h3>
            <p className="text-gray-500 mb-3">UM::Autonomy | 2024 - Present</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Lead hull design and structural optimization for autonomous surface vessels</li>
              <li>• Manage CNC fabrication processes and material procurement</li>
              <li>• Coordinate team efforts for mid-February competition deadlines</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-8 text-gray-900">Skills</h2>
          <div className="border-l-2 border-gray-200 pl-6">
            <div className="mb-6">
              <h3 className="text-lg font-normal mb-3 text-gray-900">Engineering</h3>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-gray-500">CAD Design</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Naval Architecture</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">CNC Fabrication</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Structural Analysis</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Fusion 360</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Rhino 7</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-normal mb-3 text-gray-900">Interests</h3>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-gray-500">Kitesurfing</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Skiing</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Climbing</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Mountaineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}