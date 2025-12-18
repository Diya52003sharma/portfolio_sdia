import React from "react";
export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-indigo-900 via-pink-400 to-purple-600 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white">Diya Sharma</h1>
          <div className="space-x-6 text-lg">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

     
      <section id="home" className=" flex items-center justify-center text-center px-6 pt-32 bg-gradient-to-br from-pink-400  to-indigo-900 animate-gradient-x">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg animate-pulse">Hi, I'm Diya Sharma</h2>
          <p className="text-xl mt-4 text-gray-300">Frontend Developer </p>
         <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg"
        >
          Download Resume
        </a>
 
        </div>
      </section>

      {/* Skills */}
     <section id="skills" className="py-20 bg-gray-800">
    <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">Skills</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">HTML</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">CSS</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">JavaScript</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">React</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">Tailwind CSS</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">TypeScript</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">Git</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">GitHub</div>
    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-700 rounded-xl shadow-lg text-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300">Bootstrap</div>
  </div>
</section>



      <section id="projects" className="py-20 bg-gray-900">
        <h2 className="text-center text-4xl font-bold text-yellow-400 mb-12">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
       
          <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-400 rounded-2xl shadow-2xl p-6 hover:scale-[1.03] transition-all">
            <h3 className="text-2xl font-bold text-yellow-300">AI Mock Interview Platform</h3>
            <p className="mt-3 text-gray-100">AI-based platform that takes interviews, gives feedback, provides suggestions, and stores user responses.</p>
            <div className="mt-4 flex gap-4">
              <a className="text-yellow-300 underline" href="https://ai-interview-lwxx.onrender.com/ ">Live</a>
              <a className="text-yellow-300 underline" href="#">Code</a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-700 via-pink-400 to-indigo-800 rounded-2xl shadow-2xl p-6 hover:scale-[1.03] transition-all">
            <h3 className="text-2xl font-bold text-yellow-300">Engineering Hub. Website</h3>
            <p className="mt-3 text-gray-100">Website for students with notes, videos, and resources organized semester-wise.</p>
            <div className="mt-4 flex gap-4">
              <a className="text-yellow-300 underline" href="https://engghub.onrender.com/ ">Live</a>
              <a className="text-yellow-300 underline" href="#">Code</a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400 via-indigo-700 to-purple-700 rounded-2xl shadow-2xl p-6 hover:scale-[1.03] transition-all">
            <h3 className="text-2xl font-bold text-yellow-300">Hotel Website</h3>
            <p className="mt-3 text-gray-100">React-based grocery UI to manage items, add products, and track cart state.</p>
            <div className="mt-4 flex gap-4">
              <a className="text-yellow-300 underline" href="#">Live</a>
              <a className="text-yellow-300 underline" href="#">Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">Contact Me</h2>
        <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-400 rounded-2xl shadow-2xl">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-xl border-2 border-yellow-400 outline-yellow-400 bg-gray-900 text-white" />
            <input type="email" placeholder="Your Email" className="p-3 rounded-xl border-2 border-yellow-400 outline-yellow-400 bg-gray-900 text-white" />
            <textarea placeholder="Message" className="p-3 rounded-xl border-2 border-yellow-400 outline-yellow-400 bg-gray-900 text-white" rows="4"></textarea>
            <button className="bg-yellow-400 text-gray-900 p-3 rounded-xl shadow hover:bg-yellow-500 transition-all font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-300 bg-gray-900 mt-10 border-t border-yellow-400">
         2025 Diya Sharma | Frontend Developer
      </footer>
    </div>
  );
}























