"use client";

import Image from "next/image";
import { CheckCircle, Clock, Star, Heart, Calendar } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignForBrides() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Invisalign® for Brides"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Your wedding day is one of the most important days of your life, and you want to look and feel your best. If you're considering Invisalign treatment before your big day, here's what you need to know.
            </p>
          </div>

          {/* Why Invisalign for Brides Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Choose Invisalign® for Your Wedding?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nearly Invisible</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are made of clear, medical-grade plastic that is virtually invisible when worn. This means you can straighten your teeth without anyone noticing, perfect for engagement photos, bridal showers, and your wedding day.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Removable for Special Occasions</h3>
                <p className="text-gray-700 mb-4">
                  Unlike traditional braces, Invisalign aligners can be removed for short periods. This means you can take them out for your wedding ceremony, photos, and reception if desired, then put them back in afterward.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comfortable and Discreet</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are smooth and comfortable to wear, with no wires or brackets to cause irritation. They won't interfere with your speech or eating, making them ideal for wedding planning and events.
                </p>
              </div>
            </div>
          </div>

          {/* Timing Considerations Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Timing Your Treatment</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Early</h3>
                <p className="text-gray-700 mb-4">
                  It's best to start Invisalign treatment well before your wedding date. Most cases take 6-18 months to complete, so plan accordingly. Starting early also gives you time to address any refinements that might be needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation Timeline</h3>
                <p className="text-gray-700 mb-4">
                  Schedule your consultation at least 8-12 months before your wedding to allow time for treatment planning, aligner fabrication, and the treatment itself. This ensures you can achieve your desired results in time for your special day.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Completion</h3>
                <p className="text-gray-700 mb-4">
                  Ideally, your Invisalign treatment should be completed before your wedding day. This allows you to enjoy your special day with a beautiful, straight smile and removes any concerns about aligner maintenance during your celebration.
                </p>
              </div>
            </div>
          </div>

          {/* Wedding Day Considerations Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Wedding Day Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Photography</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are nearly invisible in photos, so you can wear them during your wedding photography without concern. However, if you prefer to remove them for photos, you can do so for short periods.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eating and Drinking</h3>
                <p className="text-gray-700 mb-4">
                  You'll need to remove your aligners to eat and drink during your wedding reception. Make sure to have a safe place to store them and remember to put them back in after eating to maintain your treatment progress.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Honeymoon Planning</h3>
                <p className="text-gray-700 mb-4">
                  If you're still in treatment during your honeymoon, Invisalign makes it easy to maintain your treatment while traveling. The aligners are portable and don't require special care, making them perfect for travel.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits for Brides Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Benefits for Brides</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidence Boost</h3>
                <p className="text-gray-700 mb-4">
                  A straight, beautiful smile can significantly boost your confidence on your wedding day. Invisalign treatment can help you achieve the smile you've always wanted, making you feel more beautiful and self-assured.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Dietary Restrictions</h3>
                <p className="text-gray-700 mb-4">
                  Unlike traditional braces, Invisalign doesn't restrict what you can eat. You can enjoy all your favorite foods during your engagement and wedding planning without worrying about damaging brackets or wires.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are easy to clean and maintain. Simply remove them to brush and floss your teeth normally, then clean the aligners with a soft toothbrush and mild soap or Invisalign cleaning crystals.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Invisalign treatment is an excellent choice for brides who want to achieve a beautiful smile before their wedding day. With its nearly invisible appearance, removable design, and comfortable fit, Invisalign allows you to straighten your teeth discreetly and comfortably.
            </p>
            <p className="text-gray-700 mb-6">
              If you're considering Invisalign treatment for your wedding, we encourage you to schedule a consultation with Dr. Wollock to discuss your options and create a treatment timeline that works with your wedding planning.
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