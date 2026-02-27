<template>
  <section id="pricing" class="py-20 md:py-28 bg-white relative overflow-hidden" aria-label="Planos e preços do OohhFood">
    <div class="absolute inset-0 bg-warm-gradient"></div>
    <div class="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Preços
        </span>
        <h2 class="section-title mb-5">
          Planos que cabem<br class="hidden md:block" />
          <span class="text-gradient">no seu orçamento</span>
        </h2>
        <p class="section-subtitle">
          Escolha o plano ideal para o tamanho do seu negócio. Mude quando quiser.
        </p>
      </div>

      <div 
        class="grid gap-6 md:gap-8 max-w-5xl mx-auto items-start"
        :class="gridCols"
      >
        <PricingCard
          v-for="plano in pricingCards"
          :key="plano.id"
          :name="plano.name"
          :price="plano.price"
          :period="plano.period"
          :description="plano.description"
          :features="plano.features"
          :popular="plano.popular"
          :button-text="plano.buttonText"
          :button-link="plano.buttonLink"
          :is-enterprise="plano.isEnterprise"
        />
      </div>

      <div class="text-center mt-14">
        <p class="text-dark-400 mb-5 text-sm">
          Todos os planos incluem teste gratuito de 30 dias. Sem cartão de crédito.
        </p>
        <a 
          href="https://app.oohhfood.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary !px-10 !py-4 !text-base"
          aria-label="Começar teste grátis de 30 dias do OohhFood"
        >
          Começar Teste Grátis
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Funcionalidade {
  id: number
  slug: string
  nome: string
  descricao: string | null
  ordem: number
}

interface PlanoAPI {
  id: number
  nome: string
  slug: string
  preco_mensal_cents: number
  ordem: number
  funcionalidades: Funcionalidade[]
}

interface PricingCardData {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  buttonText: string
  buttonLink: string
  isEnterprise: boolean
  ordem: number
}

const fallbackPlans: PlanoAPI[] = [
  {
    id: 1,
    nome: 'Oohh Food Básico',
    slug: 'basico',
    preco_mensal_cents: 9790,
    ordem: 1,
    funcionalidades: [
      { id: 1, slug: 'cardapio_digital', nome: 'Cardápio Digital', descricao: 'Cardápio digital e loja online', ordem: 10 },
      { id: 2, slug: 'pdv_balcao', nome: 'Pedidos em Balcão (PDV)', descricao: 'Ponto de venda para pedidos em balcão', ordem: 20 },
      { id: 3, slug: 'cupons', nome: 'Cupons', descricao: 'Sistema de cupons de desconto', ordem: 30 },
      { id: 7, slug: 'cashback_fidelizacao', nome: 'Cashback e Fidelização automatizada', descricao: 'Fidelização e cashback automatizados', ordem: 70 }
    ]
  },
  {
    id: 2,
    nome: 'Oohh Food Profissional',
    slug: 'profissional',
    preco_mensal_cents: 29790,
    ordem: 2,
    funcionalidades: [
      { id: 1, slug: 'cardapio_digital', nome: 'Cardápio Digital', descricao: 'Cardápio digital e loja online', ordem: 10 },
      { id: 2, slug: 'pdv_balcao', nome: 'Pedidos em Balcão (PDV)', descricao: 'Ponto de venda para pedidos em balcão', ordem: 20 },
      { id: 3, slug: 'cupons', nome: 'Cupons', descricao: 'Sistema de cupons de desconto', ordem: 30 },
      { id: 5, slug: 'qr_code_mesas', nome: 'QR Code para mesas', descricao: 'QR Code para pedidos por mesa', ordem: 50 },
      { id: 6, slug: 'app_garcom_comanda', nome: 'Aplicativo para Garçom com Comanda Digital', descricao: 'Comanda digital e app para garçom', ordem: 60 },
      { id: 7, slug: 'cashback_fidelizacao', nome: 'Cashback e Fidelização automatizada', descricao: 'Fidelização e cashback automatizados', ordem: 70 },
      { id: 8, slug: 'recuperador_vendas', nome: 'Recuperador de Vendas', descricao: 'Ferramentas para recuperação de vendas', ordem: 80 },
      { id: 9, slug: 'cadastro_entregadores', nome: 'Cadastro de Entregadores', descricao: 'Gestão de entregadores', ordem: 90 },
      { id: 10, slug: 'frente_caixa', nome: 'Frente de Caixa', descricao: 'Frente de caixa', ordem: 100 },
      { id: 11, slug: 'kds', nome: 'Display para pedidos de cozinha (KDS)', descricao: 'Kitchen Display System', ordem: 110 },
      { id: 12, slug: 'gestor_estoque', nome: 'Gestor de Estoque', descricao: 'Controle de estoque', ordem: 120 }
    ]
  }
]

const { data: planosData, error: planosError } = await useFetch<PlanoAPI[]>('/api/planos', {
  key: 'planos-pricing',
  default: () => fallbackPlans
})

if (planosError.value) {
  console.warn('Falha ao carregar planos da API. Usando fallback local.', planosError.value)
}

const planos = computed(() => {
  return planosData.value && planosData.value.length > 0 ? planosData.value : fallbackPlans
})

const gridCols = computed(() => {
  const count = pricingCards.value.length
  if (count === 1) return 'md:grid-cols-1 max-w-md'
  if (count === 2) return 'md:grid-cols-2 max-w-4xl'
  if (count === 3) return 'md:grid-cols-3'
  return 'md:grid-cols-2 lg:grid-cols-4'
})

const pricingCards = computed<PricingCardData[]>(() => {
  const mapped = planos.value.map((plano) => {
    const isEnterprise = plano.slug === 'enterprise'
    const isPopular = plano.slug === 'profissional'
    const funcionalidades = plano.funcionalidades ?? []
    const featureNames = funcionalidades.map((f) => f.nome).filter(Boolean)
    const planDescription = funcionalidades.find((f) => f.descricao)?.descricao

    return {
      id: plano.id,
      name: plano.nome,
      price: isEnterprise 
        ? 'Sob Consulta' 
        : `R$ ${(plano.preco_mensal_cents / 100).toFixed(2).replace('.', ',')}`,
      period: isEnterprise ? '' : '/mês',
      description: planDescription || descriptionForSlug(plano.slug),
      features: featureNames,
      popular: isPopular,
      buttonText: isEnterprise ? 'Entre em Contato' : 'Escolher Plano',
      buttonLink: isEnterprise 
        ? 'https://wa.me/5511999999999' 
        : 'https://app.oohhfood.com.br/signup',
      isEnterprise,
      ordem: plano.ordem
    }
  })

  return mapped.sort((a, b) => a.ordem - b.ordem)
})

function descriptionForSlug(slug: string): string {
  const descriptions: Record<string, string> = {
    basico: 'Ideal para quem está começando',
    profissional: 'O mais completo para crescer',
    enterprise: 'Para grandes operações'
  }
  return descriptions[slug] || 'Plano sob medida'
}
</script>
