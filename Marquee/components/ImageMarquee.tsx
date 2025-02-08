"use client";

import Image from "next/image";

interface ImageMarqueeProps {
  images: string[];
}

const ImageMarquee = ({ images }: ImageMarqueeProps) => {
  return (
    <div className="image-marquee-container">
      <div className="image-marquee">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="image-wrapper">
            <Image
              src={src}
              alt={`Marquee image ${index}`}
              width={300}
              height={200}
              className="rounded-lg shadow-md border border-purple-300"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;

