import { HeroTag } from './HeroTag'
import heroSrc from '../../../assets/hero.png'
import { MaxWidthContainer } from '../../../components/MaxWidthContainer'

export function Hero() {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat py-10 sm:py-[92px]">
      <MaxWidthContainer>
        <div className="flex flex-col-reverse justify-between gap-14 lg:flex-row">
          <div className="flex flex-col justify-between gap-5 py-0.5 pb-4">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="font-baloo text-titleXL text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-textL font-normal text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="mx-auto grid max-w-fit gap-x-10 gap-y-5 sm:grid-cols-[repeat(2,_auto)]">
              <HeroTag variant="cart" text="Compra simples e segura" />
              <HeroTag variant="box" text="Embalagem mantém o café intacto" />
              <HeroTag variant="clock" text="Entrega rápida e rastreada" />
              <HeroTag
                variant="coffee"
                text="O café chega fresquinho até você"
              />
            </div>
          </div>
          <img
            className="w-[476px] max-w-full self-center"
            src={heroSrc}
            alt="Coffee Delivery hero image"
          />
        </div>
      </MaxWidthContainer>
    </section>
  )
}
