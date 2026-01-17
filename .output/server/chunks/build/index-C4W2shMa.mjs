import { defineComponent, unref, mergeProps, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './composables-CnsiFqwy.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "StructuredData",
  __ssrInlineRender: true,
  setup(__props) {
    const structuredData = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          name: "OohhFood",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
            description: "Teste grátis de 30 dias disponível",
            availability: "https://schema.org/InStock"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1"
          },
          description: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais.",
          url: "https://oohhfood.com.br",
          logo: "https://oohhfood.com.br/logo.png",
          screenshot: "https://oohhfood.com.br/Gemini_Generated_Image_w1gxe3w1gxe3w1gx.png",
          featureList: [
            "PDV Completo",
            "Cardápio Digital",
            "QR Code nas Mesas",
            "Gestão de Mesas",
            "CRM e Fidelização",
            "Campanhas e Cupons",
            "Fluxo da Cozinha",
            "Dashboard Completo",
            "Gestão Completa"
          ],
          provider: {
            "@id": "https://oohhfood.com.br#organization"
          },
          sameAs: [
            "https://app.oohhfood.com.br"
          ]
        },
        {
          "@id": "https://oohhfood.com.br#organization",
          "@type": "Organization",
          name: "Vale Soluções Digitais LTDA",
          legalName: "Vale Soluções Digitais LTDA",
          taxID: "61.712.285/0001-88",
          url: "https://oohhfood.com.br",
          logo: "https://oohhfood.com.br/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            availableLanguage: ["Portuguese", "pt-BR"]
          },
          sameAs: [
            "https://app.oohhfood.com.br"
          ]
        },
        {
          "@type": "WebSite",
          name: "OohhFood",
          url: "https://oohhfood.com.br",
          publisher: {
            "@id": "https://oohhfood.com.br#organization"
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://oohhfood.com.br/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: "https://oohhfood.com.br"
            }
          ]
        }
      ]
    }, null, 2);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<script${ssrRenderAttrs(mergeProps({ type: "application/ld+json" }, _attrs))}>${unref(structuredData) ?? ""}<\/script>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StructuredData.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$6 = Object.assign(_sfc_main$f, { __name: "StructuredData" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ClientLogos",
  __ssrInlineRender: true,
  props: {
    clients: {},
    speed: { default: 30 }
  },
  setup(__props) {
    const props = __props;
    const animationSpeed = computed(() => props.speed);
    const duplicatedClients = computed(() => {
      const base = [...props.clients, ...props.clients, ...props.clients];
      return [...base, ...base, ...base];
    });
    const imageErrors = ref({});
    ref({});
    const getOriginalIndex = (index) => {
      return index % props.clients.length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "client-logos-container" }, _attrs))} data-v-96ec787e><div class="client-logos-wrapper" data-v-96ec787e><div class="client-logos-track" style="${ssrRenderStyle({ animationDuration: `${animationSpeed.value}s` })}" data-v-96ec787e><!--[-->`);
      ssrRenderList(duplicatedClients.value, (client, index) => {
        _push(`<div class="client-logo-item" data-v-96ec787e>`);
        if (client.logo && !imageErrors.value[getOriginalIndex(index)]) {
          _push(`<img${ssrRenderAttr("src", client.logo)}${ssrRenderAttr("alt", `${client.name} - Cliente OohhFood`)} class="client-logo-image" loading="lazy" width="180" height="60" data-v-96ec787e>`);
        } else {
          _push(`<span class="text-gray-400 font-bold text-xs md:text-sm opacity-60 text-center" data-v-96ec787e>${ssrInterpolate(client.name)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClientLogos.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$e, [["__scopeId", "data-v-96ec787e"]]), { __name: "ClientLogos" });
