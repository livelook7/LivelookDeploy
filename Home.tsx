import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(): JSX.Element {
  return (
    <div>
      <section className="mb-6">
      <h2 className="text-2xl font-bold">Livelook — Yeni Koleksiyon</h2>
      <p className="text-gray-600">Gençlere, üniversitelilere ve tasarımcılara özel seçkiler.</p>
      <Link to="/shop" className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded">Alışverişe Başla</Link>
      </section>
    </div>
  )
}
