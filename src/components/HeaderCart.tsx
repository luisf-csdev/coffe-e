import { useNavigate } from 'react-router-dom'
import { CartButton } from './CartButton'
import { useCartContext } from '../context/Cart/CartContext'

export function HeaderCart() {
  const { products } = useCartContext()
  const navigate = useNavigate()

  function navigateToCart() {
    navigate('/checkout')
  }

  return (
    <CartButton
      onClick={navigateToCart}
      variant="yellow"
      count={products.length}
    />
  )
}
