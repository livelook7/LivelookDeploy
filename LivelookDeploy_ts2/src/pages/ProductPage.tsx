import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductPage(): JSX.Element {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)
  const { addItem } = useCart()

  if (!product) return <div>Ürün bulunamadı.</div>

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
      <div className="flex gap-4">
        <img src={product.img} alt={product.title} className="w-48 h-48 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.desc}</p>
          <p className="font-bold mt-3">{product.price.toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => addItem(product)} className="px-3 py-2 bg-primary text-white rounded">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  )
}
