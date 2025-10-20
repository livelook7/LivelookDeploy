export interface Product {
  id: string
  title: string
  price: number
  category: string
  colors: string[]
  sizes: string[]
  img: string
  desc: string
}

export const PRODUCTS: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `p${i+1}`,
  title: ['Minimal Mono','Retro Wave','Type Lab','Oversize Graphic','Black Basic'][i % 5] + ` #${i+1}`,
  price: 149 + (i % 5) * 20,
  category: ['Minimal','Grafik','Tipografik','Streetwear'][i % 4],
  colors: ['Beyaz','Siyah','Gri'].slice(0, (i % 3) + 1),
  sizes: ['S','M','L','XL'],
  img: `/mockups/p${(i%10)+1}.jpg`,
  desc: 'Livelook özel tasarım tişört — rahat kesim, kaliteli baskı.'
}))
