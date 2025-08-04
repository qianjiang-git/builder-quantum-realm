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
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#454A53"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-aura-bg rounded-lg flex items-center justify-center transition-colors hover:bg-aura-border">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#454A53"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-aura-bg rounded-lg flex items-center justify-center transition-colors hover:bg-aura-border">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#454A53"></path>
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
