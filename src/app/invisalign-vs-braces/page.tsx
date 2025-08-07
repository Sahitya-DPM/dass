"use client";

import Image from "next/image";
import { CheckCircle, XCircle, Clock, DollarSign, Shield, Users } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function InvisalignVsBraces() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Choosing Between Invisalign® and Braces"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Choosing the best method for straightening you or your child's teeth can be overwhelming.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              The treatment will likely be a large investment, and since it lasts for many months, and in some cases years, so you want to make the right choice that is going to make those months run smoothly for you or your child.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              One of the first things you need to decide is whether you are going to use traditional, hardwire braces or Invisalign trays.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              There are positive and negative points to each treatment, so it's important to evaluate each and carefully consider which is best for you.
            </p>
          </div>

          {/* What's the Difference Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">What's the Difference Between Invisalign and Metal Braces?</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Braces:</h3>
              <p className="text-gray-700 mb-4">
                Braces are composed of metal brackets that are cemented to your teeth with a special dental glue. These brackets hold on a wire that attaches to the brackets with rubber bands.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Invisalign:</h3>
              <p className="text-gray-700 mb-4">
                While getting treated with Invisalign, your dentist will give you a series of invisible aligner trays made of BPA-free clear plastic. Using X-rays and impressions to form a 3-D image of your teeth, your dentist will come up with a treatment plan in order to shift your smile into alignment.
              </p>
            </div>
          </div>

          {/* Pros and Cons Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-8">Pros and Cons to Metal Braces and Invisalign</h2>
            
            {/* Metal Braces */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metal Braces</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">Pros</h4>
                <p className="text-gray-700 mb-4">
                  Less self-discipline is needed since they can't be removed. This is a big reason why metal braces are often preferred for treating children.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-red-600 mb-3">Cons</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• While you have braces, it's important that you're careful about what you eat. Certain foods can damage your braces or get caught in them.</li>
                  <li>• It can be difficult to brush and floss around your braces, and unlike Invisalign trays, they cannot be removed.</li>
                  <li>• Your braces can present a hazard during certain activities, like if you play rough contact sports.</li>
                  <li>• Sometimes, the brackets, bands, or metal wires can rub against your sensitive gum tissue and cause some discomfort.</li>
                  <li>• Depending on your case, hardwire braces can be more expensive, costing up to $5,500.</li>
                  <li>• Treatment times for braces tend to run longer than Invisalign. They take an average of 2 years.</li>
                  <li>• Patients need to visit the orthodontist every 3-6 weeks for adjustments.</li>
                </ul>
              </div>
            </div>
            
            {/* Invisalign */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Invisalign</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">Pros</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• The aligner trays are as close to invisible as possible.</li>
                  <li>• The trays are removable, making it easy to brush your teeth.</li>
                  <li>• There are no wires, brackets, or bands to cause discomfort.</li>
                  <li>• Treatment can be shorter, typically running about 6-18 months.</li>
                  <li>• After the begginning stages visits to the office are only required every 2-3 months.</li>
                  <li>• Avoids or minimizes most traditional braces side effects.</li>
                  <li>• At $2,399 for Invisalign Express and $3,279 for full Invisalign, it tends to be more affordable. However, if you don't go to Dentistry at Suburban Square, you'll pay more like $5,500-$7,000.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-red-600 mb-3">Cons</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Invisalign is not ideal for children or patients who lack the discipline to keep trays in.</li>
                  <li>• If you don't wear it enough it doesn't work well but Dr. Wollock is skilled at getting people through the treatment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Does Invisalign Sound Like a Good Choice Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#004681] mb-6">Does Invisalign Sound Like a Good Choice for You?</h2>
            <p className="text-gray-700 mb-6">
              These pros and cons can help you decide which treatment is best for you, but only a dental professional can say for sure. If you think you may be a good candidate for Invisalign, contact our office for a consultation with Dr. Wollock.
            </p>
            <p className="text-gray-700 mb-6">
              Dr. Wollock will discuss your treatment options and will be able to use his professional judgment to determine whether Invisalign is an appropriate choice.
            </p>
            <p className="text-gray-700 mb-6">
              To Schedule, contact our office online, or call (610) 649-0313.
            </p>
          </div>

          {/* All-Inclusive Deal Section */}
          <div className="bg-gradient-to-r from-[#004681] to-[#003366] rounded-2xl p-8 mb-16 text-white">
            <h2 className="text-3xl font-bold mb-6">An All-Inclusive Deal With No Hidden Fees</h2>
            <p className="text-blue-100 mb-6">
              Our services feature an all-inclusive price of $3,279 with no hidden fees. The price includes:
            </p>
            <ul className="space-y-2 text-blue-100 mb-6">
              <li>• Initial consult</li>
              <li>• All visits</li>
              <li>• All Invisalign treatment</li>
              <li>• X-rays</li>
              <li>• Photos</li>
              <li>• Scanning/impressions</li>
              <li>• Any necessary corrections</li>
              <li>• Free set of retainers</li>
            </ul>
            <p className="text-blue-100">
              If you are interested in Invisalign, click here for more information about our Invisalign program.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 