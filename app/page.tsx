"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1oBF1TNiylGtw0-Nhv-Na3_pL34m_7Ska/view?usp=drive_link",
      "_blank"
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Shaik Arshad
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          {/* Animated geometric shapes */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-slow-spin"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-slow-spin-reverse"></div>

          <div className="animate-bounce-in mb-8">
            <div className="relative inline-block">
              <img
                src="/arshad_pic.jpg"
                alt="Shaik Arshad - Profile Photo"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>

          <div className="animate-bounce-in">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 font-serif">
              <span className="block md:inline">
                <span className="inline-block animate-letter-1">S</span>
                <span className="inline-block animate-letter-2">H</span>
                <span className="inline-block animate-letter-3">A</span>
                <span className="inline-block animate-letter-4">I</span>
                <span className="inline-block animate-letter-5">K</span>
              </span>
              <span className="hidden md:inline mx-4"></span>
              <span className="block md:inline">
                <span className="inline-block animate-letter-6">A</span>
                <span className="inline-block animate-letter-7">R</span>
                <span className="inline-block animate-letter-8">S</span>
                <span className="inline-block animate-letter-9">H</span>
                <span className="inline-block animate-letter-10">A</span>
                <span className="inline-block animate-letter-11">D</span>
              </span>
            </h1>
          </div>

          <div className="animate-slide-up-delay-1">
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Full Stack Developer & Cloud Enthusiast</p>
          </div>

          <div className="animate-slide-up-delay-2 flex flex-col items-center gap-4">
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Button>
            <div className="flex flex-col items-center gap-2 mt-2">
              <a
                href="mailto:shaikarshad1687@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                shaikarshad1687@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-arshad-6b03bb195"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/shaik-arshad-6b03bb195
              </a>
              <a
                href="tel:9010511687"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9010511687
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.about ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-400 mr-3 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg">B.Tech Computer Science</h4>
                    <p className="text-gray-300">Sri Venkateswara College of Engineering</p>
                    <p className="text-sm text-gray-400">CGPA: 8.84 | Dec 2021 – May 2024</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg">Computer Engineering</h4>
                    <p className="text-gray-300">Sri Venkateswara Government Polytechnic</p>
                    <p className="text-sm text-gray-400">87.69% | June 2018 – Sep 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-purple-400 mr-3 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold">Passion</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating innovative web solutions and exploring cloud technologies. With
                  experience in full-stack development and a strong foundation in computer science, I enjoy building
                  scalable applications that solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Relevant Coursework Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-center mb-8 font-serif bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
                <svg className="w-10 h-10 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7V3a1 1 0 00-1-1H9a1 1 0 00-1 1v4M5 8h14v13a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
                </svg>
                <h4 className="text-xl font-bold mb-2">OOPS Concept - Java</h4>
                <p className="text-gray-300 text-center text-sm">Mastered Object-Oriented Programming principles using Java, including inheritance, polymorphism, encapsulation, and abstraction.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
                <svg className="w-10 h-10 text-purple-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
                </svg>
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p className="text-gray-300 text-center text-sm">Built responsive web applications using HTML, CSS, JavaScript, React.js, and Next.js frameworks.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
                <svg className="w-10 h-10 text-green-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <h4 className="text-xl font-bold mb-2 text-center">Database Management</h4>
                <p className="text-gray-300 text-center text-sm">Worked with MySQL and SQLite for designing, querying, and managing relational databases efficiently.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
                <svg className="w-10 h-10 text-cyan-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0l-3-3m3 3l3-3M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2" />
                </svg>
                <h4 className="text-xl font-bold mb-2">Networking</h4>
                <p className="text-gray-300 text-center text-sm">Studied computer networks, protocols, and hands-on configuration with Cisco CCNA Routing and Switching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.experience ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 text-green-400 mr-2 animate-spin-slow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                      />
                    </svg>
                    <h3 className="text-2xl font-semibold">Full Stack Web Developer Intern</h3>
                  </div>
                  <p className="text-xl text-green-400 font-medium">VOLT E BYK</p>
                </div>
                <span className="text-sm text-gray-400 bg-green-500/20 px-3 py-1 rounded-full">
                  Oct 2023 – March 2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▶</span>
                  Maintained and enhanced e-commerce platform using Next.js and React.js, improving site load speed by
                  20%
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▶</span>
                  Designed digital assets across platforms, boosting brand engagement by 15%
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▶</span>
                  Participated in estimation meetings, improving project delivery accuracy by 10%
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 text-blue-400 mr-2 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <h3 className="text-2xl font-semibold">Front End Developer Intern</h3>
                  </div>
                  <p className="text-xl text-blue-400 font-medium">SMART NUTS AND BOLTS</p>
                </div>
                <span className="text-sm text-gray-400 bg-blue-500/20 px-3 py-1 rounded-full">
                  Nov 2022 – April 2023
                </span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">▶</span>
                  Developed company website and multiple client websites using HTML, CSS, JavaScript, and Bootstrap
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">▶</span>
                  Built software applications and IoT devices in collaboration with cross-functional teams
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">▶</span>
                  Coordinated directly with clients to gather requirements and ensure successful delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.projects ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-2 group">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-purple-400 mr-3 group-hover:animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Weather Data Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Real-time data pipeline using AWS and Kafka for weather data processing with Power BI dashboards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">AWS</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Kafka</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Power BI</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-2 group">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-pink-400 mr-3 group-hover:animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Blockchain Health Records</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Secure patient medical record system using Ethereum smart contracts and IPFS for decentralized storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">Blockchain</span>
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">Smart Contracts</span>
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">IPFS</span>
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">SQLite</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-2 group">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-400 mr-3 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 16.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Grade Management System</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Console-based application using OOP principles and Java 8 features for student record management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Core Java</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">OOP</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Collections</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Streams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.skills ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-yellow-400 mr-3 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-2">
                {["Java", "JavaScript", "Python", "C", "HTML", "CSS", "MySQL"].map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span
                      className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-ping"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-green-400 mr-3 animate-spin-slow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547V5L8 4z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {["React.js", "Next.js", "Node.js", "TailwindCSS", "Bootstrap"].map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span
                      className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-400 mr-3 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
              </div>
              <div className="space-y-2">
                {["AWS (Lambda, EC2, S3)", "IPFS", "Kafka"].map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span
                      className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-ping"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-purple-400 mr-3 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="space-y-2">
                {["VS Code", "Git", "GitHub", "Power BI", "Eclipse"].map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span
                      className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-ping"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section
        id="achievements"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.achievements ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-400 mr-3 animate-spin-slow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  "AWS Academy Cloud Developing Certificate",
                  "NPTEL Online Certification: Data Analytics with Python",
                  "Salesforce Developer Virtual Internship Certificate",
                  "Cisco Network Academy CCNA Routing and Switching",
                ].map((cert, index) => (
                  <div key={cert} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-orange-400 mr-3 mt-0.5 animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-red-400 mr-3 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-400 mr-3 mt-0.5 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-300">Global rank of 3615 in TCS Codevita Season 11</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-400 mr-3 mt-0.5 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-300">
                    Won second prize in state human rights commission essay writing at SV University, Tirupati
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.contact ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:shaikarshad1687@gmail.com"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email : shaikarshad1687@gmail.com
            </a>

            <a
              href="tel:9010511687"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Me: +91 9010511687
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-arshad-6b03bb195"
              className="bg-gradient-to-r from-b-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Linkedin Profile: shaik-arshad-6b03bb195
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Shaik Arshad. Built with Next.js and lots of ☕</p>
        </div>
      </footer>
    </div>
  )
}
