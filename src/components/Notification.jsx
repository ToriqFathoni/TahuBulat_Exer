import { useEffect } from "react"

export default function Notification({ message, type, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const bgColor = type === "success" ? "bg-daun-500" : "bg-saus-500"

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out animate-fade-in`}
      >
        <div className="flex items-center space-x-2">
          {type === "success" ? <span className="text-2xl">✅</span> : <span className="text-2xl">⚠️</span>}
          <p className="font-medium">{message}</p>
        </div>
      </div>
    </div>
  )
}

