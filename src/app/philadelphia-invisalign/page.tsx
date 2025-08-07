"use client";

import Image from "next/image";
import { CheckCircle, Clock, Star, MapPin, Phone } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function PhiladelphiaInvisalign() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Philadelphia Invisalign®"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              If you're looking for Invisalign treatment in Philadelphia, look no further than Dentistry at Suburban Square. Located in Ardmore, just minutes from Philadelphia, we offer expert Invisalign treatment with competitive pricing and exceptional care.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Choose Dentistry at Suburban Square for Invisalign®?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Provider</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Michael I. Wollock, DMD, is an experienced Invisalign provider with years of experience treating patients from Philadelphia and the surrounding areas. He has successfully completed hundreds of Invisalign cases and continues to stay updated with the latest techniques and technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  We offer some of the most competitive Invisalign pricing in the Philadelphia area. Our all-inclusive treatment costs just $3,279, which is significantly lower than the national average and most local providers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Location</h3>
                <p className="text-gray-700 mb-4">
                  Located at 32 Parking Plaza, Suite 604 in Ardmore, we're easily accessible from Philadelphia and the surrounding suburbs. Our office is located in The Times Building in Suburban Square, with convenient parking and public transportation options.
                </p>
              </div>
            </div>
          </div>

          {/* Our Location Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Our Location</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
                <p className="text-gray-700 mb-4">
                  Dentistry at Suburban Square<br />
                  32 Parking Plaza, Suite 604<br />
                  Ardmore, PA 19003<br />
                  Located in The Times Building in Suburban Square
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
                <p className="text-gray-700 mb-4">
                  Phone: (610) 649-0313<br />
                  We're available to answer your questions and schedule consultations for patients from Philadelphia and the surrounding areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
                <p className="text-gray-700 mb-4">
                  Our office is easily accessible from Philadelphia via public transportation, including SEPTA regional rail and bus services. We also offer convenient parking for patients who prefer to drive.
                </p>
              </div>
            </div>
          </div>

          {/* Philadelphia Area Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Benefits for Philadelphia Area Patients</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-700 mb-4">
                  As a local provider serving the Philadelphia area for years, we understand the unique needs and preferences of our community. We're committed to providing personalized care that meets the highest standards of excellence.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Appointments</h3>
                <p className="text-gray-700 mb-4">
                  We offer flexible appointment scheduling to accommodate busy Philadelphia professionals and families. Our office hours are designed to make it easy for you to fit Invisalign treatment into your busy schedule.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Acceptance</h3>
                <p className="text-gray-700 mb-4">
                  We accept most major dental insurance plans commonly used in the Philadelphia area. We'll help you maximize your benefits and minimize your out-of-pocket costs for Invisalign treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Our Invisalign Process Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Our Invisalign® Process</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Your journey begins with a comprehensive consultation with Dr. Wollock. He'll examine your teeth, discuss your treatment goals, and determine if Invisalign is the right option for your specific case.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Treatment Plan</h3>
                <p className="text-gray-700 mb-4">
                  Using advanced 3D imaging technology, we'll create a customized treatment plan that shows exactly how your teeth will move throughout the treatment process. This helps you understand what to expect and ensures optimal results.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Care</h3>
                <p className="text-gray-700 mb-4">
                  Throughout your treatment, you'll have regular check-ups with Dr. Wollock to monitor your progress and receive new aligners. We're here to support you every step of the way to ensure your treatment is successful.
                </p>
              </div>
            </div>
          </div>

          {/* Cost and Payment Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Cost and Payment Options</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">All-Inclusive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Our Invisalign treatment costs $3,279, which includes everything you need for a successful treatment. This competitive pricing makes Invisalign accessible to patients throughout the Philadelphia area.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payment Plans</h3>
                <p className="text-gray-700 mb-4">
                  We offer flexible payment plans to make Invisalign treatment affordable for everyone. Our plan requires just $250 down and $89 per paycheck, with no credit check or interest charges.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Many dental insurance plans cover a portion of Invisalign treatment. We'll help you maximize your benefits and file claims on your behalf to reduce your out-of-pocket costs.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              If you're looking for Invisalign treatment in Philadelphia, Dentistry at Suburban Square offers the perfect combination of expertise, convenience, and value. Our experienced team, competitive pricing, and convenient location make us the ideal choice for patients throughout the Philadelphia area.
            </p>
            <p className="text-gray-700 mb-6">
              We encourage you to schedule a consultation with Dr. Wollock to discuss your Invisalign treatment options and see how we can help you achieve the smile you've always wanted.
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