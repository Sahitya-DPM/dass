"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function LaserGingivectomy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Laser Gingivectomy"
        description="Gingivectomy is a simple procedure that removes excess gum tissue to improve the appearance of your smile and overall oral health."
        bgImage="/cosnetic.jpeg"
      />

      {/* What is Laser Gingivectomy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Laser Gingivectomy?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gingivectomy is a simple procedure that removes excess gum tissue to improve the appearance of your smile and overall oral health. This minimally invasive treatment uses advanced laser technology to reshape and contour your gums with precision and minimal discomfort.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                Benefits of Laser Treatment
              </h3>
              <div className="space-y-3">
                {[
                  "Minimal discomfort during and after procedure",
                  "Faster healing time compared to traditional methods",
                  "Reduced bleeding and swelling",
                  "Precise treatment with minimal damage to surrounding tissue",
                  "Lower risk of infection",
                  "Improved gum health and aesthetics"
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
                  src="/invisalign.jpeg"
                  alt="Laser Gingivectomy"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When is it Needed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cosnetic.jpeg"
                  alt="Gum Health"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When is Laser Gingivectomy Needed?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Laser gingivectomy may be recommended for various gum health and cosmetic concerns. Dr. Wollock will evaluate your specific situation and determine if this treatment is right for you.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#004681] mb-4">
                Common Reasons for Treatment
              </h3>
              <div className="space-y-2">
                {[
                  "Excess gum tissue (gummy smile)",
                  "Gum disease treatment",
                  "Gum reshaping for cosmetic purposes",
                  "Crown lengthening procedures",
                  "Treatment of gum pockets",
                  "Improving gum line symmetry"
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

      {/* Procedure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Laser Gingivectomy Procedure
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our laser gingivectomy procedure is performed with precision and care to ensure optimal results and patient comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Planning</h3>
              <p className="text-gray-600">
                Dr. Wollock will examine your gums and discuss your treatment goals to create a personalized plan.
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Laser Treatment</h3>
              <p className="text-gray-600">
                Using advanced laser technology, excess gum tissue is precisely removed with minimal discomfort.
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recovery & Follow-up</h3>
              <p className="text-gray-600">
                Fast healing with minimal downtime. Follow-up appointments ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Improve Your Gum Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Contact us to schedule a consultation with Dr. Wollock. We'll evaluate your gum health and discuss how laser gingivectomy can benefit your smile.
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
      <section className="py-20 bg-white">
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