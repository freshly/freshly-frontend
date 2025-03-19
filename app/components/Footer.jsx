export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-b from-green-700 to-green-900 text-white text-center p-4">

      <div className="flex justify-center space-x-4">
      <a href="/about" /* place real link here */  className="hover:underline">About</a>
      <a href="/contact" /* place real link here */ className="hover:underline">Contact</a>
      <a href="/faq"  /* place real link here */ className="hover:underline">FAQs</a> 
      </div>

      <div className="flex justify-center p-2">
        <img 
          src="/FreshlyLogoNOBG.png" 
          alt="Logo" 
          className="w-35 h-20 rounded-full" 
        />
      </div>

      <div className="flex justify-center mt-2"> Company Slogan  </div> 

      <br />

      <div>
        Follow Us On Social Media!
      </div>

      <div className="flex justify-center mt-4 space-x-4">
      <a href="https://facebook.com" /* place real link here */ target="_blank" rel="noopener noreferrer"> 
      <img src="/facebook-new.png" alt="Facebook" className="w-8 h-8 transition-transform duration-200 hover:scale-125" />
      </a> 
      <a href="https://instagram.com" /* place real link here */ target="_blank" rel="noopener noreferrer">
      <img src="/instagram-new--v2.png" alt="Instagram" className="w-8 h-8 transition-transform duration-200 hover:scale-125" />
      </a>
      <a href="https://twitter.com" /* place real link here */  target="_blank" rel="noopener noreferrer">
      <img src="/twitterx.png" alt="X (formerly Twitter)" className="w-8 h-8 transition-transform duration-200 hover:scale-125" />
      </a>
      </div>
      
      <br />


      <div className="text-sm">Copyright © {currentYear}, Freshly. All Rights Reserved.</div>

      <div className="text-sm">
      <p>Email: ------@freshly.com | Phone: +1 (###) ###-####</p>
      </div>
    
    </div>
  );
}