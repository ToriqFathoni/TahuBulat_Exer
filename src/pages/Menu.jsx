import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Notification from "../components/Notification"

const menuItems = [
  { id: 1, name: "Tahu Bulat Original", price: 1000, image: "https://static.promediateknologi.id/crop/0x346:1080x1265/750x500/webp/photo/p1/1067/2024/06/18/Screenshot_20240618_130713_Instagram-2212036518.jpg" },
  { id: 2, name: "Tahu Bulat Pedas", price: 1200, image: "https://www.dapurkobe.co.id/wp-content/uploads/bola-tahu-aci-pedas.jpg" },
  { id: 3, name: "Tahu Bulat Keju", price: 1500, image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/02/10/d5sBLdz/resep-kreasi-camilan-nagih-yuk-bikin-tahu-bulat-isi-keju-lumer-gurih56.jpg" },
  { id: 4, name: "Es Teh Manis", price: 5000, image: "https://asset.kompas.com/crops/VEMd5H4lRZYH6QAc3zr0b003UfU=/0x0:880x587/1200x800/data/photo/2023/08/16/64dc53ca9f3db.jpg" },
]

export default function Menu() {
  const [order, setOrder] = useState({})
  const [address, setAddress] = useState("")
  const [isCheckout, setIsCheckout] = useState(false)
  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
    type: "success",
  })
  const navigate = useNavigate()
  const { user } = useAuth()

  const addToOrder = (itemId) => {
    setOrder((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
  }

  const removeFromOrder = (itemId) => {
    setOrder((prev) => {
      const newOrder = { ...prev }
      if (newOrder[itemId] > 1) {
        newOrder[itemId]--
      } else {
        delete newOrder[itemId]
      }
      return newOrder
    })
  }

  const totalPrice = Object.entries(order).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find((item) => item.id === Number(itemId))
    return total + (item ? item.price * quantity : 0)
  }, 0)

  const handleCheckout = () => {
    if (!user) {
      setNotification({
        isOpen: true,
        message: "Silakan login terlebih dahulu untuk melakukan pemesanan",
        type: "error",
      })
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } else {
      setIsCheckout(true)
    }
  }

  const handleConfirmOrder = (e) => {
    e.preventDefault()
    setNotification({
      isOpen: true,
      message: `Terima kasih! Pesanan Anda akan segera diantar ke ${address}. Estimasi waktu pengantaran 15-30 menit.`,
      type: "success",
    })
    setOrder({})
    setAddress("")
    setIsCheckout(false)
  }

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, isOpen: false }))
  }

  if (isCheckout) {
    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-saus-600 text-center">Checkout</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transform transition-all duration-300">
          <form onSubmit={handleConfirmOrder}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Alamat Pengiriman
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="Masukkan alamat lengkap pengiriman"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows="3"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-saus-600">Ringkasan Pesanan</h2>
              {Object.entries(order).map(([itemId, quantity]) => {
                const item = menuItems.find((item) => item.id === Number(itemId))
                return (
                  item && (
                    <div key={itemId} className="flex justify-between items-center mb-2">
                      <span className="text-daun-600">
                        {item.name} x {quantity}
                      </span>
                      <span className="font-bold text-saus-500">Rp {item.price * quantity}</span>
                    </div>
                  )
                )
              })}
              <div className="border-t pt-4 mt-4">
                <div className="font-bold text-xl text-saus-600">Total: Rp {totalPrice}</div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="flex-1 bg-daun-500 hover:bg-daun-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Konfirmasi Pesanan
              </button>
              <button
                type="button"
                onClick={() => setIsCheckout(false)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Kembali
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Notification
        isOpen={notification.isOpen}
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
      <h1 className="text-3xl font-bold mb-8 text-saus-600 text-center">Menu Tahu Bulat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-daun-600 mb-2">{item.name}</h2>
            <p className="text-saus-500 font-bold mb-4">Rp {item.price}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => removeFromOrder(item.id)}
                  disabled={!order[item.id]}
                  className={`${
                    order[item.id] ? "bg-daun-500 hover:bg-daun-600" : "bg-gray-300 cursor-not-allowed"
                  } text-white font-bold w-10 h-10 rounded-full transition-colors duration-200`}
                >
                  -
                </button>
                <span className="font-bold text-daun-600 text-lg w-8 text-center">{order[item.id] || 0}</span>
                <button
                  onClick={() => addToOrder(item.id)}
                  className="bg-daun-500 hover:bg-daun-600 text-white font-bold w-10 h-10 rounded-full transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {Object.keys(order).length > 0 && (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-saus-600">Pesanan Anda</h2>
          {Object.entries(order).map(([itemId, quantity]) => {
            const item = menuItems.find((item) => item.id === Number(itemId))
            return (
              item && (
                <div key={itemId} className="flex justify-between items-center mb-2">
                  <span className="text-daun-600">
                    {item.name} x {quantity}
                  </span>
                  <span className="font-bold text-saus-500">Rp {item.price * quantity}</span>
                </div>
              )
            )
          })}
          <div className="border-t pt-4 mt-4">
            <div className="font-bold text-xl text-saus-600">Total: Rp {totalPrice}</div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-saus-500 hover:bg-saus-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

