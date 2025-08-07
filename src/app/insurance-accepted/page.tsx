"use client";

import Image from "next/image";
import { CheckCircle, Star, MapPin, Phone, Clock, Shield } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InsuranceAccepted() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Insurance Accepted"
        description="We work with most major insurance providers to help you maximize your dental benefits and make quality dental care affordable."
        bgImage="/cosnetic.jpeg"
      />

      {/* Insurance Providers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Insurance Providers We Accept
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are in-network with many major insurance providers and can work with out-of-network plans to help you maximize your benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Major Insurance Companies</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Aetna</p>
                <p>• Blue Cross Blue Shield</p>
                <p>• Cigna</p>
                <p>• Delta Dental</p>
                <p>• Guardian</p>
                <p>• MetLife</p>
                <p>• UnitedHealthcare</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Providers</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Ameritas</p>
                <p>• Assurant</p>
                <p>• CareFirst</p>
                <p>• Humana</p>
                <p>• Principal</p>
                <p>• SunLife</p>
                <p>• And many more...</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Programs</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Medicare Advantage Plans</p>
                <p>• PPO Plans</p>
                <p>• HMO Plans (select)</p>
                <p>• Dental Discount Plans</p>
                <p>• Flexible Spending Accounts</p>
                <p>• Health Savings Accounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Help You Maximize Your Benefits
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our experienced team works hard to help you get the most out of your dental insurance. We handle the paperwork and work directly with your insurance company to ensure you receive the maximum benefits available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Insurance Verification</h4>
                    <p className="text-gray-600">We verify your benefits before treatment to avoid surprises</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Claims Submission</h4>
                    <p className="text-gray-600">We submit all claims on your behalf to save you time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Benefit Explanation</h4>
                    <p className="text-gray-600">We explain your coverage and out-of-pocket costs clearly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Appeal Support</h4>
                    <p className="text-gray-600">We help appeal denied claims when appropriate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Bring to Your Visit</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#004681]" />
                  <span className="text-gray-700">Your insurance card</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#004681]" />
                  <span className="text-gray-700">Photo ID</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#004681]" />
                  <span className="text-gray-700">List of current medications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#004681]" />
                  <span className="text-gray-700">Previous dental records (if available)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Understanding Your Dental Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dental insurance can be complex. Here&apos;s what you need to know about your coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventive Care</h3>
              <p className="text-gray-600 text-sm">
                Cleanings, exams, and X-rays are typically covered at 100%
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">80%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Restorative</h3>
              <p className="text-gray-600 text-sm">
                Fillings and simple extractions are usually covered at 80%
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">50%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Restorative</h3>
              <p className="text-gray-600 text-sm">
                Crowns, bridges, and complex procedures at 50%
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">Varies</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Orthodontics</h3>
              <p className="text-gray-600 text-sm">
                Invisalign and braces coverage varies by plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if my insurance doesn&apos;t cover a procedure?
              </h3>
              <p className="text-gray-600">
                We offer flexible payment plans and can work with you to find affordable solutions. We also accept CareCredit and other financing options.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you accept out-of-network insurance?
              </h3>
              <p className="text-gray-600">
                Yes, we can work with out-of-network plans. While your benefits may be different, we&apos;ll help you maximize what&apos;s available.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I know what my insurance covers?
              </h3>
              <p className="text-gray-600">
                We&apos;ll verify your benefits before treatment and provide a detailed breakdown of your coverage and estimated costs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I use my FSA or HSA for dental treatment?
              </h3>
              <p className="text-gray-600">
                Yes, most dental procedures are eligible for FSA and HSA reimbursement. We can provide the necessary documentation.
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
              Ready to Use Your Insurance Benefits?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Contact us to verify your insurance benefits and schedule your appointment. We'll help you get the most out of your dental coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                Verify Insurance Benefits
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

      <Footer />
    </div>
  );
} 