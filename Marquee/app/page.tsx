import ImageMarquee from "@/components/ImageMarquee"

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  // Add more image URLs as needed
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8"></h1>
      <ImageMarquee images={images} />
    </main>
  )
}

