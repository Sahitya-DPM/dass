"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, MessageCircle, Calendar } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Contact Us"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#004681] mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you achieve the smile you've always wanted. Contact us today to schedule your consultation or ask any questions about our services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#004681]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href="tel:(610) 649-0313" className="text-gray-600 hover:text-[#004681] transition-colors">
                      (610) 649-0313
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#004681]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Dentistry at Suburban Square<br />
                      32 Parking Plaza, Suite 604<br />
                      Ardmore, PA 19003<br />
                      Located in The Times Building in Suburban Square
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#004681]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><span className="font-medium">Monday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Tuesday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Wednesday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Thursday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Friday:</span> 8:00 AM - 2:00 PM</p>
                      <p><span className="font-medium">Saturday:</span> By Appointment</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#004681]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@dentistryatsuburbansquare.com" className="text-gray-600 hover:text-[#004681] transition-colors">
                      info@dentistryatsuburbansquare.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-[#004681] mb-6">Send Us a Message</h2>
              
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  There was an error sending your message. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004681] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004681] focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004681] focus:border-transparent transition-colors"
                      placeholder="(610) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004681] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="invisalign">Invisalign Consultation</option>
                      <option value="general">General Question</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004681] focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your inquiry or the reason for your appointment..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#004681] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#003366] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Prefer to call? Contact us directly at{" "}
                  <a href="tel:(610) 649-0313" className="text-[#004681] hover:underline font-medium">
                    (610) 649-0313
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004681] mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Dentistry at Suburban Square, we're committed to providing exceptional dental care in a comfortable, welcoming environment. Our experienced team uses the latest technology and techniques to ensure the best possible outcomes for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#004681] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We offer convenient appointment times to fit your busy schedule, including early morning and evening appointments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#004681] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Communication</h3>
              <p className="text-gray-600">
                We believe in clear, open communication and take the time to explain all treatment options and answer your questions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#004681] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Location</h3>
              <p className="text-gray-600">
                Located in the heart of Suburban Square, we're easily accessible with plenty of parking and public transportation options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 