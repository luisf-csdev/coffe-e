import espressoSrc from '../../../assets/espresso.png'
import { CartButton } from '../../../components/CartButton'
import { NumberInput } from '../../../components/NumberInput'
import { CoffeeListCardTag } from './CoffeeListCardTag'

export function CoffeeListCard() {
  return (
    <div className="flex max-w-64 flex-col items-center gap-[33px] rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card px-5 pb-5">
      <div className="flex flex-col items-center">
        <img className="-mt-5 size-[120px]" src={espressoSrc} alt="" />
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
          <CoffeeListCardTag text="Tradicional" />
        </div>
        <h3 className="mt-4 font-baloo text-titleS text-base-subtitle">
          Expresso Tradicional
        </h3>
        <p className="mt-2 text-center text-textS text-base-label">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="mt-auto flex w-full items-center px-1">
        <span className="mr-auto text-base-text">
          <span className="text-textS">R$</span>&nbsp;
          <span className="font-baloo text-titleM">9,90</span>
        </span>
        <div className="flex items-center gap-2">
          <NumberInput />
          <CartButton />
        </div>
      </div>
    </div>
  )
}
