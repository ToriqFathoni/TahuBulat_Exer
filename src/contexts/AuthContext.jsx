import React, { createContext, useState, useContext, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

const users = []

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email, password) => {
    const foundUser = users.find((u) => u.email === email)
    if (!foundUser) {
      throw new Error("User not found")
    }
    if (foundUser.password !== password) {
      throw new Error("Incorrect password")
    }
    setUser(foundUser)
    localStorage.setItem("user", JSON.stringify(foundUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const signup = async (username, email, password) => {
    if (users.some((u) => u.email === email)) {
      throw new Error("Email already registered")
    }
    try {
      const response = await axios.get("https://randomuser.me/api/")
      const randomUser = response.data.results[0]
      const newUser = {
        username,
        email,
        password,
        name: randomUser.name,
        picture: randomUser.picture,
      }
      users.push(newUser)
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
    } catch (error) {
      console.error("Error fetching random user data:", error)
      throw new Error("Signup failed. Please try again.")
    }
  }

  return <AuthContext.Provider value={{ user, login, logout, signup }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

