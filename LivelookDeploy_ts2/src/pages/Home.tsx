import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

export default function Home(): JSX.Element {
  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Livelook — Yeni Koleksiyon</h2>
        <p className="text-gray-600">Gençlere, üniversitelilere ve tasarımcılara özel seçkiler.</p>
        <Link to="/shop" className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded">Alışverişe Başla</Link>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Öne çıkanlar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.slice(0,8).map(p => (
            <article key={p.id} className="bg-white p-3 rounded shadow">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-medium">{p.title}</h4>
              <div className="mt-2 flex items-center justify-between">
                <strong>{p.price.toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</strong>
                <Link to={`/product/${p.id}`} className="text-sm px-2 py-1 border rounded">İncele</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
