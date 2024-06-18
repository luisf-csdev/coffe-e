import { CoffeeList } from './components/CoffeeList'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <div className="pb-40">
      <Hero />
      <CoffeeList />
    </div>
  )
}
