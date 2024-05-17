import { MaxWidthContainer } from '../../../components/MaxWidthContainer'
import { CoffeeListCard } from './CoffeeListCard'

export function CoffeeList() {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-[54px] pb-40 pt-8">
        <h2 className="font-baloo text-titleL text-base-subtitle">
          Nossos cafés
        </h2>
        <CoffeeListCard />
      </div>
    </MaxWidthContainer>
  )
}
