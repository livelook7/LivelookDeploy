import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header(): JSX.Element {
  const { items } = useCart()
  const count = items.reduce((s, it) => s + it.qty, 0)

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Livelook" className="w-10 h-10" />
          <Link to="/" className="text-xl font-semibold">Livelook</Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/shop" className="text-sm">Shop</Link>
          <Link to="/cart" className="text-sm">Sepet ({count})</Link>
        </nav>
      </div>
    </header>
  )
}
