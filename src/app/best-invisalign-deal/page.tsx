"use client";


import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, MapPin, Phone, Clock, Play } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function BestInvisalignDeal() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Get the Best Deal on All-Inclusive Invisalign®"
        subtitle="Transform Your Smile with the Most Affordable Invisalign Treatment"
        description="Experience the best value in orthodontic care with our comprehensive Invisalign treatment packages."
        bgImage="/invisalign.jpeg"
      />

      {/* The Best Deal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004681] mb-6">
              The Best Deal, The Best Reviews & The Most Experience
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              With hundreds of hours of continuing education, Dr. Wollock uses his expertise to train, mentor, and teach other Invisalign dentists across North America. Dr. Wollock brings a wealth of experience to solve your issues with the added benefit of a volume discount. His practice, Dentistry at Suburban Square, treats more Invisalign cases than 99% of other dental practices across the United States.
            </p>
            
            {/* DiamondPlus Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/2024-Advantage-Program-Icons-RGB-fullcolor-Diamond-Plus-Tag.png"
                alt="Invisalign Diamond Plus Provider 2024"
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* YouTube Video */}
          <div className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YBCwZY_I-bY"
                  title="The Best Deal, The Best Reviews & The Most Experience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#004681] mb-6">
              Now Offering Video Consultations!
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Schedule Your Video Consultation
                </h4>
                <button className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                  Click Here for Your Invisalign Payment Option
                </button>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/2024-Advantage-Program-Icons-RGB-fullcolor-Diamond-Plus-Tag.png"
                  alt="Invisalign Diamond Plus Provider 2024"
                  width={200}
                  height={80}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Results Speak for Themselves
            </h2>
          </div>



          {/* Before & After Gallery */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#004681] mb-4">
                Before & After Transformations
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the incredible transformations our patients have achieved with Invisalign treatment. 
                These real results showcase the power of our comprehensive approach to orthodontic care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Jacqui */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Jacqui</h4>
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/jacqui.jpg"
                      alt="Jacqui"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jacqui-before.jpg"
                        alt="Jacqui Before"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jacqui-after.jpg"
                        alt="Jacqui After"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Jim */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Jim</h4>
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/jim.jpg"
                      alt="Jim"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jim-before.jpg"
                        alt="Jim Before"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jim-after.jpg"
                        alt="Jim After"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Kim */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Kim</h4>
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/kim.jpg"
                      alt="Kim"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/kim_before.jpg"
                        alt="Kim Before"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/kim_after.jpg"
                        alt="Kim After"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Jason */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Jason</h4>
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/jason.jpg"
                      alt="Jason"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jason-before.jpg"
                        alt="Jason Before"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/jason-after.jpg"
                        alt="Jason After"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-[#004681] mb-4">
                  Ready to Start Your Transformation?
                </h4>
                <p className="text-gray-700 mb-6">
                  Join hundreds of satisfied patients who have achieved their dream smile with our comprehensive Invisalign treatment.
                </p>
                <button className="bg-[#004681] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                  Schedule Your Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smile Regret Club Special */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-800 mb-6 text-center">
              The Smile Regret Club Special
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Companies like Smile Direct and Candid Co. have significant failure rates and leave many of their customers unsatisfied with their results. If you have previously tried one of these services and are interested in Invisalign, you can save even more on our already great deal.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#004681] mb-2">
                Get an Additional $100 Off Your Invisalign® Treatment Cost!
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">
                Final Invisalign® Cost: $3179**
              </div>
              <p className="text-sm text-gray-600">
                **With proof of prior purchase within one year. Available for a limited time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Does All-Inclusive Mean */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Does All-Inclusive Mean?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              If you are considering Invisalign with another provider, you should ask about these potential additional costs.<br />
              We offer the best all-inclusive deal, as it includes all of the following.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#004681] mb-4">
                Our services feature an all-inclusive price of $3,279 with no hidden fees.
              </h3>
              <p className="text-lg text-gray-700">The price includes:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Initial Consult",
                  "X-Rays",
                  "Photos",
                  "All Visits"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Scanning/Impressions",
                  "All Invisalign Treatment",
                  "Any Necessary Corrections",
                  "Free Set of Retainers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get the Best Invisalign Deal?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              If you are interested in Invisalign, click here for more information about our Invisalign program.
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