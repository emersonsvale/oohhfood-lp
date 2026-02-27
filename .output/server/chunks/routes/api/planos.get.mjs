import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const fallbackPlans = [
  {
    id: 1,
    nome: "Oohh Food B\xE1sico",
    slug: "basico",
    preco_mensal_cents: 9790,
    ordem: 1,
    funcionalidades: [
      { id: 1, slug: "cardapio_digital", nome: "Card\xE1pio Digital", descricao: "Card\xE1pio digital e loja online", ordem: 10 },
      { id: 2, slug: "pdv_balcao", nome: "Pedidos em Balc\xE3o (PDV)", descricao: "Ponto de venda para pedidos em balc\xE3o", ordem: 20 },
      { id: 3, slug: "cupons", nome: "Cupons", descricao: "Sistema de cupons de desconto", ordem: 30 },
      { id: 7, slug: "cashback_fidelizacao", nome: "Cashback e Fideliza\xE7\xE3o automatizada", descricao: "Fideliza\xE7\xE3o e cashback automatizados", ordem: 70 }
    ]
  },
  {
    id: 2,
    nome: "Oohh Food Profissional",
    slug: "profissional",
    preco_mensal_cents: 29790,
    ordem: 2,
    funcionalidades: [
      { id: 1, slug: "cardapio_digital", nome: "Card\xE1pio Digital", descricao: "Card\xE1pio digital e loja online", ordem: 10 },
      { id: 2, slug: "pdv_balcao", nome: "Pedidos em Balc\xE3o (PDV)", descricao: "Ponto de venda para pedidos em balc\xE3o", ordem: 20 },
      { id: 3, slug: "cupons", nome: "Cupons", descricao: "Sistema de cupons de desconto", ordem: 30 },
      { id: 5, slug: "qr_code_mesas", nome: "QR Code para mesas", descricao: "QR Code para pedidos por mesa", ordem: 50 },
      { id: 6, slug: "app_garcom_comanda", nome: "Aplicativo para Gar\xE7om com Comanda Digital", descricao: "Comanda digital e app para gar\xE7om", ordem: 60 },
      { id: 7, slug: "cashback_fidelizacao", nome: "Cashback e Fideliza\xE7\xE3o automatizada", descricao: "Fideliza\xE7\xE3o e cashback automatizados", ordem: 70 },
      { id: 8, slug: "recuperador_vendas", nome: "Recuperador de Vendas", descricao: "Ferramentas para recupera\xE7\xE3o de vendas", ordem: 80 },
      { id: 9, slug: "cadastro_entregadores", nome: "Cadastro de Entregadores", descricao: "Gest\xE3o de entregadores", ordem: 90 },
      { id: 10, slug: "frente_caixa", nome: "Frente de Caixa", descricao: "Frente de caixa", ordem: 100 },
      { id: 11, slug: "kds", nome: "Display para pedidos de cozinha (KDS)", descricao: "Kitchen Display System", ordem: 110 },
      { id: 12, slug: "gestor_estoque", nome: "Gestor de Estoque", descricao: "Controle de estoque", ordem: 120 }
    ]
  }
];
const planos_get = defineEventHandler(async () => {
  return [...fallbackPlans];
});

export { planos_get as default };
//# sourceMappingURL=planos.get.mjs.map
