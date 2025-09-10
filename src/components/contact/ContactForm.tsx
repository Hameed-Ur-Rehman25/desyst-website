'use client';

import { useState, useEffect } from 'react';
import { Mail, Star, Send, Sparkles, Loader2, MapPin } from 'lucide-react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,#1a0b2e_0%,#020108_100%)] px-4 py-16 sm:py-24 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
      </div>

      {/* Optimized Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#4f3b99]/10 rounded-full blur-[128px] animate-aurora" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#3b4999]/10 rounded-full blur-[96px] animate-aurora delay-[2s]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Enhanced Header Section */}
        <div className={`mx-auto max-w-3xl text-center mb-12 sm:mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rounded-full bg-[#ffffff08] px-4 py-1.5 ring-1 ring-[#ffffff16]">
            <Star className="w-4 h-4 text-[#a18fff] animate-pulse" />
            <span className="text-sm font-medium text-[#a18fff]">Get in Touch</span>
          </div>
          
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            <span className="relative inline-block">
              <span className="relative">Let&apos;s Create</span>
            </span>
            <span className="relative block mt-2">
              <span className="bg-gradient-to-r from-[#a18fff] via-[#8291ff] to-[#b18fff] bg-clip-text text-transparent animate-gradient">
                Something Amazing
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Form Section */}
          <div className={`relative transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4f3b99] to-[#3b4999] rounded-2xl blur-xl opacity-20 animate-pulse-slow" />
            <div className="relative rounded-2xl bg-[#ffffff08] p-6 sm:p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#a18fff] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl bg-[#ffffff08] border border-[#ffffff16] px-4 py-3 text-white placeholder-[#ffffff48] backdrop-blur-sm focus:border-[#a18fff] focus:ring-2 focus:ring-[#a18fff]/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#a18fff] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl bg-[#ffffff08] border border-[#ffffff16] px-4 py-3 text-white placeholder-[#ffffff48] backdrop-blur-sm focus:border-[#a18fff] focus:ring-2 focus:ring-[#a18fff]/20 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#a18fff] mb-2">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl bg-[#ffffff08] border border-[#ffffff16] px-4 py-3 text-white placeholder-[#ffffff48] backdrop-blur-sm focus:border-[#a18fff] focus:ring-2 focus:ring-[#a18fff]/20 transition-all resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#4f3b99] to-[#3b4999] p-0.5"
                >
                  <div className="relative bg-[#0f051d] rounded-[11px] py-3 px-6 transition-all group-hover:bg-opacity-90">
                    <div className="flex items-center justify-center gap-2 text-white">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </div>
                </button>

                {submitted && (
                  <div className="mt-4 p-4 rounded-xl bg-[#4f3b99]/20 text-[#a18fff] text-center">
                    <Sparkles className="w-5 h-5 inline-block mr-2" />
                    Thank you! We&apos;ll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Enhanced Contact Info Section - Hidden on mobile, visible on desktop */}
          <div className={`hidden lg:block space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4f3b99] to-[#3b4999] rounded-2xl blur-xl opacity-20" />
              <div className="relative rounded-2xl bg-[#ffffff08] p-6 sm:p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#4f3b99]/20 to-[#3b4999]/20">
                        <Mail className="h-6 w-6 text-[#a18fff]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Reach Out</h3>
                      <p className="mt-2 text-[#ffffffb3]">info@knevatech.com</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#ffffff16]">
                    <div className="rounded-xl bg-gradient-to-r from-[#4f3b99]/10 to-[#3b4999]/10 p-6">
                      <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-6">
                        <MapPin className="w-5 h-5 text-[#a18fff]" />
                        Our Location
                      </h4>
                      <div className="space-y-4 text-[#ffffffb3]">
                        <div className="flex items-start gap-4">
                          <span className="w-2 h-2 rounded-full bg-[#a18fff] mt-2" />
                          <div>
                            <p className="font-medium text-white">Head Office</p>
                            <div className="mt-1 space-y-1">
                              <p>Unit 5, Coldwall Industrial Estate, Spotland Road, Rochdale OL12 7BD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-10px, 10px) scale(1.1); opacity: 0.7; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-aurora { animation: aurora 10s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% auto; 
          animation: gradient 8s linear infinite; 
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}