import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

export default function Shop(): JSX.Element {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tüm Ürünler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {PRODUCTS.map(p => (
          <article key={p.id} className="bg-white p-3 rounded shadow">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.category}</p>
            <div className="mt-2 flex items-center justify-between">
              <strong>{p.price.toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</strong>
              <Link to={`/product/${p.id}`} className="text-sm px-2 py-1 border rounded">İncele</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
