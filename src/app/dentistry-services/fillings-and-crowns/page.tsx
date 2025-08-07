"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function FillingsAndCrowns() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Fillings and Crowns"
        description="If you have a decaying, cracked, or fractured tooth, then you may be in need of a crown or a filling. Don't wait around for a decaying tooth to just disappear, as you could then be faced with bigger and more expensive problems. Dentistry at Suburban Square is skilled at dealing with these oral problems, and we can gladly help you decide if you are in need of a crown or a filling."
        bgImage="/cosnetic.jpeg"
      />

      {/* Fillings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is a Filling?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A filling is used to repair a tooth that may be affected by fractures, cracks, or decay. A composite (tooth-colored) filling is often the most common type of filling. In this process, the affected portion of the tooth is removed and then filled with a composite filling. A filling will last for years to come so your smile will stay looking great.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                When Do I Need a Filling?
              </h3>
              <p className="text-lg text-gray-700 mb-4">Common reasons you might need a filling include:</p>
              <div className="space-y-2">
                {[
                  "Decayed teeth",
                  "Chipped teeth",
                  "Cracked or broken teeth",
                  "Closing space between two teeth",
                  "Worn teeth"
                ].map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cosnetic.jpeg"
                  alt="Dental Fillings"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crowns Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/invisalign.jpeg"
                  alt="Dental Crowns"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is a Crown?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A dental crown acts as a cap, as it is a covering that encases the entire tooth's surface, restoring it to its original shape and size. A crown is often needed when a filling can't do the job, and a crown protects the overall tooth structure. Porcelain crowns are popular because they match the color of your teeth and are highly durable. Newer crowns are also resistant to grinding and other abuses. When you need a crown, we customize it to match the size, shape, and colors of your teeth.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                When Do I Need a Crown?
              </h3>
              <p className="text-lg text-gray-700 mb-4">Common reasons you might need a crown include:</p>
              <div className="space-y-2">
                {[
                  "Fractured fillings",
                  "Broken or fractured teeth",
                  "Cosmetic reasons",
                  "Decayed teeth",
                  "Large fillings",
                  "Root canal on a tooth"
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Would you like to learn more information about crowns and fillings or are you ready to schedule an appointment? Contact us straight from our website or call (610) 649-0313.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                Schedule Online
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