const _imports_0 = publicAssetsURL("/logo.png");
const _imports_1 = publicAssetsURL("/Gemini_Generated_Image_w1gxe3w1gxe3w1gx.png");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const clients = [
      {
        name: "Cliente 1",
        logo: "/logos/logo (3).png"
      },
      {
        name: "Cliente 2",
        logo: "/logos/logo.jpeg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientLogos = __nuxt_component_0$5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden" }, _attrs))} data-v-7e936a21><nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm" data-v-7e936a21><div class="container mx-auto px-4 py-3 md:py-4" data-v-7e936a21><div class="flex items-center justify-between" data-v-7e936a21><div class="flex items-center gap-2 md:gap-3" data-v-7e936a21><img${ssrRenderAttr("src", _imports_0)} alt="OohhFood - Sistema de Gestão para Restaurantes" class="h-8 md:h-14 w-auto object-contain rounded-lg" loading="eager" width="120" height="120" data-v-7e936a21><span class="text-xl md:text-3xl font-bold text-red-600" data-v-7e936a21>OohhFood</span></div><div class="hidden md:flex items-center space-x-6" data-v-7e936a21><a href="#" class="text-gray-700 hover:text-red-600 transition" aria-label="Ir para o início da página" data-v-7e936a21>Início</a><a href="#features" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver funcionalidades do OohhFood" data-v-7e936a21>Funcionalidades</a><a href="#benefits" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver benefícios do OohhFood" data-v-7e936a21>Benefícios</a><a href="#pricing" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver planos e preços" data-v-7e936a21>Preços</a><a href="https://app.oohhfood.com.br/lojas" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver lojas cadastradas no OohhFood (abre em nova aba)" data-v-7e936a21>Lojas</a><a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition" aria-label="Fazer login no OohhFood (abre em nova aba)" data-v-7e936a21> Começar Agora </a></div><button class="md:hidden p-2 text-gray-700 hover:text-red-600 transition" aria-label="Toggle menu" data-v-7e936a21>`);
      if (!mobileMenuOpen.value) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7e936a21><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-7e936a21></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7e936a21><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-7e936a21></path></svg>`);
      }
      _push(`</button></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4" data-v-7e936a21><a href="#" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ir para o início da página" data-v-7e936a21>Início</a><a href="#features" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver funcionalidades do OohhFood" data-v-7e936a21>Funcionalidades</a><a href="#benefits" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver benefícios do OohhFood" data-v-7e936a21>Benefícios</a><a href="#pricing" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver planos e preços" data-v-7e936a21>Preços</a><a href="https://app.oohhfood.com.br/lojas" target="_blank" rel="noopener noreferrer" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver lojas cadastradas no OohhFood (abre em nova aba)" data-v-7e936a21>Lojas</a><a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-center" aria-label="Fazer login no OohhFood (abre em nova aba)" data-v-7e936a21> Começar Agora </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav><div class="relative z-10 container mx-auto px-4 pt-20 pb-8 md:pt-32 md:py-20" data-v-7e936a21><div class="grid md:grid-cols-2 gap-6 md:gap-8 items-center" data-v-7e936a21><div class="space-y-4 md:space-y-6 order-2 md:order-1" data-v-7e936a21><p class="text-xs md:text-sm text-gray-600 font-medium" data-v-7e936a21> Confiado por milhares de profissionais de restaurantes </p><h1 class="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 leading-tight" data-v-7e936a21> A maneira mais inteligente de gerenciar as <span class="text-red-600" data-v-7e936a21>operações do seu restaurante</span></h1><p class="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl" data-v-7e936a21> O OohhFood conecta sua equipe - da cozinha ao atendimento - para que você possa otimizar operações, reduzir desperdícios e tomar decisões baseadas em dados. </p><div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4" data-v-7e936a21><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center" aria-label="Começar teste grátis do OohhFood (abre em nova aba)" data-v-7e936a21> Começar Teste Grátis </a><a href="#features" class="bg-white text-red-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-50 transition border-2 border-red-600 text-center" aria-label="Explorar recursos e funcionalidades do OohhFood" data-v-7e936a21> Explorar Recursos </a></div></div><div class="relative hero-image-container order-1 md:order-2" data-v-7e936a21><div class="absolute inset-0 bg-gradient-to-br from-red-100 via-red-200 to-red-300 hero-gradient-mask" data-v-7e936a21></div><div class="relative z-10 hero-image-wrapper" data-v-7e936a21><img${ssrRenderAttr("src", _imports_1)} alt="Sistema OohhFood - Interface de gestão de restaurante com pedidos, produtos e dashboard" class="hero-image-cut" loading="eager" width="800" height="600" data-v-7e936a21><div class="hidden sm:block absolute top-2 right-2 md:top-4 md:right-4 bg-white rounded-lg shadow-xl p-2 md:p-4 floating-animation-1 max-w-[140px] md:max-w-[200px]" data-v-7e936a21><h3 class="text-xs md:text-sm font-semibold text-gray-900 mb-1 md:mb-2" data-v-7e936a21>Pedidos de Hoje</h3><ul class="space-y-1 md:space-y-2 text-[10px] md:text-xs" data-v-7e936a21><li class="flex items-center justify-between" data-v-7e936a21><span class="text-gray-600 truncate pr-1" data-v-7e936a21>15 Hambúrgueres</span><span class="bg-green-100 text-green-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0" data-v-7e936a21>Enviado</span></li><li class="flex items-center justify-between" data-v-7e936a21><span class="text-gray-600 truncate pr-1" data-v-7e936a21>6 Pastéis</span><span class="bg-yellow-100 text-yellow-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0" data-v-7e936a21>FEITO</span></li><li class="flex items-center justify-between" data-v-7e936a21><span class="text-gray-600 truncate pr-1" data-v-7e936a21>8 Milk Shakes</span><span class="bg-gray-100 text-gray-600 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0" data-v-7e936a21>PENDENTE</span></li></ul></div><div class="hidden sm:block absolute bottom-12 left-2 md:bottom-20 md:left-4 bg-white rounded-lg shadow-xl p-2 md:p-4 floating-animation-2 max-w-[150px] md:max-w-[220px]" data-v-7e936a21><div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3" data-v-7e936a21><svg class="w-4 h-4 md:w-6 md:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7e936a21><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-7e936a21></path></svg><div class="min-w-0" data-v-7e936a21><h3 class="font-bold text-gray-900 text-xs md:text-sm truncate" data-v-7e936a21>Hambúrguer Artesanal</h3><p class="text-[10px] md:text-xs text-gray-500" data-v-7e936a21>Mais vendido</p></div></div><div class="space-y-0.5 md:space-y-1 text-[10px] md:text-xs mb-2 md:mb-3" data-v-7e936a21><div class="flex justify-between text-gray-600" data-v-7e936a21><span class="truncate pr-1" data-v-7e936a21>Pão artesanal</span><span class="font-semibold flex-shrink-0" data-v-7e936a21>R$ 6,39</span></div><div class="flex justify-between text-gray-600" data-v-7e936a21><span class="truncate pr-1" data-v-7e936a21>Carne premium</span><span class="font-semibold flex-shrink-0" data-v-7e936a21>R$ 12,87</span></div><div class="flex justify-between text-gray-600" data-v-7e936a21><span class="truncate pr-1" data-v-7e936a21>Queijo especial</span><span class="font-semibold flex-shrink-0" data-v-7e936a21>R$ 4,50</span></div></div><div class="flex flex-wrap gap-0.5 md:gap-1 mb-1 md:mb-2" data-v-7e936a21><span class="bg-red-100 text-red-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold" data-v-7e936a21>Lactose</span><span class="bg-yellow-100 text-yellow-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold" data-v-7e936a21>Glúten</span><span class="bg-orange-100 text-orange-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold" data-v-7e936a21>Ovo</span></div><div class="pt-1 md:pt-2 border-t border-gray-200" data-v-7e936a21><div class="flex justify-between items-center" data-v-7e936a21><span class="text-[10px] md:text-xs text-gray-600" data-v-7e936a21>Custo total:</span><span class="text-xs md:text-sm font-bold text-red-600" data-v-7e936a21>R$ 23,76</span></div></div></div><div class="hidden md:block absolute top-1/2 right-8 bg-white rounded-lg shadow-xl p-3 floating-animation-3 max-w-[180px]" data-v-7e936a21><div class="flex items-start gap-2" data-v-7e936a21><div class="bg-red-100 rounded-full p-2 flex-shrink-0" data-v-7e936a21><svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7e936a21><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-7e936a21></path></svg></div><div class="flex-1 min-w-0" data-v-7e936a21><p class="text-xs font-semibold text-gray-900 mb-1" data-v-7e936a21>OohhFood</p><p class="text-xs text-gray-600 leading-tight" data-v-7e936a21> O preço dos <span class="font-semibold" data-v-7e936a21>ovos aumentou 10%</span></p></div></div></div></div></div></div></div><div class="relative z-10 border-t border-gray-200 py-6 md:py-12 bg-gray-50" data-v-7e936a21><div class="container mx-auto px-4" data-v-7e936a21><p class="text-center text-xs md:text-base text-gray-600 mb-4 md:mb-8 font-medium" data-v-7e936a21> Confiado por equipes de restaurantes de destaque </p>`);
      _push(ssrRenderComponent(_component_ClientLogos, { clients }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$d, [["__scopeId", "data-v-7e936a21"]]), { __name: "HeroSection" });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group" }, _attrs))}><div class="mb-4 group-hover:scale-110 transition-transform duration-300">`);
      if (__props.icon === "credit-card") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>`);
      } else if (__props.icon === "food") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`);
      } else if (__props.icon === "device-mobile") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`);
      } else if (__props.icon === "table") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`);
      } else if (__props.icon === "users") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else if (__props.icon === "target") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
      } else if (__props.icon === "fire") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>`);
      } else if (__props.icon === "chart-bar") {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
      }
      _push(`</div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$4 = Object.assign(_sfc_main$c, { __name: "FeatureCard" });
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_FeatureCard = __nuxt_component_0$4;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "features",
    class: "py-20 bg-white"
  }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> Funcionalidades Completas </h2><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Tudo que você precisa para gerenciar seu restaurante de forma eficiente e moderna </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">`);
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "credit-card",
    title: "PDV Completo",
    description: "Sistema de ponto de venda intuitivo com carrinho, busca de produtos, descontos e rascunhos de pedidos."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "food",
    title: "Cardápio Digital",
    description: "Loja pública online estilo iFood com carrinho, checkout e múltiplos métodos de pagamento."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "device-mobile",
    title: "QR Code nas Mesas",
    description: "Clientes fazem pedidos direto da mesa através de QR code. Sem necessidade de garçom para anotar."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "table",
    title: "Gestão de Mesas",
    description: "Controle completo de ocupação, status, atribuição de garçom e histórico de pedidos por mesa."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "users",
    title: "CRM e Fidelização",
    description: "Cadastro de clientes, histórico de compras, análise de comportamento e integração com WhatsApp."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "target",
    title: "Campanhas e Cupons",
    description: "Sistema promocional completo com cupons de desconto e promoções automáticas."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "fire",
    title: "Fluxo da Cozinha",
    description: "Visualização de pedidos pendentes, mudança de status e priorização de pedidos."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "chart-bar",
    title: "Dashboard Completo",
    description: "Receita do mês, comparações, produtos mais vendidos, mesas ativas e funcionários online."
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCard, {
    icon: "cog",
    title: "Gestão Completa",
    description: "Produtos, categorias, sabores, adicionais, funcionários, horários e muito mais."
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]), { __name: "FeaturesSection" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BenefitItem",
  __ssrInlineRender: true,
  props: {
    number: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start space-x-4" }, _attrs))}><div class="flex-shrink-0"><div class="bg-red-600 text-white rounded-lg w-16 h-16 flex items-center justify-center font-bold text-xl">${ssrInterpolate(__props.number)}</div></div><div><h3 class="text-2xl font-bold text-gray-900 mb-2">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BenefitItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$3 = Object.assign(_sfc_main$a, { __name: "BenefitItem" });
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_BenefitItem = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "benefits",
    class: "py-20 bg-gray-50"
  }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> Por que escolher o OohhFood? </h2><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Benefícios reais para o seu negócio </p></div><div class="grid md:grid-cols-2 gap-12 items-center"><div class="space-y-8">`);
  _push(ssrRenderComponent(_component_BenefitItem, {
    number: "01",
    title: "Aumente suas Vendas",
    description: "Cardápio digital e QR code nas mesas permitem que clientes façam pedidos a qualquer momento, aumentando o ticket médio."
  }, null, _parent));
  _push(ssrRenderComponent(_component_BenefitItem, {
    number: "02",
    title: "Reduza Erros",
    description: "Pedidos diretos do cliente reduzem erros de comunicação e aumentam a satisfação."
  }, null, _parent));
  _push(ssrRenderComponent(_component_BenefitItem, {
    number: "03",
    title: "Economize Tempo",
    description: "Automatize processos e foque no que realmente importa: atender bem seus clientes."
  }, null, _parent));
  _push(ssrRenderComponent(_component_BenefitItem, {
    number: "04",
    title: "Dados em Tempo Real",
    description: "Dashboard completo com métricas importantes para tomar decisões baseadas em dados."
  }, null, _parent));
  _push(`</div><div class="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-2xl"><div class="space-y-6"><div class="flex items-center space-x-4"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg><div><div class="text-4xl font-bold">+35%</div><div class="text-red-100">Aumento médio no ticket</div></div></div><div class="flex items-center space-x-4"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div><div class="text-4xl font-bold">-50%</div><div class="text-red-100">Redução no tempo de atendimento</div></div></div><div class="flex items-center space-x-4"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><div><div class="text-4xl font-bold">4.8/5</div><div class="text-red-100">Satisfação dos clientes</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BenefitsSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]), { __name: "BenefitsSection" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "StepCard",
  __ssrInlineRender: true,
  props: {
    step: {},
    title: {},
    description: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center relative" }, _attrs))}><div class="mx-auto mb-6 text-4xl">${ssrInterpolate(__props.icon)}</div><div class="absolute top-0 right-0 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">${ssrInterpolate(__props.step)}</div><h3 class="text-2xl font-bold text-gray-900 mb-3">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StepCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$8, { __name: "StepCard" });
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_StepCard = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-white" }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> Como Funciona </h2><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Em poucos passos, seu restaurante estará digitalizado </p></div><div class="max-w-4xl mx-auto"><div class="grid md:grid-cols-3 gap-8">`);
  _push(ssrRenderComponent(_component_StepCard, {
    step: "1",
    title: "Cadastre-se",
    description: "Crie sua conta gratuitamente e configure seu estabelecimento em minutos.",
    icon: "📝"
  }, null, _parent));
  _push(ssrRenderComponent(_component_StepCard, {
    step: "2",
    title: "Configure seu Cardápio",
    description: "Adicione produtos, categorias, preços e fotos. É simples e intuitivo.",
    icon: "🍽️"
  }, null, _parent));
  _push(ssrRenderComponent(_component_StepCard, {
    step: "3",
    title: "Comece a Vender",
    description: "Gere QR codes para suas mesas, ative sua loja online e comece a receber pedidos!",
    icon: "🚀"
  }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorksSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]), { __name: "HowItWorksSection" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    price: {},
    period: {},
    description: {},
    features: {},
    popular: { type: Boolean },
    buttonText: { default: "Escolher Plano" },
    buttonLink: { default: "#contact" },
    isEnterprise: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const featuresList = computed(() => {
      return props.features.split(", ").map((f) => f.trim());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2",
          __props.popular ? "border-red-600 scale-105" : "border-gray-200"
        ]
      }, _attrs))}>`);
      if (__props.popular) {
        _push(`<div class="bg-red-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-6 font-semibold"> Mais Popular </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-center mb-8"><h3 class="text-2xl font-bold text-gray-900 mb-2">${ssrInterpolate(__props.name)}</h3><p class="text-gray-600 text-sm mb-4">${ssrInterpolate(__props.description)}</p><div class="flex items-baseline justify-center"><span class="text-5xl font-bold text-gray-900">${ssrInterpolate(__props.price)}</span>`);
      if (__props.period) {
        _push(`<span class="text-gray-600 ml-2">${ssrInterpolate(__props.period)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (!__props.isEnterprise && unref(featuresList).length > 0) {
        _push(`<ul class="space-y-4 mb-8"><!--[-->`);
        ssrRenderList(unref(featuresList), (feature) => {
          _push(`<li class="flex items-start"><svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-gray-700">${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isEnterprise) {
        _push(`<div class="mb-8 text-center"><p class="text-gray-600 leading-relaxed"> Plano totalmente personalizado. Entre em contato e conte-nos o que você precisa. Vamos criar a solução ideal para o seu negócio. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", __props.buttonLink)} class="${ssrRenderClass([
        "block text-center py-3 px-6 rounded-lg font-semibold transition",
        __props.popular ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
      ])}"${ssrRenderAttr("aria-label", `${__props.buttonText} - ${__props.name}`)}>${ssrInterpolate(__props.buttonText)}</a></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "PricingCard" });
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_PricingCard = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "pricing",
    class: "py-20 bg-gray-50"
  }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> Planos que Cabem no seu Orçamento </h2><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Escolha o plano ideal para o tamanho do seu negócio </p></div><div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">`);
  _push(ssrRenderComponent(_component_PricingCard, {
    name: "Oohh Food Básico",
    price: "R$ 97,90",
    period: "mês",
    description: "Ideal para pequenos estabelecimentos",
    features: "Cardápio Digital, Pedidos em Balcão (PDV),  Cupons e Cashback, Frente de Caixa",
    popular: false
  }, null, _parent));
  _push(ssrRenderComponent(_component_PricingCard, {
    name: "Oohh Food Profissional",
    price: "R$ 297,90",
    period: "mês",
    description: "Para restaurantes em crescimento",
    features: "Cardápio Digital, Pedidos em Balcão (PDV), QR Code para mesas, Aplicativo para Garçom com Comanda Digital, Cupons, Cashback e Fidelização automatizada, Recuperador de Vendas, Cadastro de Entregadores, Frente de Caixa, Display para pedidos de cozinha (KDS), Gestor de Estoque,",
    popular: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_PricingCard, {
    name: "Oohh Food Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Solução personalizada para grandes redes",
    features: "",
    popular: false,
    "button-text": "Entre em Contato",
    "button-link": "#contact",
    "is-enterprise": true
  }, null, _parent));
  _push(`</div><div class="text-center mt-12"><p class="text-gray-600 mb-4"> Todos os planos incluem teste gratuito de 30 dias </p><a href="#contact" class="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg" aria-label="Começar teste grátis de 30 dias do OohhFood"> Começar Teste Grátis </a></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]), { __name: "PricingSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    role: {},
    content: {},
    rating: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 rounded-xl p-6 border border-gray-200" }, _attrs))}><div class="flex items-center mb-4"><!--[-->`);
      ssrRenderList(__props.rating, (i) => {
        _push(`<svg class="w-5 h-5 text-yellow-400 fill-current" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
      });
      _push(`<!--]--></div><p class="text-gray-700 mb-6 leading-relaxed italic"> “${ssrInterpolate(__props.content)}” </p><div><div class="font-bold text-gray-900">${ssrInterpolate(__props.name)}</div><div class="text-sm text-gray-600">${ssrInterpolate(__props.role)}</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "TestimonialCard" });
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TestimonialCard = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-white" }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> O que nossos clientes dizem </h2><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Histórias reais de restaurantes que transformaram seus negócios </p></div><div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">`);
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "Maria Silva",
    role: "Proprietária da Pizzaria Bella",
    content: "O OohhFood revolucionou nosso atendimento. Os clientes adoram fazer pedidos pelo QR code e nossa equipe consegue focar no que realmente importa.",
    rating: "{5}"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "João Santos",
    role: "Gerente do Restaurante Sabor & Arte",
    content: "O dashboard nos dá insights valiosos sobre nossos produtos mais vendidos. Conseguimos aumentar nosso ticket médio em 40%!",
    rating: "{5}"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "Ana Costa",
    role: "Dona da Lanchonete Express",
    content: "A loja online foi um divisor de águas. Agora recebemos pedidos de delivery 24/7 e nossa receita aumentou significativamente.",
    rating: "{5}"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "TestimonialsSection" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white"
  }, _attrs))}><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto text-center"><h2 class="text-4xl md:text-5xl font-bold mb-6"> Pronto para Transformar seu Restaurante? </h2><p class="text-xl text-red-100 mb-8"> Comece seu teste gratuito de 30 dias hoje mesmo. Sem cartão de crédito, sem compromisso. </p><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="inline-block bg-yellow-400 text-red-900 px-12 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="Começar teste grátis de 30 dias do OohhFood (abre em nova aba)"> Começar Teste Grátis Agora </a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTASection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "CTASection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-gray-300 py-12" }, _attrs))}><div class="container mx-auto px-4"><div class="grid md:grid-cols-3 gap-8 mb-8"><div><div class="flex items-center gap-2 mb-4"><img${ssrRenderAttr("src", _imports_0)} alt="OohhFood - Sistema de Gestão para Restaurantes" class="h-10 w-auto object-contain rounded-lg" loading="lazy" width="120" height="120"><span class="text-2xl font-bold text-white">OohhFood</span></div><p class="text-gray-400"> Sistema completo de gestão para restaurantes, lanchonetes e delivery. </p></div><div><h4 class="text-white font-semibold mb-4">Produto</h4><ul class="space-y-2"><li><a href="#features" class="hover:text-white transition">Funcionalidades</a></li><li><a href="#benefits" class="hover:text-white transition">Benefícios</a></li><li><a href="#pricing" class="hover:text-white transition">Preços</a></li><li><a href="#contact" class="hover:text-white transition">Contato</a></li></ul></div><div><h4 class="text-white font-semibold mb-4">Legal</h4><ul class="space-y-2"><li><a href="#" class="hover:text-white transition">Termos de Uso</a></li><li><a href="#" class="hover:text-white transition">Política de Privacidade</a></li><li><a href="#" class="hover:text-white transition">Cookies</a></li></ul></div></div><div class="border-t border-gray-800 pt-8 text-center text-gray-400 space-y-2"><p>Um produto Vale Apps © 2025</p><p>© 2025 Vale Soluções Digitais LTDA - 61.712.285/0001-88</p><p>Feito com ❤️ e muito ☕</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "OohhFood - Sistema Completo para Restaurantes",
      meta: [
        {
          name: "description",
          content: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!"
        },
        {
          property: "og:url",
          content: "https://oohhfood.com.br"
        }
      ],
      link: [
        { rel: "canonical", href: "https://oohhfood.com.br" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StructuredData = __nuxt_component_0$6;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FeaturesSection = __nuxt_component_2;
      const _component_BenefitsSection = __nuxt_component_3;
      const _component_HowItWorksSection = __nuxt_component_4;
      const _component_PricingSection = __nuxt_component_5;
      const _component_TestimonialsSection = __nuxt_component_6;
      const _component_CTASection = __nuxt_component_7;
      const _component_AppFooter = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_StructuredData, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_BenefitsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PricingSection, null, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CTASection, null, null, _parent));
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C4W2shMa.mjs.map
