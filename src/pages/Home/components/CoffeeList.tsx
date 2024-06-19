import { MaxWidthContainer } from '../../../components/MaxWidthContainer'
import { CoffeeListCard } from './CoffeeListCard'
import database from '../../../database/coffee.json'
import { Coffee } from '../../../types/coffee'

export function CoffeeList() {
  const coffees = database as Coffee[]

  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-[54px] pt-8">
        <h2 className="font-baloo text-titleL text-base-subtitle">
          Nossos cafés
        </h2>
        <ul className="flex flex-wrap justify-center gap-8 xl:justify-stretch">
          {coffees.map((coffee) => (
            <li key={coffee.title}>
              <CoffeeListCard coffee={coffee} />
            </li>
          ))}
        </ul>
      </div>
    </MaxWidthContainer>
  )
}
