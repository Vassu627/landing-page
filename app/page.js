import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">MyLanding</h1>
        <button className="bg-white text-indigo-600 px-5 py-2 rounded-xl font-semibold">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold max-w-3xl">
          Build Modern Web Experiences with React & Next.js
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-gray-200">
          A clean and responsive landing page built using Next.js and deployed
          on a free hosting platform.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold">
            Learn More
          </button>
          <button className="border border-white px-6 py-3 rounded-xl font-semibold">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mt-28 px-10 pb-20">
        {["Fast Performance", "Responsive Design", "Easy Deployment"].map(
          (feature) => (
            <div
              key={feature}
              className="bg-white/10 p-6 rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-200">
                Optimized for speed and usability using modern web technologies.
              </p>
            </div>
          )
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-200 border-t border-white/20">
        © 2025 MyLanding. All rights reserved.
      </footer>
    </main>
  );
}
