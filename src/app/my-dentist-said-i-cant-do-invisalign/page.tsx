"use client";

import Image from "next/image";
import { CheckCircle, XCircle, Shield, Users, Clock, Star, MessageCircle } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function MyDentistSaidICantDoInvisalign() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Why Can't I Do Invisalign?"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              If your dentist has told you that you cannot do Invisalign treatment, it is important to get a second opinion. Many dentists may not have the experience or training to handle complex Invisalign cases, which can lead them to recommend against treatment.
            </p>
          </div>

          {/* Why Other Dentists Say No Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Other Dentists Say "No"</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Training</h3>
                <p className="text-gray-700 mb-4">
                  Many dentists may not have received extensive training in Invisalign treatment, particularly for complex cases. This can lead them to recommend against treatment for cases that are actually treatable.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lack of Experience</h3>
                <p className="text-gray-700 mb-4">
                  Dentists who have not treated many Invisalign cases may not feel confident in their ability to handle complex situations. This can cause them to recommend alternative treatments or advise against Invisalign altogether.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Outdated Knowledge</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign technology has advanced significantly over the years. Dentists who have not kept up with the latest developments may not be aware of new techniques that can make treatment possible for more complex cases.
                </p>
              </div>
            </div>
          </div>

          {/* Dr. Wollock's Expertise Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Dr. Wollock's Expertise</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Training</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Wollock has received extensive training in Invisalign treatment and has been certified as an Invisalign provider. He has completed advanced courses and continues to stay updated with the latest techniques and technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Years of Experience</h3>
                <p className="text-gray-700 mb-4">
                  With years of experience treating Invisalign cases, Dr. Wollock has developed the skills and confidence to handle complex situations that other dentists may find challenging.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Wollock has successfully treated many cases that other dentists said were impossible with Invisalign. His track record speaks to his ability to achieve excellent results even in complex situations.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Success Stories</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cases Other Dentists Turned Down</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Wollock has successfully treated many cases that other dentists said were impossible with Invisalign. These include cases with severe crowding, large gaps, bite issues, and complex adult orthodontics.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-700 mb-4">
                  His track record of successful treatments demonstrates that many cases that seem impossible to other dentists can actually be treated effectively with Invisalign when handled by an experienced provider.
                </p>
              </div>
            </div>
          </div>

          {/* Why Get a Second Opinion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Get a Second Opinion?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Different Perspectives</h3>
                <p className="text-gray-700 mb-4">
                  Each dentist has different training, experience, and comfort levels with Invisalign treatment. Getting a second opinion can provide you with a different perspective on your case and treatment options.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Techniques</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Wollock uses the latest Invisalign techniques and technology. He may be aware of treatment approaches that other dentists are not familiar with, which could make Invisalign treatment possible for your case.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Wollock has successfully treated many cases that other dentists said were impossible with Invisalign. His track record demonstrates that many seemingly impossible cases can actually be treated effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              If your dentist has told you that you cannot do Invisalign treatment, it is important to get a second opinion. Dr. Wollock's expertise and experience may make Invisalign treatment possible for your case.
            </p>
            <p className="text-gray-700 mb-6">
              We encourage you to schedule a consultation with Dr. Wollock to discuss your options and determine if Invisalign is right for you.
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