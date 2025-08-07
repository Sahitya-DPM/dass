import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Dentistry at Suburban Square"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-[#004681] transition-colors">Home</a></li>
              <li><a href="/dentistry-services" className="hover:text-[#004681] transition-colors">Dentistry</a></li>
              <li><a href="#about" className="hover:text-[#004681] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#004681] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon: 7:00 AM - 5:00 PM</li>
              <li>Tue: 9:00 AM - 8:00 PM</li>
              <li>Wed: 8:00 AM - 5:00 PM</li>
              <li>Thu: 9:00 AM - 8:00 PM</li>
              <li>Fri: 7:00 AM - 3:00 PM</li>
              <li>Sat: Hours by Appointment</li>
              <li>Sun: Closed</li>
            </ul>
            <p className="text-gray-500 text-sm mt-3 italic">*Hours are subject to change</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Map</h4>
            <div className="space-y-2 text-gray-400">
              <p>32 Parking Plaza, Suite 604</p>
              <p>Ardmore, PA 19003</p>
              <p>Located in The Times Building in<br />Suburban Square.</p>
              <a 
                href="https://maps.google.com/?q=32+Parking+Plaza,+Suite+604,+Ardmore,+PA+19003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] hover:text-[#003366] transition-colors underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Dentistry at Suburban Square |{" "}
            <a href="/privacy-policy" className="hover:text-[#004681] transition-colors">Privacy Policy</a> |{" "}
            <a href="/terms-and-conditions" className="hover:text-[#004681] transition-colors">Terms and Conditions</a> |{" "}
            <a href="/directions" className="hover:text-[#004681] transition-colors">Directions</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 