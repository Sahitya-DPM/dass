"use client";

import Image from "next/image";
import { CheckCircle, Star, MapPin, Phone, Clock, Navigation } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function Directions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Directions to Our Office"
        description="Find your way to Dentistry at Suburban Square, conveniently located in the heart of Ardmore, Pennsylvania."
        bgImage="/Conveniently Located on the Main Line.jpeg"
      />

      {/* Office Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">32 Parking Plaza, Suite 604</p>
                    <p className="text-gray-700">Ardmore, PA 19003</p>
                    <p className="text-gray-600 text-sm">Located in The Times Building in Suburban Square</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:(610) 649-0313" className="text-[#004681] hover:text-[#003366] transition-colors">
                      (610) 649-0313
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Mon: 7:00 AM - 5:00 PM</p>
                      <p>Tue: 9:00 AM - 8:00 PM</p>
                      <p>Wed: 8:00 AM - 5:00 PM</p>
                      <p>Thu: 9:00 AM - 8:00 PM</p>
                      <p>Fri: 7:00 AM - 3:00 PM</p>
                      <p>Sat: Hours by Appointment</p>
                      <p>Sun: Closed</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">*Hours are subject to change</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=32+Parking+Plaza,+Suite+604,+Ardmore,+PA+19003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#004681] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003366] transition-colors"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/office-exterior.jpg"
                  alt="Dentistry at Suburban Square Office"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How to Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We&apos;re conveniently located in Suburban Square, making it easy to reach us from anywhere in the Main Line area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">From Philadelphia</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Take I-76 West (Schuylkill Expressway)</p>
                <p>• Exit at City Avenue (Route 1)</p>
                <p>• Continue on Lancaster Avenue</p>
                <p>• Turn right onto Montgomery Avenue</p>
                <p>• Suburban Square will be on your left</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">From King of Prussia</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Take Route 202 South</p>
                <p>• Turn left onto Lancaster Avenue</p>
                <p>• Continue for approximately 3 miles</p>
                <p>• Turn left onto Montgomery Avenue</p>
                <p>• Suburban Square will be on your left</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">From Wayne/Radnor</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Take Lancaster Avenue East</p>
                <p>• Continue through Wayne and Bryn Mawr</p>
                <p>• Turn right onto Montgomery Avenue</p>
                <p>• Suburban Square will be on your left</p>
                <p>• Look for The Times Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/parking-lot.jpg"
                  alt="Suburban Square Parking"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Parking Information
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suburban Square offers convenient parking options for our patients. Here&apos;s what you need to know about parking when visiting our office.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Free Parking</h4>
                  <p className="text-blue-800 text-sm">
                    Suburban Square offers free parking for all visitors. No parking meters or fees to worry about.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Parking Locations</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Main parking lot behind the shopping center</li>
                    <li>• Street parking on Montgomery Avenue</li>
                    <li>• Additional parking on Lancaster Avenue</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Accessibility</h4>
                  <p className="text-yellow-800 text-sm">
                    Handicap-accessible parking spaces are available near the main entrances to The Times Building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Transportation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Public Transportation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our office is easily accessible by public transportation from Philadelphia and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEPTA Regional Rail</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Take the Paoli/Thorndale Line</p>
                <p>• Exit at Ardmore Station</p>
                <p>• Walk 5 minutes to Suburban Square</p>
                <p>• The Times Building is located at the center of the shopping district</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEPTA Bus Routes</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Route 105: Lancaster Avenue</p>
                <p>• Route 106: Montgomery Avenue</p>
                <p>• Route 123: Haverford Road</p>
                <p>• All routes stop within walking distance of our office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nearby Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              While you&apos;re in Suburban Square, take advantage of the many shops, restaurants, and services available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🍽️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Restaurants</h3>
              <p className="text-gray-600 text-sm">Multiple dining options within walking distance</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🛍️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shopping</h3>
              <p className="text-gray-600 text-sm">Retail stores and boutiques in Suburban Square</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🏦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Banks</h3>
              <p className="text-gray-600 text-sm">ATM and banking services available</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
              <p className="text-gray-600 text-sm">Free parking for all visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Visit Our Office?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We look forward to welcoming you to our practice. If you need any assistance with directions, please don&apos;t hesitate to call us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maps.google.com/?q=32+Parking+Plaza,+Suite+604,+Ardmore,+PA+19003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors"
              >
                Get Directions
              </a>
              <a 
                href="tel:(610) 649-0313" 
                className="border-2 border-[#004681] text-[#004681] px-8 py-4 rounded-lg font-semibold hover:bg-[#004681] hover:text-white transition-colors"
              >
                Call (610) 649-0313
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 