import { useNavigate } from 'react-router-dom'
import { CartButton } from './CartButton'

export function HeaderCart() {
  const navigate = useNavigate()

  function navigateToCart() {
    navigate('/cart')
  }

  return <CartButton onClick={navigateToCart} variant="yellow" count={2} />
}
