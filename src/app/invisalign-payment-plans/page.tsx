"use client";

import Image from "next/image";
import { CheckCircle, Clock, Star, DollarSign, CreditCard } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignPaymentPlans() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Invisalign® Payment Plans"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              At Dentistry at Suburban Square, we understand that the cost of Invisalign treatment can be a concern for many patients. That's why we offer flexible payment plans to make Invisalign treatment affordable and accessible for everyone.
            </p>
          </div>

          {/* Our Payment Options Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Our Invisalign® Payment Options</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payment Plan</h3>
                <p className="text-gray-700 mb-4">
                  We offer an in-house payment plan that makes Invisalign treatment affordable for everyone. Our plan requires no credit check and allows you to start treatment with a small down payment.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• $250 down payment</li>
                  <li>• $89 per paycheck</li>
                  <li>• No credit check required</li>
                  <li>• No interest charges</li>
                  <li>• No hidden fees</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">All-Inclusive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Our Invisalign treatment costs $3,279, which includes everything you need for a successful treatment:
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
            </div>
          </div>

          {/* Insurance Coverage Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Dental Insurance Coverage</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Benefits</h3>
                <p className="text-gray-700 mb-4">
                  Many dental insurance plans cover a portion of orthodontic treatment, including Invisalign. We accept most dental insurance plans and will help you maximize your benefits by filing claims on your behalf.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits Verification</h3>
                <p className="text-gray-700 mb-4">
                  Before starting treatment, we'll verify your insurance benefits and provide you with a detailed breakdown of what your insurance will cover and what your out-of-pocket costs will be.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Common Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Most dental insurance plans cover 50% of orthodontic treatment costs, up to a lifetime maximum. This can significantly reduce your out-of-pocket expenses for Invisalign treatment.
                </p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Competition</h3>
                <p className="text-gray-700 mb-4">
                  Compared to other providers in the Philadelphia area, our pricing is highly competitive. We're able to offer such competitive pricing because we're an experienced Invisalign provider with a high volume of cases.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Value for Money</h3>
                <p className="text-gray-700 mb-4">
                  Our all-inclusive pricing means you won't encounter any surprise fees or additional costs during your treatment. Everything is included in the upfront price, making it easier to budget for your treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Plan Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Benefits of Our Payment Plan</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Credit Check</h3>
                <p className="text-gray-700 mb-4">
                  Unlike traditional financing options, our payment plan doesn't require a credit check. This makes it accessible to patients who may not qualify for traditional financing or who prefer not to use credit.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Interest</h3>
                <p className="text-gray-700 mb-4">
                  Our payment plan charges no interest, meaning you'll pay exactly the same amount whether you pay upfront or use our payment plan. This saves you money compared to traditional financing options.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payments</h3>
                <p className="text-gray-700 mb-4">
                  With payments of just $89 per paycheck, our payment plan makes Invisalign treatment affordable for everyone. You can start treatment immediately with a small down payment and spread the remaining cost over time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Hidden Fees</h3>
                <p className="text-gray-700 mb-4">
                  Our payment plan has no hidden fees, application fees, or processing charges. What you see is what you pay, making it easy to understand and budget for your treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Getting Started with Your Payment Plan</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Consultation</h3>
                <p className="text-gray-700 mb-4">
                  The first step is to schedule a consultation with Dr. Wollock. During this appointment, he'll examine your teeth, discuss your treatment goals, and determine if Invisalign is right for you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Planning</h3>
                <p className="text-gray-700 mb-4">
                  If Invisalign is the right choice, we'll create a customized treatment plan and provide you with a detailed cost breakdown, including your insurance benefits and payment plan options.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Setup</h3>
                <p className="text-gray-700 mb-4">
                  Once you decide to proceed with treatment, we'll set up your payment plan. You'll make your $250 down payment and we'll schedule your first set of aligners.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              At Dentistry at Suburban Square, we believe that everyone deserves access to high-quality orthodontic care. Our flexible payment plans make Invisalign treatment affordable and accessible, allowing you to achieve the smile you've always wanted without breaking the bank.
            </p>
            <p className="text-gray-700 mb-6">
              If you're interested in Invisalign treatment but concerned about the cost, we encourage you to schedule a consultation with Dr. Wollock. We'll discuss your options and create a payment plan that works with your budget.
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