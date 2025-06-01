import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Preview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // areas with images
  const areaMetadataArray = [
    {
      name: "Distributed Systems<br />w/ Golang, C++",
      url: "https://pelicanplatform.org/",
      logo: "/PelicanPlatformLogo_Full_Text.png",
      image: "/pelican-concept-map.png",
      description:
        "As a core developer of Pelican, an open-source data distribution system",
    },
    {
      name: "Backend w/ Java",
      url: "https://www.norfolksouthern.com/",
      logo: "/NSLogo_SoaringNameUnder_White.png",
      image: "/NorfolkSouthern AtlantaDispatchCenter.jpg",
      description:
        "Previously working on Java Spring Boot microservices at a Fortune 500 company",
    },
    {
      name: "Backend w/ Node.js",
      url: "https://github.com/Tramona-Inc/tramona",
      logo: "/tramona-logo.png",
      image: "/office-space.jpg",
      description:
        "Former startup founding engineer, powering an AI-integrated website and web-scraping pipelines",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % areaMetadataArray.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + areaMetadataArray.length) % areaMetadataArray.length
    );
  };

  // Auto-advance slides every 30 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 30000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div id="projects">
      <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-8 mb-4 text-black">
        Highlights{/* Featured Projects */}
      </h3>

      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {areaMetadataArray.map((area, index) => (
            <div key={index} className="min-w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              <Image
                src={area.image}
                alt={area.name}
                fill
                priority={index === 0} // Preloads the first image (index 0) immediately
                sizes="100vw"
                quality={85}
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-32 h-12 z-30">
                <Image
                  src={area.logo}
                  alt={`${area.name} logo`}
                  fill
                  priority={index === 0}
                  sizes="128px"
                  style={{ objectFit: "contain" }}
                  className="rounded-sm p-1"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20">
                <h2
                  className="text-4xl font-bold text-white mb-4"
                  dangerouslySetInnerHTML={{ __html: area.name }}
                />
                <p className="text-xl text-white/90 mb-6">{area.description}</p>
                <Link
                  href={area.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4 z-30">
          <button
            onClick={prevSlide}
            className="bg-white/80 p-1.5 rounded-full hover:bg-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex space-x-2">
            {areaMetadataArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/80 p-1.5 rounded-full hover:bg-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
