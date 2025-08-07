"use client";

import Image from "next/image";
import { CheckCircle, Clock, Star, Users, Shield } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignForTeens() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Invisalign® for Teens"
        subtitle=""
        description=""
        bgImage="/invisalign.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Invisalign treatment is an excellent option for teenagers who want to straighten their teeth without the appearance and restrictions of traditional metal braces. Here's what you need to know about Invisalign for teens.
            </p>
          </div>

          {/* Why Invisalign for Teens Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Why Choose Invisalign® for Teens?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nearly Invisible</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are made of clear, medical-grade plastic that is virtually invisible when worn. This means teens can straighten their teeth without feeling self-conscious about their appearance, which is especially important during the teenage years.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Removable Design</h3>
                <p className="text-gray-700 mb-4">
                  Unlike traditional braces, Invisalign aligners can be removed for eating, drinking, brushing, and flossing. This makes it easier for teens to maintain good oral hygiene and enjoy their favorite foods without restrictions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comfortable and Safe</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign aligners are smooth and comfortable to wear, with no wires or brackets to cause irritation or injury. This makes them ideal for active teenagers who participate in sports or other physical activities.
                </p>
              </div>
            </div>
          </div>

          {/* Teen-Specific Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Benefits Specifically for Teens</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Confidence</h3>
                <p className="text-gray-700 mb-4">
                  Teenagers often feel self-conscious about their appearance, and traditional braces can make this worse. Invisalign's nearly invisible design helps teens feel more confident in social situations, school photos, and other important events.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Dietary Restrictions</h3>
                <p className="text-gray-700 mb-4">
                  With Invisalign, teens don't have to avoid sticky, hard, or chewy foods that can damage traditional braces. They can enjoy all their favorite foods by simply removing the aligners before eating.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Oral Hygiene</h3>
                <p className="text-gray-700 mb-4">
                  Maintaining good oral hygiene is crucial during orthodontic treatment. Invisalign aligners can be removed for brushing and flossing, making it easier for teens to keep their teeth clean and healthy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sports-Friendly</h3>
                <p className="text-gray-700 mb-4">
                  For teens who participate in sports, Invisalign is much safer than traditional braces. There are no wires or brackets that could cause injury during physical activity, and aligners can be removed if needed.
                </p>
              </div>
            </div>
          </div>

          {/* Treatment Process for Teens Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Treatment Process for Teens</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Consultation</h3>
                <p className="text-gray-700 mb-4">
                  The treatment process begins with a consultation with Dr. Wollock. He will examine the teen's teeth and bite, discuss treatment goals, and determine if Invisalign is the right option for their specific case.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Planning</h3>
                <p className="text-gray-700 mb-4">
                  Using advanced 3D imaging technology, Dr. Wollock will create a customized treatment plan that shows how the teen's teeth will move throughout the treatment process. This helps teens and parents understand what to expect.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aligner Wear Schedule</h3>
                <p className="text-gray-700 mb-4">
                  Teens will receive a series of custom-made aligners that they wear for 20-22 hours per day, removing them only for eating, drinking, brushing, and flossing. Each set of aligners is worn for 1-2 weeks before moving to the next set.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Check-ups</h3>
                <p className="text-gray-700 mb-4">
                  Throughout treatment, teens will have regular check-ups with Dr. Wollock to monitor progress and receive new aligners. These appointments are typically scheduled every 6-8 weeks.
                </p>
              </div>
            </div>
          </div>

          {/* Parent Considerations Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">What Parents Should Know</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance is Key</h3>
                <p className="text-gray-700 mb-4">
                  The success of Invisalign treatment depends on the teen wearing the aligners as prescribed. Parents should encourage their teen to follow the wear schedule and maintain good oral hygiene habits.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Invisalign treatment typically costs between $3,000 and $8,000, depending on the complexity of the case. Many dental insurance plans cover a portion of orthodontic treatment, including Invisalign.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Duration</h3>
                <p className="text-gray-700 mb-4">
                  Most teen Invisalign cases take 12-18 months to complete, though this can vary depending on the complexity of the case and the teen's compliance with the treatment plan.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Invisalign treatment is an excellent choice for teenagers who want to straighten their teeth without the appearance and restrictions of traditional braces. With its nearly invisible design, removable nature, and comfortable fit, Invisalign helps teens achieve a beautiful smile while maintaining their confidence and lifestyle.
            </p>
            <p className="text-gray-700 mb-6">
              If you're considering Invisalign treatment for your teen, we encourage you to schedule a consultation with Dr. Wollock to discuss your options and determine if Invisalign is the right choice for your family.
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