"use client";

import Image from "next/image";
import { DollarSign, CreditCard, Shield, Clock, CheckCircle, Star } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function CostOfInvisalign() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="How Much Does Invisalign Cost?"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              The cost of Invisalign treatment can vary depending on several factors, including the complexity of your case, the length of treatment, and the provider you choose. At Dentistry at Suburban Square, we offer competitive pricing and flexible payment options to make Invisalign treatment affordable for everyone.
            </p>
          </div>

          {/* Pricing Information Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Our Invisalign Pricing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">All-Inclusive Package</h3>
                <p className="text-gray-700 mb-4">
                  Our all-inclusive Invisalign treatment costs $3,279. This price includes everything you need for a successful treatment, including:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Initial consultation and treatment planning</li>
                  <li>• All Invisalign aligners</li>
                  <li>• All office visits and adjustments</li>
                  <li>• X-rays and photos</li>
                  <li>• Scanning and impressions</li>
                  <li>• Any necessary refinements</li>
                  <li>• Free set of retainers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payment Options</h3>
                <p className="text-gray-700 mb-4">
                  We understand that the cost of Invisalign treatment can be a concern for many patients. That's why we offer flexible payment options to make treatment more affordable:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• $250 down payment</li>
                  <li>• $89 per paycheck</li>
                  <li>• No credit check required</li>
                  <li>• No interest charges</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Comparison Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">How Our Pricing Compares</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">National Average</h3>
                <p className="text-gray-700 mb-4">
                  The national average cost of Invisalign treatment ranges from $3,000 to $8,000, depending on the complexity of the case and the provider. Our price of $3,279 is well below the national average and represents excellent value for the quality of care you receive.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Our Price is Lower</h3>
                <p className="text-gray-700 mb-4">
                  We are able to offer competitive pricing because we are an experienced Invisalign provider with a high volume of cases. This allows us to pass on cost savings to our patients while maintaining the highest quality of care.
                </p>
              </div>
            </div>
          </div>

          {/* Insurance and Financing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Insurance and Financing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dental Insurance</h3>
                <p className="text-gray-700 mb-4">
                  Many dental insurance plans cover a portion of orthodontic treatment, including Invisalign. We accept most dental insurance plans and will help you maximize your benefits. We can also help you understand your coverage and file claims on your behalf.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Financing</h3>
                <p className="text-gray-700 mb-4">
                  We offer flexible financing options to make Invisalign treatment more affordable. Our payment plan requires no credit check and allows you to start treatment with a small down payment. You can then pay the remaining balance in convenient monthly installments.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              The cost of Invisalign treatment at Dentistry at Suburban Square is competitive and affordable. With our all-inclusive pricing and flexible payment options, we make it possible for everyone to achieve the smile they've always wanted.
            </p>
            <p className="text-gray-700 mb-6">
              If you are interested in Invisalign treatment, we encourage you to schedule a consultation with Dr. Wollock to discuss your options and determine if Invisalign is right for you.
            </p>
            <p className="text-gray-700">
              To schedule a consultation, contact our office online or call (610) 649-0313.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 