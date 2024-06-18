import { CheckoutReviewItem } from './CheckoutReviewItem'
import { CheckoutSection } from './CheckoutSession'

export function CheckoutReview() {
  return (
    <CheckoutSection
      className="max-w-[448px] flex-1"
      title="Cafés selecionados"
    >
      <div className="flex flex-col rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10">
        <ul className="space-y-6">
          <li className="border-b border-base-button pb-6">
            <CheckoutReviewItem />
          </li>
          <li className="border-b border-base-button pb-6">
            <CheckoutReviewItem />
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-base-text">
              <p className="text-textS">Total de itens</p>
              <p className="text-textM font-normal">R$ 29,70</p>
            </div>

            <div className="flex justify-between text-base-text">
              <p className="text-textS">Entrega</p>
              <p className="text-textM font-normal">R$ 3,50</p>
            </div>

            <div className="flex justify-between text-textL font-bold text-base-subtitle">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-md bg-yellow-500 px-2 py-3 text-buttonL uppercase leading-normal text-white"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </CheckoutSection>
  )
}
