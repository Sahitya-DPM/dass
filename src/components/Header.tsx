"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Facebook, Instagram, Youtube, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
             {/* Sub Header */}
       <div className="bg-gray-100 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-12">
             {/* Social Media Icons */}
             <div className="flex items-center space-x-4">
               <a href="https://www.facebook.com/DentSubSquare/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#004681] transition-colors">
                 <Facebook className="h-5 w-5" />
               </a>
               <a href="https://www.instagram.com/dentistry_at_suburban_square/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="https://www.youtube.com/user/DentSubSquare" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                 <Youtube className="h-5 w-5" />
               </a>
             </div>
             
             {/* Contact Info and Online Scheduling */}
             <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
               <a 
                 href="tel:(610) 649-0313" 
                 className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-[#004681] transition-colors font-medium text-xs sm:text-sm"
               >
                 <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                 <span className="hidden sm:inline">(610) 649-0313</span>
                 <span className="sm:hidden">(610) 649-<br />0313</span>
               </a>
               <button className="bg-[#004681] text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#003366] transition-colors whitespace-nowrap">
                 <span className="hidden sm:inline">Online Scheduling</span>
                 <span className="sm:hidden">Online<br />Scheduling</span>
               </button>
             </div>
           </div>
         </div>
       </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <Image
                    src="/logo.png"
                    alt="Dentistry at Suburban Square"
                    width={280}
                    height={80}
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-[#004681] px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <div className="relative group">
                  <a href="/best-invisalign-deal" className="text-gray-700 hover:text-[#004681] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    Invisalign®
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {/* The Invisalign® Experience */}
                      <div className="relative group/sub">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors flex items-center justify-between">
                          The Invisalign® Experience
                          <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                          <div className="py-2">
                                                         <a href="/selfie-gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               Selfie Gallery
                             </a>
                                                         <a href="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               FAQs
                             </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Invisalign® Comparisons */}
                      <div className="relative group/sub">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors flex items-center justify-between">
                          Invisalign® Comparisons
                          <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                          <div className="py-2">
                                                         <a href="/invisalign-vs-braces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               Invisalign® vs Braces
                             </a>
                             <a href="/invisalign-vs-smile-direct-club" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               Invisalign® vs Smile Direct Club
                             </a>
                             <a href="/invisalign-vs-candid-co" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               Invisalign® vs Candid Co
                             </a>
                             <a href="/cost-of-invisalign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               Cost of Invisalign®
                             </a>
                             <a href="/my-dentist-said-i-cant-do-invisalign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                               My Dentist Said I Can't Do Invisalign®
                             </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Invisalign® for All */}
                      <div className="relative group/sub">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors flex items-center justify-between">
                          Invisalign® for All
                          <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                          <div className="py-2">
                            <a href="/invisalign-for-brides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                              Invisalign® for Brides
                            </a>
                            <a href="/invisalign-for-teens" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                              Invisalign® for Teens
                            </a>
                            <a href="/invisalign-for-travelers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                              Invisalign® for Travelers
                            </a>
                            <a href="/invisalign-payment-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                              Invisalign® Payment Plans
                            </a>
                            <a href="/philadelphia-invisalign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                              Philadelphia Invisalign®
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="/dentistry-services" className="text-gray-700 hover:text-[#004681] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    Dentistry
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a href="/dentistry-services/teeth-cleanings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Teeth Cleanings
                      </a>
                      <a href="/dentistry-services/fillings-and-crowns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Fillings & Crowns
                      </a>
                      <a href="/dentistry-services/cosmetic-dentistry-and-veneers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Cosmetic Dentistry
                      </a>
                      <a href="/dentistry-services/laser-gingivectomy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Laser Gingivectomy
                      </a>
                      <a href="/dentistry-services/implants-root-canals-bridges" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Implants & Root Canals
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="/about-us" className="text-gray-700 hover:text-[#004681] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    About Us
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a href="/how-much-does-invisalign-cost" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Invisalign Cost
                      </a>
                      <a href="/insurance-accepted" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Insurance Accepted
                      </a>
                      <a href="/directions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Directions
                      </a>
                      <a href="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004681] transition-colors">
                        Reviews
                      </a>
                    </div>
                  </div>
                </div>
                <a href="/contact" className="text-gray-700 hover:text-[#004681] px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
                         <div className="md:hidden">
               <button 
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 className="text-gray-700 hover:text-[#004681] p-2"
               >
                 {isMobileMenuOpen ? (
                   <X className="h-6 w-6" />
                 ) : (
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                 )}
               </button>
             </div>
          </div>
                 </div>
       </nav>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden bg-white border-b border-gray-200">
           <div className="px-4 py-6 space-y-4">
             <a href="/" className="block text-gray-700 hover:text-[#004681] py-2 text-base font-medium transition-colors">Home</a>
             
             {/* Invisalign® Section */}
             <div className="space-y-2">
               <div className="text-gray-700 py-2 text-base font-medium">Invisalign®</div>
               <div className="pl-4 space-y-2">
                 <div className="text-gray-600 py-1 text-sm font-medium">The Invisalign® Experience</div>
                 <div className="pl-4 space-y-1">
                   <a href="/selfie-gallery" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Selfie Gallery</a>
                   <a href="/faqs" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">FAQs</a>
                 </div>
                 
                 <div className="text-gray-600 py-1 text-sm font-medium">Invisalign® Comparisons</div>
                 <div className="pl-4 space-y-1">
                   <a href="/invisalign-vs-braces" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® vs Braces</a>
                   <a href="/invisalign-vs-smile-direct-club" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® vs Smile Direct Club</a>
                   <a href="/invisalign-vs-candid-co" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® vs Candid Co</a>
                   <a href="/cost-of-invisalign" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Cost of Invisalign®</a>
                   <a href="/my-dentist-said-i-cant-do-invisalign" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">My Dentist Said I Can't Do Invisalign®</a>
                 </div>
                 
                 <div className="text-gray-600 py-1 text-sm font-medium">Invisalign® for All</div>
                 <div className="pl-4 space-y-1">
                   <a href="/invisalign-for-brides" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® for Brides</a>
                   <a href="/invisalign-for-teens" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® for Teens</a>
                   <a href="/invisalign-for-travelers" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® for Travelers</a>
                   <a href="/invisalign-payment-plans" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign® Payment Plans</a>
                   <a href="/philadelphia-invisalign" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Philadelphia Invisalign®</a>
                 </div>
               </div>
             </div>
             
             {/* Dentistry Section */}
             <div className="space-y-2">
               <div className="text-gray-700 py-2 text-base font-medium">Dentistry</div>
               <div className="pl-4 space-y-1">
                 <a href="/dentistry-services/teeth-cleanings" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Teeth Cleanings</a>
                 <a href="/dentistry-services/fillings-and-crowns" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Fillings & Crowns</a>
                 <a href="/dentistry-services/cosmetic-dentistry-and-veneers" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Cosmetic Dentistry</a>
                 <a href="/dentistry-services/laser-gingivectomy" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Laser Gingivectomy</a>
                 <a href="/dentistry-services/implants-root-canals-bridges" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Implants & Root Canals</a>
               </div>
             </div>
             
             {/* About Us Section */}
             <div className="space-y-2">
               <div className="text-gray-700 py-2 text-base font-medium">About Us</div>
               <div className="pl-4 space-y-1">
                 <a href="/how-much-does-invisalign-cost" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Invisalign Cost</a>
                 <a href="/insurance-accepted" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Insurance Accepted</a>
                 <a href="/directions" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Directions</a>
                 <a href="/reviews" className="block text-gray-600 hover:text-[#004681] py-1 text-sm transition-colors">Reviews</a>
               </div>
             </div>
             
             <a href="/contact" className="block text-gray-700 hover:text-[#004681] py-2 text-base font-medium transition-colors">Contact</a>
           </div>
         </div>
       )}
     </>
   );
 } 