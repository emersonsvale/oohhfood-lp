<template>
  <section id="faq" class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="absolute inset-0 bg-warm-gradient"></div>
    <div class="absolute top-0 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Dúvidas Frequentes
        </span>
        <h2 class="section-title mb-5">
          Perguntas <span class="text-gradient">frequentes</span>
        </h2>
        <p class="section-subtitle">
          Tire suas dúvidas sobre o OohhFood e comece a transformar seu restaurante
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="glass-card !rounded-2xl overflow-hidden"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-5 md:p-6 text-left group"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <h3 class="text-base md:text-lg font-display font-bold text-dark-900 pr-4 group-hover:text-brand-600 transition-colors">
              {{ faq.question }}
            </h3>
            <div
              class="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
              :class="openIndex === index ? 'bg-brand-500 rotate-45' : 'bg-dark-50 group-hover:bg-brand-50'"
            >
              <svg
                class="w-4 h-4 transition-colors"
                :class="openIndex === index ? 'text-white' : 'text-dark-400 group-hover:text-brand-500'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
          <Transition name="faq-expand">
            <div
              v-if="openIndex === index"
              :id="`faq-answer-${index}`"
              role="region"
              class="px-5 md:px-6 pb-5 md:pb-6"
            >
              <p class="text-dark-400 leading-relaxed text-sm md:text-base">
                {{ faq.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA inline -->
      <div class="text-center mt-12">
        <p class="text-dark-400 mb-4 text-sm">
          Ainda tem dúvidas? Fale com nossa equipe!
        </p>
        <a
          href="https://app.oohhfood.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary !px-8 !py-3.5"
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
import { ref } from 'vue'

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'O que é o OohhFood e como ele funciona?',
    answer: 'O OohhFood é um sistema completo de gestão para restaurantes, lanchonetes e delivery. Ele reúne PDV (ponto de venda), cardápio digital online, QR Code nas mesas, gestão de mesas, CRM, fidelização de clientes, cupons de desconto, fluxo da cozinha (KDS), dashboard com métricas e muito mais — tudo em uma única plataforma acessível pelo navegador, sem necessidade de instalação.'
  },
  {
    question: 'Quanto custa o OohhFood? Existe teste grátis?',
    answer: 'O OohhFood oferece planos a partir de R$ 97,90/mês, com todas as funcionalidades essenciais incluídas. Todos os planos incluem 30 dias de teste grátis, sem necessidade de cartão de crédito. Você pode começar a usar imediatamente e só pagar quando estiver satisfeito com os resultados.'
  },
  {
    question: 'Preciso instalar algum aplicativo ou programa?',
    answer: 'Não! O OohhFood funciona 100% na nuvem, direto pelo navegador do seu computador, tablet ou celular. Não é necessário instalar nenhum software. Basta acessar o sistema com seus dados de login e começar a usar. Isso também significa que suas informações estão sempre seguras e atualizadas automaticamente.'
  },
  {
    question: 'Como funciona o cardápio digital e o QR Code nas mesas?',
    answer: 'Com o OohhFood, você cria seu cardápio digital completo com fotos, descrições e preços. Seus clientes podem acessar o cardápio online de qualquer lugar e fazer pedidos para delivery. Além disso, você gera QR Codes exclusivos para cada mesa do seu estabelecimento — o cliente escaneia com o celular, visualiza o cardápio e faz o pedido direto da mesa, sem precisar chamar o garçom.'
  },
  {
    question: 'O OohhFood serve para quais tipos de estabelecimentos?',
    answer: 'O OohhFood foi projetado para atender diversos tipos de negócios do setor alimentício: restaurantes, lanchonetes, hamburguerias, pizzarias, cafeterias, padarias, bares, food trucks, docerias, açaiterias e qualquer estabelecimento que trabalhe com food service. O sistema é flexível e se adapta ao seu fluxo de trabalho específico.'
  },
  {
    question: 'Como o OohhFood ajuda a aumentar minhas vendas?',
    answer: 'O OohhFood aumenta suas vendas de várias formas: o cardápio digital permite pedidos 24 horas por dia; o QR Code nas mesas facilita pedidos adicionais (aumentando o ticket médio em até 35%); o sistema de CRM e fidelização mantém clientes voltando; cupons e campanhas promocionais atraem novos clientes; e o dashboard com métricas em tempo real permite tomar decisões baseadas em dados para otimizar seu negócio.'
  },
  {
    question: 'Meus dados estão seguros no OohhFood?',
    answer: 'Sim, a segurança dos dados é nossa prioridade. O OohhFood utiliza infraestrutura de nuvem com criptografia de ponta a ponta, backups automáticos diários e conformidade com a LGPD (Lei Geral de Proteção de Dados). Seus dados e os dados dos seus clientes estão sempre protegidos e disponíveis.'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou fidelidade contratual. Acreditamos que a qualidade do nosso produto é o suficiente para você querer continuar. Durante o período de teste grátis de 30 dias, você não terá nenhuma cobrança.'
  }
]
</script>

<style scoped>
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}
.faq-expand-enter-to,
.faq-expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
