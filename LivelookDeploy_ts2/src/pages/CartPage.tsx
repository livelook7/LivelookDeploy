import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage(): JSX.Element {
  const { items, updateQty, removeItem, clear } = useCart()
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sepet</h2>
      {items.length === 0 ? <p>Sepetiniz boş.</p> : (
        <div className="space-y-4">
          {items.map(it => (
            <div key={it.id} className="flex items-center gap-3 bg-white p-3 rounded shadow">
              <img src={it.img} alt={it.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="flex justify-between"><strong>{it.title}</strong><span>{(it.price*it.qty).toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</span></div>
                <div className="text-sm text-gray-600">{it.color} · {it.size}</div>
                <div className="mt-2">
                  <input type="number" min={1} value={it.qty} onChange={(e)=>updateQty(it.id, Number(e.target.value))} className="w-20 border rounded px-2 py-1 text-sm" />
                </div>
              </div>
              <button onClick={()=>removeItem(it.id)} className="px-2 py-1 border rounded">Kaldır</button>
            </div>
          ))}

          <div className="pt-4 border-t flex items-center justify-between">
            <strong>Ara Toplam</strong>
            <strong>{subtotal.toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</strong>
          </div>

          <div className="flex gap-2 mt-3">
            <button onClick={()=>clear()} className="px-3 py-1 border rounded">Temizle</button>
            <button onClick={()=>alert('Demo: Sanal ödeme başarılı!') } className="px-3 py-1 bg-accent text-white rounded">Ödemeyi Tamamla</button>
          </div>
        </div>
      )}
    </div>
  )
}
