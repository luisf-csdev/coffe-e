import { CircleIcon } from '../../components/CircleIcon'
import { MaxWidthContainer } from '../../components/MaxWidthContainer'
import deliverySrc from '../../assets/delivery.png'

export function Success() {
  return (
    <MaxWidthContainer>
      <div className="mb-40 mt-20 flex items-end justify-between">
        <div className="mb-3 flex flex-col gap-10">
          <div className="space-y-1">
            <h1 className="font-baloo text-titleL text-yellow-700">
              Uhu! Pedido confirmado
            </h1>
            <p className="text-textL font-normal text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>

          <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] border bg-gradient-to-r from-yellow-500 to-purple-500 p-px ">
            <div className="flex flex-col gap-8 rounded-bl-[34px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[34px] bg-white p-10">
              <div className="flex items-center gap-3">
                <CircleIcon variant="location" />
                <div className="text-textM font-normal text-base-text">
                  <p>
                    Entrega em&nbsp;
                    <span className="font-bold">
                      Rua João Daniel Martinelli, 102
                    </span>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CircleIcon variant="clock" />
                <div className="text-textM font-normal text-base-text">
                  <p>Previsão de entrega</p>
                  <p className="font-bold">20 min - 30 min</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CircleIcon variant="money" />
                <div className="text-textM font-normal text-base-text">
                  <p>Pagamento na entrega</p>
                  <p className="font-bold">Cartão de Crédito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={deliverySrc}
          className="h-auto max-w-[492px]"
          alt="Delivery illustration"
        />
      </div>
    </MaxWidthContainer>
  )
}
