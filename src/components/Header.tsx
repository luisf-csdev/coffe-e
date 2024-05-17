import { NavLink } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { HeaderLocation } from './HeaderLocation'
import { MaxWidthContainer } from './MaxWidthContainer'
import { HeaderCart } from './HeaderCart'

export function Header() {
  return (
    <header>
      <MaxWidthContainer>
        <div className="flex justify-between py-8">
          <NavLink to="/">
            <img
              className="h-10 w-auto"
              src={logoSrc}
              alt="Coffee Delivery logo"
            />
          </NavLink>
          <div className="flex items-center gap-3">
            <HeaderLocation />
            <HeaderCart />
          </div>
        </div>
      </MaxWidthContainer>
    </header>
  )
}
