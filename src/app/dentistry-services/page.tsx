"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function DentistryServices() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
            <PageBanner
        title="Expert Dental Care"
        subtitle="With or Without Insurance"
        description="We do whatever it takes to ensure you pay as little out-of-pocket as possible!"
        bgImage="/cosnetic.jpeg"
      />

      {/* Insurance Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004681] mb-4">
              $0 Cleanings for Patients With Insurance!
            </h2>
            <p className="text-lg text-gray-600">
              We accept almost all insurance providers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-[#004681] mb-2">
                Free* Brighter, White Cleaning for Adults
              </h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-[#004681] mb-2">
                Free* Exam for Adults
              </h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-[#004681] mb-2">
                Free* Cleaning & Exam for Children
              </h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-[#004681] mb-2">
                Free* Second Opinion Evaluation
              </h3>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 italic">
            *FREE for patients with insurance.
          </p>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004681] mb-4">
              Smile Now! Pay Later! — 0% Financing
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              We Offer Affordable Dental Coverage for Uninsured Patients
            </h3>
            <div className="text-2xl font-bold text-[#004681] mb-4">
              As Low as $324/Year
            </div>
            <p className="text-gray-600">
              Offer includes two cleanings, two exams & x-rays. Learn more about our payment options for patients without insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A Trusted & Superior Level of Dental Care
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Cleanings and X-Rays</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular teeth cleanings are recommended every six months and digital X-rays are taken once every 1-2 years to check for decay. We offer flexible appointment schedules before and after work or school.
              </p>
              <Link href="/dentistry-services/teeth-cleanings" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fillings and Crowns</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A dental crown protects and strengthens a tooth's structure. A filling is used to repair a tooth that is affected by cracks and decay. Dentistry at Suburban Square does excellent work with fillings and crowns.
              </p>
              <Link href="/dentistry-services/fillings-and-crowns" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cosmetic Dentistry & Veneers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Many patients just want a better looking smile. An in-office consultation helps us determine if veneers or other cosmetic procedures are the right choice for you. We also offer Main Line Invisalign services.
              </p>
              <Link href="/dentistry-services/cosmetic-dentistry-and-veneers" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Laser Gingivectomy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced laser treatment for gum reshaping and periodontal procedures with minimal discomfort and faster healing.
              </p>
              <Link href="/dentistry-services/laser-gingivectomy" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implants, Root Canals & Bridges</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We make all of our dental procedures as painless as possible. Once we're complete, you won't be able to stop smiling.
              </p>
              <Link href="/dentistry-services/implants-root-canals-bridges" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Other Procedures</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive dental care including root canals, extractions, and specialized treatments tailored to your needs.
              </p>
              <Link href="/dentistry-services" className="text-[#004681] font-medium hover:text-[#003366] transition-colors">
                Learn More →
              </Link>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#004681]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Come See Our Caring Dental Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a cleaning appointment online or give us a call at (610) 649-0313.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#004681] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Online
            </button>
            <a 
              href="tel:(610) 649-0313" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#004681] transition-colors"
            >
              Call (610) 649-0313
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 