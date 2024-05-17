import { HeroTag } from './HeroTag'
import heroSrc from '../../../assets/hero.png'
import { MaxWidthContainer } from '../../../components/MaxWidthContainer'

export function Hero() {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat py-[92px]">
      <MaxWidthContainer>
        <div className="flex justify-between gap-14">
          <div className="flex flex-col justify-between gap-5 py-0.5 pb-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-baloo text-titleXL text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-textL font-normal text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-[repeat(2,_auto)] gap-x-10 gap-y-5">
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
            className="h-[360px] self-center"
            src={heroSrc}
            alt="Coffee Delivery hero image"
          />
        </div>
      </MaxWidthContainer>
    </section>
  )
}
