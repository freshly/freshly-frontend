'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-[#01AC66] text-white transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-2">
            <img 
              src="/FreshlyLogoNOBG.png" 
              alt="Freshly Logo" 
              className="w-24 h-12 object-contain" 
            />
            <p className="text-white/90 text-sm">Your trusted partner in sustainable living</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="text-white/90 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/contact" className="text-white/90 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="/faq" className="text-white/90 hover:text-white transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Contact Us</h3>
            <div className="space-y-1 text-white/90 text-sm">
              <p>Email: support@freshly.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-white/90 hover:text-white transition-colors group">
                <img 
                  src="/facebook-new.png" 
                  alt="Facebook" 
                  className="w-5 h-5 transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100 [filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(90%)_contrast(90%)] group-hover:[filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(100%)_contrast(100%)_drop-shadow(0_0_2px_rgba(253,129,0,0.5))]" 
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors group">
                <img 
                  src="/instagram-new--v2.png" 
                  alt="Instagram" 
                  className="w-5 h-5 transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100 [filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(90%)_contrast(90%)] group-hover:[filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(100%)_contrast(100%)_drop-shadow(0_0_2px_rgba(253,129,0,0.5))]" 
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors group">
                <img 
                  src="/twitterx.png" 
                  alt="X (formerly Twitter)" 
                  className="w-5 h-5 transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100 [filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(90%)_contrast(90%)] group-hover:[filter:invert(1)_sepia(1)_saturate(1000%)_hue-rotate(330deg)_brightness(100%)_contrast(100%)_drop-shadow(0_0_2px_rgba(253,129,0,0.5))]" 
                />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-white/90">
              <p>© {currentYear} Freshly. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}