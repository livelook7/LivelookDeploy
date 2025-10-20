import React, { createContext, useContext, useState } from 'react'
import type { Product } from '../data/products'

type CartItem = Product & { qty: number; size?: string; color?: string }

type CartContextType = {
  items: CartItem[]
  addItem: (p: Product, opts?: { qty?: number; size?: string; color?: string }) => void
  updateQty: (id: string, qty: number) => void
  removeItem: (id: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(p: Product, opts = { qty: 1 }) {
    setItems(prev => {
      const found = prev.find(it => it.id === p.id && it.size === opts.size && it.color === opts.color)
      if (found) {
        return prev.map(it => it === found ? { ...it, qty: it.qty + (opts.qty || 1) } : it)
      }
      return [...prev, { ...p, qty: opts.qty || 1, size: opts.size, color: opts.color } as CartItem]
    })
  }

  function updateQty(id: string, qty: number) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, qty } : it).filter(it => it.qty > 0))
  }

  function removeItem(id: string) { setItems(prev => prev.filter(it => it.id !== id)) }
  function clear() { setItems([]) }

  return <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear }}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
