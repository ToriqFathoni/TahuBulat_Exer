import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-daun-100 text-daun-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Tahu Bulat Sigma. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/tahubulatenak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-daun-600 hover:text-saus-500 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/tahubulatenak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-daun-600 hover:text-saus-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@tahubulatenak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-daun-600 hover:text-saus-500 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://wa.me/6282386009649"
              target="_blank"
              rel="noopener noreferrer"
              className="text-daun-600 hover:text-saus-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

