"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, MapPin, Phone, Clock, DollarSign } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignCost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="How Much Does Invisalign Cost?"
        description="Understanding the cost of Invisalign treatment and exploring your payment options to achieve the smile you've always wanted."
        bgImage="/invisalign.jpeg"
      />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Competitive Invisalign Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Dentistry at Suburban Square, we believe everyone deserves access to quality orthodontic care. That's why we offer competitive pricing and flexible payment options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#004681] text-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Best Deal</h3>
                <div className="text-4xl font-bold mb-2">$3,279</div>
                <p className="text-lg opacity-90">All-Inclusive Treatment</p>
                <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm">Most offices charge $5,500-$7,500!</p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-4">Payment Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">$89 per paycheck</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">$89 down payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">No credit check required</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {[
                    "Initial consultation",
                    "X-rays and photos",
                    "All treatment visits",
                    "Invisalign aligners",
                    "Any necessary corrections",
                    "Retainers",
                    "Follow-up care"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#004681]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">Special Offers</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">$600 Invisalign New Patient Coupon</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">Additional $100 off for Smile Direct Club customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Our Pricing Compares
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              See how our competitive pricing stacks up against other providers in the area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Dental Offices</h3>
              <div className="text-3xl font-bold text-red-600 mb-2">$5,500 - $7,500</div>
              <p className="text-gray-600 mb-4">Average cost in the area</p>
              <div className="text-sm text-gray-500">
                <p>• Hidden fees often apply</p>
                <p>• Limited payment options</p>
                <p>• May not include retainers</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-[#004681]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Practice</h3>
              <div className="text-3xl font-bold text-[#004681] mb-2">$3,279</div>
              <p className="text-gray-600 mb-4">All-inclusive pricing</p>
              <div className="text-sm text-gray-500">
                <p>• No hidden fees</p>
                <p>• Flexible payment plans</p>
                <p>• Everything included</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Providers</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">$1,500 - $2,500</div>
              <p className="text-gray-600 mb-4">Lower cost, higher risk</p>
              <div className="text-sm text-gray-500">
                <p>• No in-person supervision</p>
                <p>• Limited treatment options</p>
                <p>• Higher failure rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Insurance Coverage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Many dental insurance plans cover a portion of Invisalign treatment. We work with most major insurance providers and can help you maximize your benefits.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">What to Check</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Orthodontic coverage percentage</li>
                    <li>• Lifetime maximum for orthodontics</li>
                    <li>• Age restrictions</li>
                    <li>• Waiting periods</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">We Can Help</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Verify your insurance benefits</li>
                    <li>• Submit claims on your behalf</li>
                    <li>• Explain your coverage</li>
                    <li>• Find ways to maximize benefits</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Payment Options
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer flexible payment options to make Invisalign treatment affordable for everyone.
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Payment Plan</h4>
                  <p className="text-gray-600">$89 per paycheck with no credit check required</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Pay in Full</h4>
                  <p className="text-gray-600">$3,279 total with a $600 discount applied</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Insurance + Payment Plan</h4>
                  <p className="text-gray-600">Combine insurance benefits with our payment plan</p>
                </div>
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
              Why Choose Our Practice for Invisalign?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Our all-inclusive pricing is significantly lower than most dental offices in the area.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Care</h3>
              <p className="text-gray-600">
                Dr. Wollock trains other Invisalign dentists and has treated more cases than 99% of practices.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of satisfied patients have achieved their dream smiles with our treatment.
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
              Ready to Start Your Invisalign Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Schedule a consultation to learn more about our pricing and payment options. We'll help you find the best way to achieve your dream smile.
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

      <Footer />
    </div>
  );
} 