"use client";

import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgColor?: string;
  bgImage?: string;
}

export default function PageBanner({ 
  title, 
  subtitle, 
  description, 
  bgColor = "bg-gradient-to-r from-blue-50 to-gray-50",
  bgImage
}: PageBannerProps) {
  return (
    <section className={`py-16 relative overflow-hidden ${bgColor}`}>
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Banner Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${bgImage ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          {subtitle && (
            <h2 className={`text-2xl lg:text-3xl font-semibold mb-6 ${bgImage ? 'text-white' : 'text-[#004681]'}`}>
              {subtitle}
            </h2>
          )}
          {description && (
            <p className={`text-xl max-w-3xl mx-auto ${bgImage ? 'text-white' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 