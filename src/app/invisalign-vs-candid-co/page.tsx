"use client";

import Image from "next/image";
import { CheckCircle, XCircle, Shield, Users, Clock, DollarSign, MapPin, Phone } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignVsCandidCo() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Candid Co vs Your Local Dentist for Invisalign"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Candid Co is another company that offers mail-order aligners for teeth straightening. While this may seem like a convenient and cost-effective option, there are several important reasons why choosing your local dentist for Invisalign treatment is the better choice.
            </p>
          </div>

          {/* Why Choose Local Dentist Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Choose Your Local Dentist for Invisalign?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Supervision</h3>
                <p className="text-gray-700 mb-4">
                  When you choose your local dentist for Invisalign treatment, you receive professional supervision from a licensed dentist who has been trained in orthodontics. This means that your treatment is monitored by someone who understands the complexities of tooth movement and can make adjustments as needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">In-Person Care</h3>
                <p className="text-gray-700 mb-4">
                  With your local dentist, you have the opportunity to receive in-person care throughout your treatment. This means that if you experience any issues or have questions, you can schedule an appointment and receive immediate attention. Your dentist can also make adjustments to your treatment plan if necessary.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Treatment</h3>
                <p className="text-gray-700 mb-4">
                  Your local dentist will create a customized treatment plan that is tailored to your specific needs. This means that your treatment will be designed to address your unique dental issues and achieve the results you want.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Better Results</h3>
                <p className="text-gray-700 mb-4">
                  Because your treatment is supervised by a professional and customized to your needs, you are more likely to achieve better results. Your dentist can monitor your progress and make adjustments as needed to ensure that your treatment is on track.
                </p>
              </div>
            </div>
          </div>

          {/* Candid Co Limitations Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">The Limitations of Candid Co</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Professional Supervision</h3>
                <p className="text-gray-700 mb-4">
                  Candid Co does not provide the same level of professional supervision as your local dentist. While they may have dentists on staff, you do not have the opportunity to meet with them in person or receive hands-on care throughout your treatment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Generic Treatment Plans</h3>
                <p className="text-gray-700 mb-4">
                  Candid Co uses a one-size-fits-all approach to treatment planning. This means that your treatment plan may not be customized to your specific needs, which can lead to less than optimal results.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Support</h3>
                <p className="text-gray-700 mb-4">
                  If you experience any issues during your treatment, it can be difficult to get the support you need from Candid Co. You may have to rely on online support or wait for responses to your questions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Potential for Complications</h3>
                <p className="text-gray-700 mb-4">
                  Without proper professional supervision, there is a greater risk of complications during treatment. This can include issues with tooth movement, bite problems, or other dental issues that may require additional treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              While Candid Co may seem like a convenient and cost-effective option, choosing your local dentist for Invisalign treatment is the better choice. You will receive professional supervision, customized treatment, and better results.
            </p>
            <p className="text-gray-700 mb-6">
              If you are interested in Invisalign treatment, we encourage you to schedule a consultation with your local dentist to discuss your options and determine if Invisalign is right for you.
            </p>
            <p className="text-gray-700">
              To schedule a consultation with Dr. Wollock, contact our office online or call (610) 649-0313.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 