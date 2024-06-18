import { CheckoutOrderButton } from './CheckoutOrderButton'
import { CheckoutOrderCard } from './CheckoutOrderCard'
import { CheckoutOrderCardInput } from './CheckoutOrderCardInput'
import { CheckoutSection } from './CheckoutSession'

export function CheckoutOrder() {
  return (
    <CheckoutSection
      className="max-w-screen-sm flex-1"
      title="Complete seu pedido"
    >
      <CheckoutOrderCard
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        variant="delivery"
      >
        <div className="flex flex-col gap-4">
          <CheckoutOrderCardInput inputSize="md" placeholder="CEP" />
          <CheckoutOrderCardInput placeholder="Rua" />
          <div className="flex gap-3">
            <CheckoutOrderCardInput inputSize="md" placeholder="Número" />
            <CheckoutOrderCardInput optional placeholder="Complemento" />
          </div>
          <div className="flex gap-3">
            <CheckoutOrderCardInput inputSize="md" placeholder="Bairro" />
            <CheckoutOrderCardInput placeholder="Cidade" />
            <CheckoutOrderCardInput inputSize="sm" placeholder="UF" />
          </div>
        </div>
      </CheckoutOrderCard>

      <CheckoutOrderCard
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        variant="payment"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CheckoutOrderButton text="Cartão de crédito" variant="credit" />
          <CheckoutOrderButton text="Cartão de débito" variant="debit" />
          <CheckoutOrderButton text="Dinheiro" variant="money" />
        </div>
      </CheckoutOrderCard>
    </CheckoutSection>
  )
}
