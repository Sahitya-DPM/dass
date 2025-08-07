"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Privacy Policy"
        subtitle=""
        description=""
        bgImage="/cosnetic.jpeg"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                This Privacy Policy governs the manner in which Dentistry at Suburban Square collects, uses, maintains and discloses information collected from users (each, a "User") of the dentistryatsuburbansquare.com website ("Site"). This privacy policy applies to the Site and all products and services offered by Dentistry at Suburban Square.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Personal identification information</h2>
              <p className="text-gray-700 mb-6">
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Non-personal identification information</h2>
              <p className="text-gray-700 mb-6">
                We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Web browser cookies</h2>
              <p className="text-gray-700 mb-6">
                Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">How we use collected information</h2>
              <p className="text-gray-700 mb-4">
                Dentistry at Suburban Square may collect and use Users personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>To improve customer service</strong> - Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li><strong>To improve our Site</strong> - We may use feedback you provide to improve our products and services.</li>
                <li><strong>To send periodic emails</strong> - We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">How we protect your information</h2>
              <p className="text-gray-700 mb-6">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Sharing your personal information</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Third party websites</h2>
              <p className="text-gray-700 mb-6">
                Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Changes to this privacy policy</h2>
              <p className="text-gray-700 mb-6">
                Dentistry at Suburban Square has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Your acceptance of these terms</h2>
              <p className="text-gray-700 mb-6">
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>

              <h2 className="text-2xl font-bold text-[#004681] mb-4">Contacting us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Dentistry at Suburban Square</strong><br />
                  dentistrysub.wpengine.com<br />
                  604 The Times Building, Suburban Square<br />
                  Ardmore, PA 19003<br />
                  (610) 649-0313<br />
                  dentistryatsuburbansquare@hotmail.com
                </p>
              </div>

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