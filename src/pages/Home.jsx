import { Link } from "react-router-dom"
import HomeCarousel from "../components/HomeCarousel"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HomeCarousel />

      <div className="w-full py-16 bg-gradient-to-r from-tahu-200 to-tahu-400">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-saus-700">Selamat Datang di Tahu Bulat Sigma</h1>
          <p className="text-2xl mb-8 text-daun-700">
            Nikmati sensasi kelezatan tahu bulat yang renyah di luar dan lembut di dalam! 
          </p>
          <Link
            to="/menu"
            className="bg-saus-500 hover:bg-saus-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 inline-block"
          >
            PESAN SEKARANG
          </Link>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-saus-600 mb-12">Produk Unggulan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="https://static.promediateknologi.id/crop/0x346:1080x1265/750x500/webp/photo/p1/1067/2024/06/18/Screenshot_20240618_130713_Instagram-2212036518.jpg?height=200&width=300"
              alt="Tahu Bulat Original"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Tahu Bulat Original</h3>
              <p className="text-gray-600">Resep rahasia dengan rasa autentik</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="https://www.dapurkobe.co.id/wp-content/uploads/bola-tahu-aci-pedas.jpg?height=200&width=300"
              alt="Tahu Bulat Pedas"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Tahu Bulat Pedas</h3>
              <p className="text-gray-600">Sensasi pedas yang menggugah selera</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/02/10/d5sBLdz/resep-kreasi-camilan-nagih-yuk-bikin-tahu-bulat-isi-keju-lumer-gurih56.jpg?height=200&width=300"
              alt="Tahu Bulat Keju"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Tahu Bulat Keju</h3>
              <p className="text-gray-600">Perpaduan sempurna tahu dan keju</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-daun-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-saus-600 mb-12">Kenapa Memilih Tahu Bulat Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <span className="text-5xl mb-4 inline-block">🌟</span>
              <h3 className="font-bold text-xl mb-2">Kualitas Terbaik</h3>
              <p className="text-gray-600">Bahan berkualitas dan proses yang higienis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <span className="text-5xl mb-4 inline-block">⚡</span>
              <h3 className="font-bold text-xl mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Diantar langsung ke lokasi Anda</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <span className="text-5xl mb-4 inline-block">💝</span>
              <h3 className="font-bold text-xl mb-2">Pelayanan Prima</h3>
              <p className="text-gray-600">Kepuasan pelanggan prioritas kami</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-saus-600 mb-8">Tunggu Apa Lagi? Pesan Sekarang!</h2>
        <Link
          to="/menu"
          className="bg-saus-500 hover:bg-saus-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 inline-block"
        >
          PESAN SEKARANG
        </Link>
      </div>
    </div>
  )
}

