"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set([0, 1, 2]));

  const faqs: FAQItem[] = [
    {
      question: "Am I a good candidate for Invisalign®?",
      answer: "With Dr Wollock's years of expert experience and training, Invisalign can work for almost ALL. Call or schedule online for a FREE consultation to determine how well Invisalign can work for you."
    },
    {
      question: "Does dental insurance cover Invisalign?",
      answer: "Many dental insurance plans will cover the cost of Invisalign® treatment under the orthodontic maximum portion of the policy. There can be limitations and exclusions, for example, age limitations & waiting periods. We will confirm your orthodontic coverage and submit to your insurance policy upon you wearing your first Invisalign tray & the reimbursement will come directly to you. We are experts at getting the maximum value back for you from your dental insurance."
    },
    {
      question: "How long does it take to get Invisalign?",
      answer: "The length of treatment depends on the severity of your case. However, the average case takes about 11-12 months. But, with the techniques Dr. Wollock uses to make Invisalign work better it also makes that same 11-month average case go quicker, usually taking just 1/2 as long (down to only 6 months). Here's a look at the process:\n\n**Consultation**\nDr. Michael I. Wollock will meet with you and review how Invisalign can solve your concerns. If you choose to proceed, we can start right away with a scan, saving you a visit.\n\n**Scanning**\nInstead of nasty impressions that make people gag, we will scan your mouth. This is easier for you and more accurate. We will also take x-rays and photos. All of this comes at no extra charge.\n\n**Three Weeks Later**\nYou will meet with Dr. Wollock again to see a computerized animation of your projected Invisalign treatment. At this stage, you'll learn how many Invisalign trays you will need, which will also tell you how long your treatment will be.\n\n**Ongoing Care**\nOnce you approve the computer animation, your trays will be ready in three weeks. From that point on, you will wear your trays 24 out of 24 hours a day. Yes, all day; eating, sleeping, day, night, all the time except to clean. Please note that if you do not wear them this often, your Invisalign treatment will be far less effective. Simply put, the more you wear it, the better it will work. Throughout your treatment, you will meet with Dr. Wollock when necessary to guide you to success. For your convenience this can be a minimal number of visits. However, you are always welcome to see us more if you desire.\n\n**After the Trays**\nAt the end of your treatment, when you and Dr. Wollock are happy, you will be provided with a FREE set of upper and lower retainers. You will wear the retainers in the beginning for 22 out of 24 hours a day, for 3 months until your teeth's position firms up. Then you will wear the retainers every night for as long as you want your teeth to remain straight. And you will replace retainers a minimum of every two years to prevent them from stretching and your teeth shifting. Retainers will also help prevent damage from grinding and/or clenching, which most adults do yet most are unaware. In addition, they make great whitening trays."
    },
    {
      question: "How does Invisalign work?",
      answer: "Invisalign® takes a modern approach to straightening teeth, using a custom-made series of aligners created for you and only you. These aligner trays are made of smooth, comfortable, clear, and virtually invisible plastic that you wear over your teeth. Wearing the aligners will gradually shift your teeth into place. You will start a new set of aligners on a regular customized schedule to best fit your needs, until your treatment is completed."
    },
    {
      question: "Does Invisalign actually work?",
      answer: "Invisalign works comparable to braces to straighten teeth and fix dental problems including bite issues, gapped teeth, and crowding. Just take a look at some of our before & after photos to see just how effective Invisalign is in producing beautiful smiles."
    },
    {
      question: "How much does Invisalign cost?",
      answer: "We offer the best Invisalign® deal. An all-inclusive Invisalign® deal for $3,279 or as low as $89 per paycheck. Free Invisalign® consultations, no hidden fees, & no cutting corners! As low as $89 per paycheck with $250 down (no credit check required) or the lowest cost of $3,279 due at start of treatment. These deals are for new patients only."
    },
    {
      question: "What restrictions will I have with Invisalign?",
      answer: "Unlike braces, your Invisalign aligners can be removed. This helps facilitate cleaning, which leads to better health. However, if you don't wear them, they won't work. If you don't wear them enough, they won't work well. We find that most patients can eat any diet they choose during treatment. It takes about a week to get used to this. However, we do recommend you stay away from curry, turmeric, and yellow mustard since they irreversibly stain the trays. If you must enjoy foods that cause this stain, we recommend you do so on the last day of that tray. This means you don't need to restrict your diet habits, just as long as you wear your trays for 24 hours a day."
    },
    {
      question: "Can I drink alcohol with Invisalign?",
      answer: "Yes, it is safe to drink alcohol. It's important to clean your teeth & aligners if you have been drinking any sugary beverages (with or without alcohol)."
    },
    {
      question: "Can I get Invisalign if I have an underbite?",
      answer: "Yes. Invisalign is also designed to correct an underbite. An underbite is when you close your mouth and your lower teeth are in front of your upper teeth - the opposite of an overbite. Usually, this means there's a problem with your lower jaw being too far forward.\n\nThose who have an underbite often suffer from headaches, difficulty of breathing, chewing and speaking properly. It can also cause your teeth to wear down quickly. Invisalign can fix some underbites, but severe underbites might require surgery alongside the Invisalign treatment.\n\nEach patient is different so it's important to have an Invisalign consultation to determine if you have any underlying issues that are causing an underbite."
    },
    {
      question: "Can I get Invisalign if I have an overbite?",
      answer: "Yes. Invisalign is also designed to correct an overbite. An overbite is when the upper front teeth overlap with your lower front teeth. Overbites are one of the most common reasons patients undergo treatment for teeth realignment and most people do have some sort of overbite!\n\nIf your overbite is too large, a doctor may tell you that you have something called a deep bite. This can cause your teeth to wear down which can result in cavities, gum disease, and worn tooth enamel. It also can cause jaw pain, including TMJ. But the good news is that Invisalign can treat overbites and deep bites!\n\nAn experienced professional like Dr. Wollock can help to treat an overbite with Invisalign, leaving you with a beautiful smile!"
    },
    {
      question: "What is the best alternative to braces?",
      answer: "Invisalign is a clear, and virtually invisible, alternative to metal braces. Invisalign straightens teeth just like braces, but Invisalign aligners come with less restrictions than braces. Invisalign allows you to eat whatever foods you enjoy and brush and floss normally. Most importantly, why wear a mouth full of metal when you can do the same things (in the right hands) for less money while in clear esthetic trays?"
    },
    {
      question: "Is Invisalign better than braces?",
      answer: "Both braces and Invisalign help to straighten your teeth, and in many cases, the better choice depends on your specific situation. Many people prefer Invisalign because there are less restrictions in terms of eating, they are less visible, and they may be more comfortable. However, braces are often better for children because they require less responsibility in terms of upkeep since there is an option to remove them for cleaning."
    },
    {
      question: "How do I clean my aligners?",
      answer: "Your aligners can be cleaned by brushing them with toothpaste carefully and rinsing them in lukewarm water."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const formatAnswer = (answer: string) => {
    return answer.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h4 key={index} className="font-semibold text-[#004681] mb-2">
            {paragraph.replace(/\*\*/g, '')}
          </h4>
        );
      }
      return (
        <p key={index} className="mb-3 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageBanner 
        title="Frequently Asked Questions"
        subtitle="Everything You Need to Know About Invisalign®"
        description="Find answers to the most common questions about Invisalign treatment, costs, and what to expect."
        bgImage="/cosnetic.jpeg"
      />

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Common Questions About Invisalign®
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about Invisalign treatment, 
              costs, and what you can expect during your journey to a perfect smile.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#004681] focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openAccordions.has(index) ? (
                    <ChevronUp className="h-6 w-6 text-[#004681] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openAccordions.has(index) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4 text-gray-700">
                      {formatAnswer(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#004681] mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Can't find the answer you're looking for? Contact us directly and we'll be happy to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#004681] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                  Schedule Consultation
                </button>
                <a 
                  href="tel:(610) 649-0313" 
                  className="border-2 border-[#004681] text-[#004681] px-8 py-3 rounded-lg font-semibold hover:bg-[#004681] hover:text-white transition-colors"
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