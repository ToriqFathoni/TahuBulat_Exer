import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-tahu-400 text-saus-700 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2"></span>
          Tahu Bulat Sigma
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-saus-500 transition-colors">
            Beranda
          </Link>
          <Link to="/menu" className="hover:text-saus-500 transition-colors">
            Menu
          </Link>
          {user ? (
            <>
              <span className="text-daun-600">Halo, {user.username}</span>
              <button
                onClick={logout}
                className="bg-saus-500 text-white px-4 py-2 rounded hover:bg-saus-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-saus-500 text-white px-4 py-2 rounded hover:bg-saus-600 transition-colors">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

