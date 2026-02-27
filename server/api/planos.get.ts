import { defineEventHandler } from 'h3'

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

export default defineEventHandler(async () => {
  return [...fallbackPlans]
})
