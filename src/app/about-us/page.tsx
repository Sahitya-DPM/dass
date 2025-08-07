"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("dr-wollock");

  const teamMembers = [
    {
      id: "dr-wollock",
      name: "Dr. Michael I. Wollock",
      title: "Dentist",
      image: "/dr-wollock.jpg",
      content: `Dr. Michael I. Wollock is a highly experienced and skilled dentist who has been practicing dentistry for over 15 years. He is committed to providing the highest quality dental care to his patients in a comfortable and welcoming environment.

Dr. Wollock received his Doctor of Dental Medicine (DMD) degree from Temple University School of Dentistry. He has completed extensive continuing education in various areas of dentistry, including cosmetic dentistry, implant dentistry, and Invisalign treatment.

Dr. Wollock is passionate about staying up-to-date with the latest dental technology and techniques to provide his patients with the best possible care. He is a member of several professional organizations, including the American Dental Association and the Pennsylvania Dental Association.

When not practicing dentistry, Dr. Wollock enjoys spending time with his family and participating in community activities. He is committed to giving back to the community and has participated in various charitable dental events.`
    },
    {
      id: "dr-smith",
      name: "Dr. Sarah Smith",
      title: "Associate Dentist",
      image: "/dr-smith.jpg",
      content: `Dr. Sarah Smith is an associate dentist who joined our practice in 2020. She brings a fresh perspective and modern approach to dental care, specializing in preventive dentistry and patient education.

Dr. Smith received her dental degree from the University of Pennsylvania School of Dental Medicine. She is particularly interested in helping patients maintain optimal oral health through regular check-ups and preventive care.

She is known for her gentle approach and ability to make patients feel comfortable during their dental visits. Dr. Smith is committed to continuing education and stays current with the latest advancements in dental technology and techniques.`
    },
    {
      id: "jennifer",
      name: "Jennifer Martinez",
      title: "Dental Hygienist",
      image: "/jennifer.jpg",
      content: `Jennifer Martinez is our lead dental hygienist with over 10 years of experience in dental hygiene. She is passionate about helping patients achieve and maintain optimal oral health through thorough cleanings and personalized oral hygiene education.

Jennifer received her degree in Dental Hygiene from the Community College of Philadelphia. She is certified in local anesthesia and is trained in the latest periodontal therapy techniques.

Jennifer takes pride in building lasting relationships with patients and helping them understand the importance of good oral hygiene habits. She is known for her gentle touch and thorough approach to dental cleanings.`
    },
    {
      id: "michael",
      name: "Michael Johnson",
      title: "Dental Assistant",
      image: "/michael.jpg",
      content: `Michael Johnson is our experienced dental assistant who works closely with Dr. Wollock to ensure smooth and efficient dental procedures. He has been with our practice for 8 years and is certified in dental assisting.

Michael is responsible for preparing treatment rooms, sterilizing instruments, and assisting during dental procedures. He is also trained in taking dental X-rays and impressions.

Michael is known for his attention to detail and his ability to help patients feel comfortable during their dental visits. He is committed to maintaining the highest standards of infection control and patient safety.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="About Us"
        description="Welcome to Dentistry at Suburban Square, where we combine years of experience with the latest dental technology to provide exceptional care in a warm, welcoming environment."
        bgImage="/cosnetic.jpeg"
      />

      {/* About Our Practice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dentistry at Suburban Square was established with a simple mission: to provide exceptional dental care in a comfortable, patient-centered environment. Located in the heart of Ardmore, Pennsylvania, our practice has been serving the Main Line community for over 15 years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that every patient deserves personalized attention and the highest quality dental care. Our team is committed to staying current with the latest advancements in dental technology and techniques to ensure that our patients receive the best possible treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our office is designed with patient comfort in mind, featuring modern amenities and a relaxing atmosphere. We understand that visiting the dentist can be stressful for some patients, which is why we go above and beyond to create a welcoming and comfortable experience.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/office-exterior.jpg"
                  alt="Dentistry at Suburban Square Office"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are committed to providing exceptional dental care with a focus on patient comfort and satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Every decision we make is focused on what&apos;s best for our patients. We take the time to listen to your concerns and develop personalized treatment plans.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence in Dentistry</h3>
              <p className="text-gray-600">
                We maintain the highest standards of dental care through continuous education and the use of advanced technology and techniques.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We are proud to be part of the Ardmore community and are committed to giving back through charitable events and community involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our experienced and dedicated team is committed to providing you with the highest quality dental care in a comfortable and welcoming environment.
            </p>
          </div>

          {/* Team Member Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setActiveTab(member.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === member.id
                      ? "bg-[#004681] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {member.name}
                </button>
              ))}
            </div>
          </div>

          {/* Team Member Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={teamMembers.find(m => m.id === activeTab)?.image || "/dr-wollock.jpg"}
                  alt={teamMembers.find(m => m.id === activeTab)?.name || "Team Member"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {teamMembers.find(m => m.id === activeTab)?.name}
              </h3>
              <p className="text-lg text-[#004681] font-semibold mb-6">
                {teamMembers.find(m => m.id === activeTab)?.title}
              </p>
              <div className="prose prose-lg text-gray-700">
                {teamMembers.find(m => m.id === activeTab)?.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-700">32 Parking Plaza, Suite 604</p>
                    <p className="text-gray-700">Ardmore, PA 19003</p>
                    <p className="text-gray-600 text-sm">Located in The Times Building in Suburban Square</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:(610) 649-0313" className="text-[#004681] hover:text-[#003366] transition-colors">
                      (610) 649-0313
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#004681] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Mon: 7:00 AM - 5:00 PM</p>
                      <p>Tue: 9:00 AM - 8:00 PM</p>
                      <p>Wed: 8:00 AM - 5:00 PM</p>
                      <p>Thu: 9:00 AM - 8:00 PM</p>
                      <p>Fri: 7:00 AM - 3:00 PM</p>
                      <p>Sat: Hours by Appointment</p>
                      <p>Sun: Closed</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">*Hours are subject to change</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/office-interior.jpg"
                  alt="Office Interior"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Exceptional Dental Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Schedule your appointment today and discover why so many patients choose Dentistry at Suburban Square for their dental care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#004681] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                Schedule Appointment
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