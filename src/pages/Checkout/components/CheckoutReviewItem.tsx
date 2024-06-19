import { NumberInput } from '../../../components/NumberInput'
import { CheckoutReviewItemRemoveButton } from './CheckoutReviewItemRemoveButton'
import { useState } from 'react'
import { CartCoffee } from '../../../reducers/cart'
import { CURRENCY, formatPrice } from '../../../utils/money'
import { useCartContext } from '../../../context/Cart/CartContext'

interface CheckoutReviewItemProps {
  item: CartCoffee
}

export function CheckoutReviewItem({ item }: CheckoutReviewItemProps) {
  const [quantity, setQuantity] = useState(item.quantity)
  const { upsertCartItem, removeCartItem } = useCartContext()

  function updateCartItemQuantity(quantity: number) {
    setQuantity(quantity)
    upsertCartItem({ ...item, quantity })
  }

  function handleRemoveCartItem() {
    removeCartItem(item)
  }

  const price = formatPrice(item.unitAmount)

  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-5">
        <img src={item.photoURL} className="size-16" alt="Espresso" />
        <div className="flex flex-col gap-2">
          <p className="text-textM font-normal text-base-subtitle">
            {item.title}
          </p>
          <div className="flex gap-2">
            <NumberInput amount={quantity} setAmount={updateCartItemQuantity} />
            <CheckoutReviewItemRemoveButton onClick={handleRemoveCartItem} />
          </div>
        </div>
      </div>
      <p className="ml-auto text-textM font-bold text-base-text">
        {CURRENCY} {price}
      </p>
    </div>
  )
}
