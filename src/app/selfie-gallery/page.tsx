"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

interface GalleryImage {
  src: string;
  alt: string;
  likes?: number;
  comments?: number;
}

export default function SelfieGallery() {
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryImages: GalleryImage[] = [
    { src: "/Selfie Gallery/497577709_1242090097926165_4562890765097304610_n.jpg", alt: "Patient Selfie 1", likes: 24, comments: 3 },
    { src: "/Selfie Gallery/496439045_1242090061259502_8380600150921614684_n.jpg", alt: "Patient Selfie 2", likes: 31, comments: 5 },
    { src: "/Selfie Gallery/496925591_1242090074592834_3845960076058968072_n.jpg", alt: "Patient Selfie 3", likes: 18, comments: 2 },
    { src: "/Selfie Gallery/497813271_1241715841296924_5905115345722228622_n.jpg", alt: "Patient Selfie 4", likes: 42, comments: 7 },
    { src: "/Selfie Gallery/496302170_1241715687963606_8255320754921494656_n.jpg", alt: "Patient Selfie 5", likes: 29, comments: 4 },
    { src: "/Selfie Gallery/496923154_1242090047926170_4269701264129844795_n.jpg", alt: "Patient Selfie 6", likes: 35, comments: 6 },
    { src: "/Selfie Gallery/497520912_1241715624630279_1700617789914944849_n.jpg", alt: "Patient Selfie 7", likes: 27, comments: 3 },
    { src: "/Selfie Gallery/495384866_1241217924680049_8983679470345427931_n.jpg", alt: "Patient Selfie 8", likes: 38, comments: 5 },
    { src: "/Selfie Gallery/462307107_1054010863400757_8828609755685458429_n.jpg", alt: "Patient Selfie 9", likes: 51, comments: 8 },
    { src: "/Selfie Gallery/497438969_1241217544680087_8296804473863770111_n.jpg", alt: "Patient Selfie 10", likes: 22, comments: 2 },
    { src: "/Selfie Gallery/496821293_1242090077926167_8707115212463856777_n.jpg", alt: "Patient Selfie 11", likes: 33, comments: 4 },
    { src: "/Selfie Gallery/497465861_1241217524680089_6797293414792751834_n.jpg", alt: "Patient Selfie 12", likes: 26, comments: 3 },
    { src: "/Selfie Gallery/497547295_1241217861346722_7950866275550571361_n.jpg", alt: "Patient Selfie 13", likes: 44, comments: 6 },
    { src: "/Selfie Gallery/497569127_1241217468013428_4929230343020497664_n.jpg", alt: "Patient Selfie 14", likes: 19, comments: 2 },
    { src: "/Selfie Gallery/497503549_1241217518013423_7687571593537308879_n.jpg", alt: "Patient Selfie 15", likes: 37, comments: 5 },
    { src: "/Selfie Gallery/495444581_1241217474680094_2688773706184518172_n.jpg", alt: "Patient Selfie 16", likes: 28, comments: 4 },
    { src: "/Selfie Gallery/495338992_1241217551346753_3610008569626150554_n.jpg", alt: "Patient Selfie 17", likes: 46, comments: 7 },
    { src: "/Selfie Gallery/495379307_1239712561497252_6230070310484558560_n.jpg", alt: "Patient Selfie 18", likes: 21, comments: 3 },
    { src: "/Selfie Gallery/496697110_1239707778164397_5015884233153338439_n.jpg", alt: "Patient Selfie 19", likes: 32, comments: 4 },
    { src: "/Selfie Gallery/495524844_1239712541497254_6817862947415686200_n.jpg", alt: "Patient Selfie 20", likes: 25, comments: 3 },
    { src: "/Selfie Gallery/495570684_1239707834831058_4231022779366376816_n.jpg", alt: "Patient Selfie 21", likes: 39, comments: 5 },
    { src: "/Selfie Gallery/495437546_1239712554830586_6105305845369275846_n.jpg", alt: "Patient Selfie 22", likes: 30, comments: 4 },
    { src: "/Selfie Gallery/496132270_1239707748164400_1781934300567981727_n.jpg", alt: "Patient Selfie 23", likes: 41, comments: 6 },
    { src: "/Selfie Gallery/494435261_1239707684831073_6564691951734704760_n.jpg", alt: "Patient Selfie 24", likes: 34, comments: 4 },
    { src: "/Selfie Gallery/494732094_1231563535645488_1440832308815163161_n.jpg", alt: "Patient Selfie 25", likes: 47, comments: 7 },
    { src: "/Selfie Gallery/494466460_1231563475645494_5795117090839365019_n.jpg", alt: "Patient Selfie 26", likes: 52, comments: 8 },
    { src: "/Selfie Gallery/494270779_1231088082359700_2343550409072007124_n.jpg", alt: "Patient Selfie 27", likes: 36, comments: 5 },
    { src: "/Selfie Gallery/494380350_1228279102640598_693700270334142332_n.jpg", alt: "Patient Selfie 28", likes: 29, comments: 3 },
    { src: "/Selfie Gallery/492491549_1225121276289714_2644824854254276647_n.jpg", alt: "Patient Selfie 29", likes: 43, comments: 6 },
    { src: "/Selfie Gallery/492523288_1225120932956415_373287158249241993_n.jpg", alt: "Patient Selfie 30", likes: 31, comments: 4 },
    { src: "/Selfie Gallery/492231886_1224355473032961_840197696527012880_n.jpg", alt: "Patient Selfie 31", likes: 27, comments: 3 },
    { src: "/Selfie Gallery/491999663_1224355459699629_2994555328263573898_n.jpg", alt: "Patient Selfie 32", likes: 38, comments: 5 },
    { src: "/Selfie Gallery/492333873_1223137866488055_4713190006736926614_n.jpg", alt: "Patient Selfie 33", likes: 45, comments: 7 }
  ];

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
  };



  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Selfie Gallery"
        subtitle="Real Patient Transformations"
        description="See the incredible smile transformations from our happy patients. These real results showcase the power of Invisalign treatment."
        bgImage="/cosnetic.jpeg"
      />

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Patient Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of patient selfies showing their incredible 
              Invisalign journey and beautiful smile transformations.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {visibleImages.map((image, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  
                </div>

                
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreImages && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Load More Photos
              </button>
            </div>
          )}

          {/* Gallery Stats */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#004681] mb-2">
                    {galleryImages.length}+
                  </div>
                  <div className="text-gray-600">Patient Selfies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#004681] mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#004681] mb-2">
                    5★
                  </div>
                  <div className="text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#004681] to-[#003366] rounded-2xl p-8 max-w-2xl mx-auto text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-blue-100 mb-6">
                Start your Invisalign journey today and be the next success story in our gallery!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#004681] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
                <a 
                  href="tel:(610) 649-0313" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004681] transition-colors"
                >
                  Call (610) 649-0313
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 