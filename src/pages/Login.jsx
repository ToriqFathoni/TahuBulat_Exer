import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login, signup, user } = useAuth()

  useEffect(() => {
    setUsername("")
    setEmail("")
    setPassword("")
    setError("")
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      if (isRegistering) {
        await signup(username, email, password)
        navigate("/")
      } else {
        await login(email, password)
        navigate("/")
      }
    } catch (error) {
      console.error("Authentication error:", error)
      if (error.message === "User not found") {
        setError("Akun tidak ditemukan. Silakan daftar terlebih dahulu.")
        setIsRegistering(true)
      } else if (error.message === "Incorrect password") {
        setError("Password yang Anda masukkan salah. Silakan coba lagi.")
      } else if (error.message === "Email already registered") {
        setError("Email sudah terdaftar. Silakan gunakan email lain.")
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi.")
      }
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-saus-600 text-center">
        {isRegistering ? "Daftar Akun Baru" : "Login"}
      </h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {user && user.picture && (
        <div className="text-center mb-4">
          <img src={user.picture.medium || "/placeholder.svg"} alt="Profile" className="mx-auto rounded-full" />
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {isRegistering && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={isRegistering}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-saus-500 hover:bg-saus-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isRegistering ? "Daftar" : "Login"}
          </button>
        </div>
      </form>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-saus-500 hover:text-saus-700"
        >
          {isRegistering ? "Sudah punya akun? Login di sini" : "Belum punya akun? Daftar di sini"}
        </button>
      </div>
    </div>
  )
}

