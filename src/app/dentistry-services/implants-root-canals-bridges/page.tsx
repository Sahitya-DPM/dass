"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function ImplantsRootCanalsBridges() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Implants, Root Canals & Bridges"
        description="Dentistry at Suburban Square provides a number of special dental procedures, including implants, root canals, and bridges."
        bgImage="/cosnetic.jpeg"
      />

      {/* Dental Implants Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Implants
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tooth loss is a common problem for millions of Americans, and it can happen because of injury, decay, and gingivitis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dental implants are replacement tooth roots that provide a strong foundation for replacement teeth. They are designed to fuse with the bone, and they look and feel like your own teeth. They are also very durable and more comfortable than dentures.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                Benefits of Dental Implants
              </h3>
              <div className="space-y-3">
                {[
                  "Natural look and feel",
                  "Permanent solution",
                  "Preserves jawbone structure",
                  "No impact on adjacent teeth",
                  "Improved chewing and speaking",
                  "Long-lasting durability"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cosnetic.jpeg"
                  alt="Dental Implants"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Root Canals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/invisalign.jpeg"
                  alt="Root Canal Treatment"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Root Canals
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sometimes a tooth that is decayed or infected needs a root canal procedure. A root canal is performed when the nerve of a tooth is infected. During the procedure, the nerve is removed and the inside of the tooth is then cleaned and sealed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Root canals have a bad reputation for being a painful procedure, but that is not the case. Most people don't report pain, and often the most painful part is dealing with the pain up until the procedure.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                When is a Root Canal Needed?
              </h3>
              <div className="space-y-2">
                {[
                  "Severe tooth pain",
                  "Deep decay reaching the nerve",
                  "Infected or abscessed tooth",
                  "Cracked or damaged tooth",
                  "Sensitivity to hot and cold",
                  "Swollen or tender gums"
                ].map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Bridges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bridges
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Like implants, dental bridges can fill a gap created by missing teeth. A bridge is made up of two or more crowns on each side of a missing tooth. A false tooth is then placed in between. Dental bridges are supported by natural teeth or implants.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bridges vary based on the patient, but once the system is in place, a bridge lasts for well over 10-15 years.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                Types of Dental Bridges
              </h3>
              <div className="space-y-3">
                {[
                  "Traditional bridges (most common)",
                  "Cantilever bridges",
                  "Maryland bonded bridges",
                  "Implant-supported bridges"
                ].map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/493915282_1226114906190351_5856231812174639338_n.jpg"
                  alt="Dental Bridges"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Dentistry at Suburban Square?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dr. Wollock and our team are committed to providing the highest quality dental care with a focus on patient comfort and satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and techniques for optimal results and patient comfort.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Dr. Wollock brings years of experience and expertise to every procedure.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Your comfort and satisfaction are our top priorities throughout your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Restore Your Smile?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              For these procedures, it's best to schedule a consultation with Dr. Michael I. Wollock. Call our office at (610) 649-0313 or contact us straight from our website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                Schedule Consultation
              </button>
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

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004681] mb-4">
              Top Rated Dental Care
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.google.com/search?q=dentistry+at+suburban+square&oq=dentistry+at+suburban+square" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                550+ Reviews
              </a>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.facebook.com/DentSubSquare/reviews/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                200+ Reviews
              </a>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/yelp.png"
                  alt="Yelp"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.yelp.com/biz/dentistry-at-suburban-square-ardmore-7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                100+ Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 