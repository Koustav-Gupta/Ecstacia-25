import React from "react";
import Marquee from "react-fast-marquee";

// Define image list as a constant array
const images: string[] = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
  "https://example.com/image5.jpg",
];

const ImageMarquee = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-r from-purple-700 to-lilac-500 md:shadow-xl">
      {/* Forward Scroll */}
      <Marquee pauseOnHover speed={50} className="mb-4">
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-40 w-auto rounded-xl border border-purple-300 shadow-lg"
            />
          </div>
        ))}
      </Marquee>

      {/* Reverse Scroll */}
      <Marquee pauseOnHover speed={50} direction="right">
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-40 w-auto rounded-xl border border-purple-300 shadow-lg"
            />
          </div>
        ))}
      </Marquee>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-purple-900 via-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-purple-900 via-transparent" />
    </div>
  );
};

export default ImageMarquee;
