import { NumberInput } from '../../../components/NumberInput'
import espressoSrc from '../../../assets/espresso.png'
import { CheckoutReviewItemRemoveButton } from './CheckoutReviewItemRemoveButton'

export function CheckoutReviewItem() {
  return (
    <div className="flex gap-10">
      <div className="flex items-center gap-5">
        <img src={espressoSrc} className="size-16" alt="Espresso" />
        <div className="flex flex-col gap-2">
          <p className="text-textM font-normal text-base-subtitle">
            Expresso tradicional
          </p>
          <div className="flex gap-2">
            <NumberInput />
            <CheckoutReviewItemRemoveButton />
          </div>
        </div>
      </div>
      <p className="ml-auto text-textM font-bold text-base-text">R$ 9,90</p>
    </div>
  )
}
