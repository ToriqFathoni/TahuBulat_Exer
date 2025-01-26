import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const slides = [
  {
    image: "https://i.pinimg.com/736x/09/c7/e9/09c7e9c7802dd7c9f1bc9b4339f65ad8.jpg?height=400&width=800",
    title: "Promo Spesial!",
    description: "Beli 10 Tahu Bulat, Gratis 2!",
  },
  {
    image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/02/10/d5sBLdz/resep-kreasi-camilan-nagih-yuk-bikin-tahu-bulat-isi-keju-lumer-gurih56.jpg",
    title: "Varian Baru!",
    description: "Tahu Bulat Rasa Keju, Cobain Sekarang!",
  },
  {
    image: "https://bisniskosmetika.com/wp-content/uploads/2022/08/GRATIS-ONGKIR.png?height=400&width=800",
    title: "Gratis Ongkir",
    description: "Untuk Pembelian Minimal Rp50.000",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  )
}

