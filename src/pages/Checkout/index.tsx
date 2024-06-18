import { MaxWidthContainer } from '../../components/MaxWidthContainer'
import { CheckoutOrder } from './components/CheckoutOrder'
import { CheckoutReview } from './components/CheckoutReview'

export function Checkout() {
  return (
    <MaxWidthContainer>
      <div className="mb-40 mt-10 flex gap-8">
        <CheckoutOrder />
        <CheckoutReview />
      </div>
    </MaxWidthContainer>
  )
}
