"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function CosmeticDentistry() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Cosmetic Dentistry & Veneers"
        description="Many patients just want a better looking smile. An in-office consultation helps us determine if veneers or other cosmetic procedures are the right choice for you. We also offer Main Line Invisalign services."
        bgImage="/cosnetic.jpeg"
      />

      {/* What is Cosmetic Dentistry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Cosmetic Dentistry?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. While traditional dentistry addresses oral health and function, cosmetic dentistry enhances the aesthetic aspects of your smile. Our cosmetic procedures are designed to give you a smile you can be confident about.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                Popular Cosmetic Procedures
              </h3>
              <div className="space-y-3">
                {[
                  "Dental Veneers",
                  "Teeth Whitening",
                  "Dental Bonding",
                  "Invisalign Clear Aligners",
                  "Dental Crowns",
                  "Gum Contouring"
                ].map((procedure, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{procedure}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/493915282_1226114906190351_5856231812174639338_n.jpg"
                  alt="Cosmetic Dentistry"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veneers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cosnetic.jpeg"
                  alt="Dental Veneers"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dental Veneers
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance. They can be made from porcelain or resin composite materials. Porcelain veneers resist stains better than resin veneers and better mimic the light reflecting properties of natural teeth.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                When Are Veneers Recommended?
              </h3>
              <div className="space-y-2">
                {[
                  "Discolored teeth that don't respond to whitening",
                  "Chipped or worn teeth",
                  "Misaligned, uneven, or irregularly shaped teeth",
                  "Teeth with gaps between them",
                  "To create a uniform, bright smile"
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

      {/* Consultation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Schedule Your Cosmetic Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              During your consultation, Dr. Wollock will examine your teeth and discuss your cosmetic goals. We'll create a personalized treatment plan that addresses your specific needs and helps you achieve the smile you've always wanted.
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