import { useState } from 'react'
import { CartButton } from '../../../components/CartButton'
import { NumberInput } from '../../../components/NumberInput'
import { useCartContext } from '../../../context/Cart/CartContext'
import { Coffee } from '../../../types/coffee'
import { CoffeeListCardTag } from './CoffeeListCardTag'
import { CURRENCY, formatPrice } from '../../../utils/money'

interface CoffeeListCardProps {
  coffee: Coffee
}

export function CoffeeListCard({ coffee }: CoffeeListCardProps) {
  const price = formatPrice(coffee.unitAmount)
  const { upsertCartItem, products } = useCartContext()

  const cartProduct = products.find((product) => product.title === coffee.title)
  const cartProductQuantity = cartProduct?.quantity

  const [quantity, setQuantity] = useState(cartProductQuantity ?? 1)

  function updateQuantity(quantity: number) {
    setQuantity(quantity)
  }

  function handleAddItemToCart() {
    upsertCartItem({ ...coffee, quantity })
  }

  return (
    <div className="flex max-w-64 flex-col items-center gap-[33px] rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card px-5 pb-5">
      <div className="flex flex-col items-center">
        <img className="-mt-5 size-[120px]" src={coffee.photoURL} alt="" />

        <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
          {coffee.tags.map((tag) => (
            <CoffeeListCardTag key={tag} text={tag} />
          ))}
        </div>

        <h3 className="mt-4 font-baloo text-titleS text-base-subtitle">
          {coffee.title}
        </h3>

        <p className="mt-2 text-center text-textS text-base-label">
          {coffee.description}
        </p>
      </div>

      <div className="mt-auto flex w-full items-center px-1">
        <span className="mr-auto text-base-text">
          <span className="text-textS">{CURRENCY}</span>&nbsp;
          <span className="font-baloo text-titleM">{price}</span>
        </span>

        <div className="flex items-center gap-2">
          <NumberInput amount={quantity} setAmount={updateQuantity} />
          <CartButton onClick={handleAddItemToCart} />
        </div>
      </div>
    </div>
  )
}
