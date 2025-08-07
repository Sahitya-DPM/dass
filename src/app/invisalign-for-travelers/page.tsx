"use client";

import Image from "next/image";
import { CheckCircle, Clock, Star, MapPin, Plane } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignForTravelers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Invisalign® for Travelers"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              If you're a frequent traveler or planning to travel during your orthodontic treatment, Invisalign is an excellent choice. Here's why Invisalign is perfect for travelers and how to manage your treatment while on the go.
            </p>
          </div>

          {/* Why Invisalign for Travelers Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Invisalign® is Perfect for Travelers</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Portable and Convenient</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are lightweight and easy to carry. Unlike traditional braces that require special care and maintenance, Invisalign aligners can be easily packed in your luggage and taken anywhere you go.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Emergency Appointments</h3>
                <p className="text-gray-700 mb-4">
                  Traditional braces can break or cause emergencies that require immediate dental attention. With Invisalign, there are no wires or brackets to break, eliminating the need for emergency dental visits while traveling.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Treatment Schedule</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign treatment can be easily managed around your travel schedule. You can coordinate your aligner changes with your travel plans, and most appointments can be scheduled around your availability.
                </p>
              </div>
            </div>
          </div>

          {/* Travel Tips Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Travel Tips for Invisalign® Patients</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pack Extra Aligners</h3>
                <p className="text-gray-700 mb-4">
                  Always bring extra aligners with you when traveling. If you lose or damage an aligner while away, having a backup ensures your treatment doesn't get delayed. Consider bringing the next set of aligners as well.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bring Cleaning Supplies</h3>
                <p className="text-gray-700 mb-4">
                  Pack a travel toothbrush, toothpaste, and aligner cleaning supplies. You can use a soft toothbrush and mild soap to clean your aligners, or bring Invisalign cleaning crystals for convenience.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Use Aligner Case</h3>
                <p className="text-gray-700 mb-4">
                  Always use the provided aligner case when removing your aligners. This prevents them from getting lost, damaged, or accidentally thrown away. The case is small and easy to carry in your pocket or purse.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Aligner Changes</h3>
                <p className="text-gray-700 mb-4">
                  If you're due for an aligner change while traveling, plan accordingly. You can change aligners a day early or late if needed, but try to stick to your schedule as much as possible to maintain treatment progress.
                </p>
              </div>
            </div>
          </div>

          {/* International Travel Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">International Travel Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water Safety</h3>
                <p className="text-gray-700 mb-4">
                  When traveling internationally, be cautious about the water quality. Use bottled water for drinking and brushing your teeth if the local water supply is questionable. This helps prevent stomach issues that could affect your treatment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Zone Changes</h3>
                <p className="text-gray-700 mb-4">
                  If you're traveling across multiple time zones, try to maintain your normal aligner wear schedule. The 20-22 hour daily wear requirement remains the same regardless of your location.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Contacts</h3>
                <p className="text-gray-700 mb-4">
                  Before traveling, get contact information for your orthodontist and have a plan for handling any treatment-related questions or issues that might arise while you're away.
                </p>
              </div>
            </div>
          </div>

          {/* Business Travel Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Business Travel and Invisalign®</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Appearance</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are nearly invisible, making them perfect for business meetings and professional settings. You can straighten your teeth without anyone knowing you're undergoing orthodontic treatment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Meal Planning</h3>
                <p className="text-gray-700 mb-4">
                  When attending business meals or conferences, you can easily remove your aligners to eat and drink, then put them back in afterward. This flexibility makes Invisalign ideal for business travelers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Travel</h3>
                <p className="text-gray-700 mb-4">
                  If you're traveling for extended periods, discuss your travel plans with your orthodontist. They can provide you with multiple sets of aligners and adjust your treatment schedule accordingly.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Invisalign treatment is an excellent choice for travelers who want to straighten their teeth without the complications and restrictions of traditional braces. With its portable design, flexible schedule, and nearly invisible appearance, Invisalign allows you to maintain your treatment progress while enjoying your travels.
            </p>
            <p className="text-gray-700 mb-6">
              If you're a frequent traveler considering Invisalign treatment, we encourage you to schedule a consultation with Dr. Wollock to discuss your travel plans and create a treatment schedule that works with your lifestyle.
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