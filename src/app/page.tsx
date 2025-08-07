"use client";

import Image from "next/image";
import { Phone, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Custom color classes
const customColors = {
  primaryBlue: '#004681',
  goldGradient: 'linear-gradient(90deg,#f1d572 1%,#b59236 25%,#f1d572 50%,#f8f2a4 75%,#fef28e)'
};
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conveniently Located on the Main Line",
      subtitle: "Right in Suburban Square",
      description: "Easy access to exceptional dental care in the heart of the Main Line community.",
      buttonText: "Learn More",
      backgroundImage: "/Conveniently Located on the Main Line.jpeg",
      overlay: "rgba(0, 0, 0, 0.4)"
    },
    {
      id: 2,
      title: "The Best Deal on Invisalign",
      subtitle: "We Do It Better, Quicker and Faster",
      description: "Experience the most advanced Invisalign treatment with faster results and better outcomes.",
      buttonText: "Get Started",
      backgroundImage: "/invisalign.jpeg",
      overlay: "rgba(0, 0, 0, 0.3)"
    },
    {
      id: 3,
      title: "Cosmetic Dentistry",
      subtitle: "Proven Results You Can Trust",
      description: "Our office is known for high-quality cosmetic work with proven results that transform smiles.",
      buttonText: "Transform Your Smile",
      backgroundImage: "/cosnetic.jpeg",
      overlay: "rgba(0, 0, 0, 0.5)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Slider Section */}
      <section id="home" className="relative h-[80vh]">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ backgroundColor: slide.overlay }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className={`text-white max-w-4xl px-4 sm:px-6 lg:px-8 ${
                  slide.id === 2 ? 'text-right ml-auto' : 'text-left'
                }`}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6" style={{
                    background: 'linear-gradient(90deg,#f1d572 1%,#b59236 25%,#f1d572 50%,#f8f2a4 75%,#fef28e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="bg-[#004681] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#003366] transition-colors shadow-lg transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign Offer Section */}
      <section className="py-20 bg-gradient-to-br from-[#004681]/10 to-[#004681]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  All-Inclusive Invisalign®
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600">
                  The Best Deal, The Best Reviews & The Most Experience.
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With hundreds of hours of continuing education, Dr. Wollock uses his expertise to train, mentor, and teach other Invisalign dentists across North America. Dr. Wollock brings a wealth of experience to solve your issues with the added benefit of a volume discount.
              </p>
              
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-[#004681] uppercase tracking-wide">Flexible Payment Options</div>
                      <div className="text-2xl font-bold text-gray-900">Choose Your Plan</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg p-4 border border-[#004681]/20" style={{
                        background: 'linear-gradient(90deg,#f1d572 1%,#b59236 25%,#f1d572 50%,#f8f2a4 75%,#fef28e)'
                      }}>
                        <div className="text-center space-y-2">
                          <div className="text-2xl font-bold text-[#004681]">$89</div>
                          <div className="text-xs text-gray-700 font-medium">per paycheck</div>
                          <div className="text-xs text-[#004681] font-semibold">Monthly Payment</div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-[#004681]/20">
                        <div className="text-center space-y-2">
                          <div className="text-2xl font-bold text-[#004681]">$3,279</div>
                          <div className="text-xs text-gray-600 font-medium">one-time payment</div>
                          <div className="text-xs text-[#004681] font-semibold">Save $1,000+</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#004681] text-white rounded-lg px-4 py-2 inline-block">
                      <span className="text-sm font-semibold">All-Inclusive Treatment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invisalign Awards Auto Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Recognized for excellence in Invisalign treatment
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              <Image
                src="/invisalign-elite-2016.png"
                alt="Invisalign Elite 2016"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-plus-2018.jpg"
                alt="Diamond Plus 2018"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-logo-2019.png"
                alt="Diamond Logo 2019"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-top-invisalign-2021.jpg"
                alt="Diamond Top Invisalign 2021"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/Diamond-Invisalign-provider-2023-6401w.png"
                alt="Diamond Invisalign Provider 2023"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/invisalign-2014.png"
                alt="Invisalign 2014"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/2024-Advantage-Program-Icons-RGB-fullcolor-Diamond-Plus-Tag.png"
                alt="Diamond Plus 2024"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/AdvantageProgIcons_Diamond-2022.png"
                alt="Diamond 2022"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/AdvantageProgIcons2020.png"
                alt="Advantage Program 2020"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/best-of-mainline-2022-226x208.jpg"
                alt="Best of Mainline 2022"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              {/* Duplicate logos for seamless loop */}
              <Image
                src="/invisalign-elite-2016.png"
                alt="Invisalign Elite 2016"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-plus-2018.jpg"
                alt="Diamond Plus 2018"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-logo-2019.png"
                alt="Diamond Logo 2019"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/diamond-top-invisalign-2021.jpg"
                alt="Diamond Top Invisalign 2021"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/Diamond-Invisalign-provider-2023-6401w.png"
                alt="Diamond Invisalign Provider 2023"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/invisalign-2014.png"
                alt="Invisalign 2014"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/2024-Advantage-Program-Icons-RGB-fullcolor-Diamond-Plus-Tag.png"
                alt="Diamond Plus 2024"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/AdvantageProgIcons_Diamond-2022.png"
                alt="Diamond 2022"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/AdvantageProgIcons2020.png"
                alt="Advantage Program 2020"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
              <Image
                src="/best-of-mainline-2022-226x208.jpg"
                alt="Best of Mainline 2022"
                width={120}
                height={60}
                className="object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to advanced cosmetic procedures, we offer a full range 
              of dental services to keep your smile healthy and beautiful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Teeth Cleanings",
                description: "Professional dental cleanings and preventive care to maintain optimal oral health and prevent dental issues.",
                color: "blue"
              },
              {
                title: "Fillings & Crowns",
                description: "Restorative dental treatments including fillings, crowns, and other procedures to repair and strengthen damaged teeth.",
                color: "green"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with professional whitening, veneers, bonding, and other cosmetic procedures.",
                color: "purple"
              },
              {
                title: "Laser Gingivectomy",
                description: "Advanced laser treatment for gum reshaping and periodontal procedures with minimal discomfort and faster healing.",
                color: "red"
              },
              {
                title: "Other Procedures",
                description: "Comprehensive dental care including root canals, extractions, and specialized treatments tailored to your needs.",
                color: "indigo"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#004681] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-4 text-[#004681] font-medium hover:text-[#003366] transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Dentistry at Suburban Square?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine years of experience with the latest dental technology to provide 
                exceptional care in a warm, welcoming environment. Our commitment to patient 
                comfort and satisfaction sets us apart.
              </p>
              
              <div className="space-y-4">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and caring dental team",
                  "Comfortable, modern facility",
                  "Flexible appointment scheduling",
                  "Comprehensive treatment plans",
                  "Patient education and prevention focus"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#004681] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              

            </div>
            
            <div className="relative">
              <Image
                src="/471395205_18353152516135062_57590303392362907_n.jpg"
                alt="Award-Winning Care"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Watch Our Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our dental practice and see what makes us different
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Tour Our Office
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/uGsNrjwvjR4"
                  title="Tour Our Office"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                G.O.A.T. awarded at GRC 2023
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/GO2EjyeMh6M"
                  title="G.O.A.T. awarded at GRC 2023"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Cosmetic Dentistry
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your smile is often your first impression you make, so it's important to have a smile that you are confident in showing. Our office is known for high-quality cosmetic work with great aesthetics.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#004681]">
                  Our office offers a full line of cosmetic dentistry services, including:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#004681] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Porcelain Veneers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#004681] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Invisalign</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#004681] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Dental Implants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#004681] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Whitening</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-[#004681] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#003366] transition-colors shadow-lg">
                Learn More About Cosmetic Dentistry
              </button>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/493915282_1226114906190351_5856231812174639338_n.jpg"
                  alt="Cosmetic Dentistry"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ask the Expert Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ask the Expert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert advice and insights from Dr. Michael I. Wollock
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/videoseries?si=ZSQdoitUSuxZW3Ay&amp;list=PLQK6YROLPcp5W3EzYnEQyz2jd7MU9G49f" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Dental Care Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004681] mb-4">
              Top Rated Dental Care
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Google Reviews */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.google.com/search?q=dentistry+at+suburban+square&oq=dentistry+at+suburban+square" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                550+ Reviews
              </a>
            </div>
            
            {/* Facebook Reviews */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.facebook.com/DentSubSquare/reviews/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                200+ Reviews
              </a>
            </div>
            
            {/* Yelp Reviews */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/yelp.png"
                  alt="Yelp"
                  width={120}
                  height={40}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-2">4.9 out of 5 stars</p>
              <a 
                href="https://www.yelp.com/biz/dentistry-at-suburban-square-ardmore-7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#004681] underline hover:text-[#003366] transition-colors font-medium"
              >
                100+ Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#004681]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to schedule your consultation and take the first step 
                towards a healthier, more beautiful smile.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">(610) 649-0313</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">32 Parking Plaza, Suite 604<br />Ardmore, PA 19003<br />Located in The Times Building in Suburban Square</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-blue-100">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 3:00 PM<br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Visit</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#004681] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#003366] transition-colors"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 