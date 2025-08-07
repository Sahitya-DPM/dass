"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Terms and Conditions"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-[#004681] mb-4">Security Policy</h2>
              <p className="text-gray-700 mb-8">
                Your payment and personal information is always safe. Our Secure Sockets Layer (SSL) software is the industry standard and among the best software available today for secure commerce transactions. It encrypts all of your personal information, including credit card number, name, and address, so that it cannot be read over the internet.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Return & Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Returns</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>You have 30 calendar days to return an item from the date you received it.</li>
                <li>To be eligible for a return, your item must be unused and in the same condition that you received it.</li>
                <li>Your item must be in the original packaging.</li>
                <li>Your item needs to have the receipt or proof of purchase.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Refunds</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</li>
                <li>If your return is approved, we will initiate a refund to your credit card (or original method of payment).</li>
                <li>You will receive the credit within a certain amount of days, depending on your card issuer&apos;s policies.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.</li>
                <li>If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700 mb-8">
                If you have any questions on how to return your item to us, contact us.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Shipping Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Domestic Shipping Policy</h3>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Shipment processing time</h4>
              <p className="text-gray-700 mb-4">
                All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.
              </p>
              <p className="text-gray-700 mb-4">
                If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Shipment to P.O. boxes or APO/FPO addresses</h4>
              <p className="text-gray-700 mb-4">
                Dentistry at Suburban Square ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO addresses.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Shipment confirmation & Order tracking</h4>
              <p className="text-gray-700 mb-4">
                You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customs, Duties and Taxes</h4>
              <p className="text-gray-700 mb-4">
                Dentistry at Suburban Square is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Damages</h4>
              <p className="text-gray-700 mb-6">
                Dentistry at Suburban Square is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
              </p>
              <p className="text-gray-700 mb-8">
                Please save all packaging materials and damaged goods before filing a claim.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Shipping Policy</h3>
              <p className="text-gray-700 mb-8">
                We currently do not ship outside the U.S.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  This document was last updated on January 24, 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 