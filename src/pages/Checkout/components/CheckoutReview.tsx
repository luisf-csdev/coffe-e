import { useCartContext } from '../../../context/Cart/CartContext'
import { CURRENCY, formatPrice } from '../../../utils/money'
import { CheckoutReviewItem } from './CheckoutReviewItem'
import { CheckoutSection } from './CheckoutSession'

export function CheckoutReview() {
  const { products } = useCartContext()
  const productsUnitAmount = products.map(
    (product) => product.unitAmount * product.quantity,
  )

  const productsSumUnitAmount = productsUnitAmount.reduce((prev, curr) => {
    return prev + curr
  }, 0)

  const productsSum = formatPrice(productsSumUnitAmount)

  const deliveryFeeUnitAmount = 350
  const deliveryFee = formatPrice(deliveryFeeUnitAmount)

  const totalSum = formatPrice(productsSumUnitAmount + deliveryFeeUnitAmount)

  return (
    <CheckoutSection
      className="max-w-[448px] flex-1"
      title="Cafés selecionados"
    >
      <div className="flex flex-col rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10">
        <ul className="space-y-6">
          {products.map((product) => (
            <li
              key={product.title}
              className="border-b border-base-button pb-6"
            >
              <CheckoutReviewItem item={product} />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-base-text">
              <p className="text-textS">Total de itens</p>
              <p className="text-textM font-normal">
                {CURRENCY} {productsSum}
              </p>
            </div>

            <div className="flex justify-between text-base-text">
              <p className="text-textS">Entrega</p>
              <p className="text-textM font-normal">
                {CURRENCY} {deliveryFee}
              </p>
            </div>

            <div className="flex justify-between text-textL font-bold text-base-subtitle">
              <p>Total</p>
              <p>
                {CURRENCY} {totalSum}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-md bg-yellow-500 px-2 py-3 text-buttonL uppercase leading-normal text-white transition-colors hover:bg-yellow-700"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </CheckoutSection>
  )
}
