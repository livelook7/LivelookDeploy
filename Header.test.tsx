import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../src/context/CartContext'
import Header from '../src/components/Header'

test('Header renders and shows Livelook', () => {
  render(
    <BrowserRouter>
      <CartProvider>
        <Header />
      </CartProvider>
    </BrowserRouter>
  )
  expect(screen.getByText('Livelook')).toBeInTheDocument()
})
