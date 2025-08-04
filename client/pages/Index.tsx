import { useState } from "react";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI-Powered Creation",
      description: "Transform your ideas into stunning designs with our intelligent AI assistant that understands your creative vision."
    },
    {
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, share feedback instantly, and iterate together effortlessly."
    },
    {
      title: "Advanced Precision Tools",
      description: "Fine-tune every detail with professional-grade tools that give you complete control over your designs."
    }
  ];

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleWaitlistSubmit = () => {
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-aura-border-light">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-aura-dark to-aura-medium rounded-lg flex items-center justify-center rotate-12">
            <div className="w-4 h-4 bg-white rounded-sm -rotate-12"></div>
          </div>
          <span className="text-aura-dark font-semibold text-lg">Aura</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-aura-medium transition-colors hover:text-aura-dark">
            Features
          </a>
          <a href="#about" className="text-aura-medium transition-colors hover:text-aura-dark">
            About
          </a>
          <a href="#pricing" className="text-aura-medium transition-colors hover:text-aura-dark">
            Pricing
          </a>
          <button 
            onClick={scrollToWaitlist}
            className="bg-aura-dark text-white px-6 py-2 rounded-lg transition-all hover:bg-opacity-90"
          >
            Join Waitlist
          </button>
        </div>

        <div className="md:hidden">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#242424" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-aura-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-bold text-aura-dark mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span>Create with </span>
              <span className="bg-gradient-to-r from-aura-dark to-aura-medium bg-clip-text text-transparent">
                intuition
              </span>
              <span>,</span>
              <br />
              <span>refine with </span>
              <span className="bg-gradient-to-r from-aura-medium to-aura-light bg-clip-text text-transparent">
                precision
              </span>
            </h1>
            <p className="text-xl text-aura-medium mb-8 max-w-2xl mx-auto">
              The AI design tool that understands your creative vision and
              helps you bring it to life with unprecedented speed and
              accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={scrollToWaitlist}
                className="bg-aura-dark text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="flex items-center gap-2 text-aura-medium transition-colors hover:text-aura-dark"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.25 4.375L15 10L6.25 15.625V4.375Z" fill="currentColor"></path>
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Demo Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-aura-border overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-aura-bg border-b border-aura-border">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center">
                    <div className="bg-white rounded-full px-4 py-1 text-sm text-aura-light border border-aura-border inline-block">
                      aura.design
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-aura-bg to-white flex items-center justify-center relative">
                  <img 
                    src="https://placehold.co/800x450/F7F7F8/9EA2AD?text=Aura+Design+Interface" 
                    alt="Aura Design Interface" 
                    className="w-full h-full object-cover"
                  />
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M10 8L24 16L10 24V8Z" fill="#242424"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="pointer-events-none absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-aura-dark to-transparent opacity-5 rounded-full blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-aura-medium to-transparent opacity-5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aura-dark mb-4">
              Why designers choose Aura
            </h2>
            <p className="text-lg text-aura-medium max-w-2xl mx-auto">
              Experience the perfect balance of creative freedom and
              technical precision in one powerful platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-aura-border rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#242424" strokeWidth="2" strokeLinejoin="round"></path>
                  <path d="M2 17L12 22L22 17" stroke="#242424" strokeWidth="2" strokeLinejoin="round"></path>
                  <path d="M2 12L12 17L22 12" stroke="#242424" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-aura-dark mb-3">
                Intuitive AI Assistant
              </h3>
              <p className="text-aura-medium leading-relaxed">
                Our AI understands design principles and helps you create
                stunning visuals from simple descriptions or sketches.
              </p>
            </div>
            
            <div className="bg-white border border-aura-border rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#242424" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-aura-dark mb-3">
                Precision Tools
              </h3>
              <p className="text-aura-medium leading-relaxed">
                Fine-tune every pixel with advanced controls that give you
                complete creative control over your designs.
              </p>
            </div>
            
            <div className="bg-white border border-aura-border rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-aura-bg rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#242424" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-aura-dark mb-3">
                Lightning Fast
              </h3>
              <p className="text-aura-medium leading-relaxed">
                Generate, iterate, and refine designs in seconds, not hours.
                Speed up your creative workflow dramatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-aura-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-aura-dark mb-6">
                Design like you think
              </h2>
              <p className="text-lg text-aura-medium mb-8 leading-relaxed">
                Aura bridges the gap between imagination and creation. Our
                AI-powered platform understands your creative intent and
                helps you express it with tools that feel natural and
                intuitive.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                      activeFeature === index ? 'bg-white border border-aura-border' : 'bg-transparent'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeFeature === index ? 'bg-aura-dark' : 'bg-aura-border'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        activeFeature === index ? 'bg-white' : 'bg-aura-light'
                      }`}></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-aura-dark mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-aura-medium text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-aura-border overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-aura-bg to-white flex items-center justify-center">
                  <img 
                    src="https://placehold.co/500x500/F7F7F8/9EA2AD?text=Design+Process+Demo" 
                    alt="Design Process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-aura-dark to-aura-medium rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-aura-medium to-aura-light rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-aura-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your design process?
          </h2>
          <p className="text-lg text-aura-light mb-8 max-w-2xl mx-auto">
            Join thousands of designers who are already on the waitlist for
            early access to Aura.
          </p>
          
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-aura-medium bg-white text-aura-dark"
                />
                <button
                  onClick={handleWaitlistSubmit}
                  className="bg-white text-aura-dark px-6 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100 whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-aura-light mt-3">
                No spam, just updates on our progress and early access.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-aura-medium rounded-lg p-6 border border-aura-light">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  You're on the list!
                </h3>
                <p className="text-aura-light">
                  We'll notify you as soon as Aura is ready for early access.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-aura-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-aura-dark to-aura-medium rounded-lg flex items-center justify-center rotate-12">
                  <div className="w-4 h-4 bg-white rounded-sm -rotate-12"></div>
                </div>
                <span className="text-aura-dark font-semibold text-lg">Aura</span>
              </div>
              <p className="text-aura-medium mb-4 max-w-md">
                The AI design tool that helps you create with intuition and
                refine with precision.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-aura-bg rounded-lg flex items-center justify-center transition-colors hover:bg-aura-border">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.608C22.386 3.172 21.332 3.582 20.21 3.803C19.313 2.846 18.032 2.248 16.616 2.248C13.437 2.248 11.101 5.214 11.819 8.293C7.728 8.088 4.1 6.128 1.671 3.149C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.476 0.965 9.107C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.106C22.505 6.411 23.34 5.544 24 4.557Z" fill="#454A53"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-aura-bg rounded-lg flex items-center justify-center transition-colors hover:bg-aura-border">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="#454A53"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-aura-dark mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">Features</a></li>
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">Pricing</a></li>
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-aura-dark mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">About</a></li>
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">Blog</a></li>
                <li><a href="#" className="text-aura-medium transition-colors hover:text-aura-dark">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-aura-border mt-8 pt-8 text-center">
            <p className="text-aura-light">© 2024 Aura. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-90vh overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-aura-border">
              <h3 className="text-lg font-semibold text-aura-dark">Aura Demo</h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-aura-bg"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="#454A53" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-aura-bg flex items-center justify-center">
              <img 
                src="https://placehold.co/800x450/F7F7F8/9EA2AD?text=Demo+Video+Player" 
                alt="Demo Video" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
