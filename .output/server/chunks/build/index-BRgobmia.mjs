import { defineComponent, withAsyncContext, computed, toValue, getCurrentInstance, onServerPrefetch, mergeProps, ref, unref, shallowRef, toRef, nextTick, reactive, useSSRContext, createElementBlock, provide, cloneVNode, h } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead, d as useRuntimeConfig, a as useNuxtApp, b as asyncDataDefaults, _ as _export_sfc, c as createError, f as fetchDefaults } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { C as getRequestHeader, D as hash } from '../_/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { createClient } from '@supabase/supabase-js';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

const siteUrl = "https://oohhfood.com.br";
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "StructuredData",
  __ssrInlineRender: true,
  setup(__props) {
    const faqItems = [
      {
        question: "O que é o OohhFood e como ele funciona?",
        answer: "O OohhFood é um sistema completo de gestão para restaurantes, lanchonetes e delivery. Ele reúne PDV (ponto de venda), cardápio digital online, QR Code nas mesas, gestão de mesas, CRM, fidelização de clientes, cupons de desconto, fluxo da cozinha (KDS), dashboard com métricas e muito mais — tudo em uma única plataforma acessível pelo navegador, sem necessidade de instalação."
      },
      {
        question: "Quanto custa o OohhFood? Existe teste grátis?",
        answer: "O OohhFood oferece planos a partir de R$ 97,90/mês, com todas as funcionalidades essenciais incluídas. Todos os planos incluem 30 dias de teste grátis, sem necessidade de cartão de crédito."
      },
      {
        question: "Preciso instalar algum aplicativo ou programa?",
        answer: "Não! O OohhFood funciona 100% na nuvem, direto pelo navegador do seu computador, tablet ou celular. Não é necessário instalar nenhum software."
      },
      {
        question: "Como funciona o cardápio digital e o QR Code nas mesas?",
        answer: "Com o OohhFood, você cria seu cardápio digital completo com fotos, descrições e preços. Seus clientes acessam o cardápio online de qualquer lugar. Além disso, você gera QR Codes exclusivos para cada mesa — o cliente escaneia, visualiza o cardápio e faz o pedido direto da mesa."
      },
      {
        question: "O OohhFood serve para quais tipos de estabelecimentos?",
        answer: "O OohhFood atende restaurantes, lanchonetes, hamburguerias, pizzarias, cafeterias, padarias, bares, food trucks, docerias, açaiterias e qualquer estabelecimento de food service."
      },
      {
        question: "Como o OohhFood ajuda a aumentar minhas vendas?",
        answer: "Cardápio digital permite pedidos 24h; QR Code nas mesas aumenta o ticket médio em até 35%; CRM e fidelização mantêm clientes voltando; cupons e campanhas atraem novos clientes; dashboard com métricas permite decisões baseadas em dados."
      },
      {
        question: "Meus dados estão seguros no OohhFood?",
        answer: "Sim. O OohhFood utiliza infraestrutura de nuvem com criptografia de ponta a ponta, backups automáticos diários e conformidade com a LGPD (Lei Geral de Proteção de Dados)."
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou fidelidade contratual. Durante o teste grátis de 30 dias, não há nenhuma cobrança."
      }
    ];
    const structuredData = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        // === Organization ===
        {
          "@id": `${siteUrl}#organization`,
          "@type": "Organization",
          name: "Vale Soluções Digitais LTDA",
          legalName: "Vale Soluções Digitais LTDA",
          taxID: "61.712.285/0001-88",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`,
            width: 512,
            height: 512
          },
          image: `${siteUrl}/og-image.png`,
          description: "Empresa brasileira especializada em soluções digitais para o setor de food service. Desenvolvedora do OohhFood, sistema completo de gestão para restaurantes.",
          foundingDate: "2023",
          areaServed: {
            "@type": "Country",
            name: "Brasil",
            sameAs: "https://www.wikidata.org/wiki/Q155"
          },
          knowsLanguage: ["pt-BR"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["Portuguese"],
              url: `${siteUrl}/#contact`
            },
            {
              "@type": "ContactPoint",
              contactType: "sales",
              availableLanguage: ["Portuguese"],
              url: "https://app.oohhfood.com.br/signup"
            }
          ],
          sameAs: [
            "https://app.oohhfood.com.br"
          ]
        },
        // === WebSite ===
        {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          name: "OohhFood",
          alternateName: "Oohh Food",
          url: siteUrl,
          description: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, QR Code nas mesas, CRM e muito mais.",
          inLanguage: "pt-BR",
          publisher: {
            "@id": `${siteUrl}#organization`
          },
          copyrightHolder: {
            "@id": `${siteUrl}#organization`
          }
        },
        // === WebPage ===
        {
          "@type": "WebPage",
          "@id": `${siteUrl}#webpage`,
          url: siteUrl,
          name: "OohhFood - Sistema Completo para Restaurantes | PDV, Cardápio Digital e Gestão",
          description: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!",
          isPartOf: {
            "@id": `${siteUrl}#website`
          },
          about: {
            "@id": `${siteUrl}#software`
          },
          inLanguage: "pt-BR",
          datePublished: "2024-01-01",
          dateModified: "2026-02-26",
          breadcrumb: {
            "@id": `${siteUrl}#breadcrumb`
          }
        },
        // === SoftwareApplication ===
        {
          "@id": `${siteUrl}#software`,
          "@type": "SoftwareApplication",
          name: "OohhFood",
          alternateName: ["Oohh Food", "OohhFood Sistema para Restaurantes"],
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Restaurant Management Software",
          operatingSystem: "Web Browser",
          offers: [
            {
              "@type": "Offer",
              name: "Oohh Food Básico",
              price: "97.90",
              priceCurrency: "BRL",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://app.oohhfood.com.br/signup",
              description: "Plano básico com cardápio digital, PDV, cupons e fidelização"
            },
            {
              "@type": "Offer",
              name: "Oohh Food Profissional",
              price: "297.90",
              priceCurrency: "BRL",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://app.oohhfood.com.br/signup",
              description: "Plano profissional completo com QR Code, KDS, gestão de estoque e muito mais"
            }
          ],
          description: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas, fluxo de cozinha (KDS), dashboard de métricas, campanhas, cupons e muito mais. Ideal para hamburguerias, pizzarias, cafeterias, padarias, bares e food trucks.",
          url: siteUrl,
          downloadUrl: "https://app.oohhfood.com.br/signup",
          logo: `${siteUrl}/logo.png`,
          screenshot: `${siteUrl}/sistema-gestao-restaurante-oohhfood.png`,
          featureList: [
            "PDV Completo para Restaurantes",
            "Cardápio Digital Online",
            "QR Code para Pedidos nas Mesas",
            "Gestão de Mesas e Ocupação",
            "CRM e Fidelização de Clientes",
            "Campanhas Promocionais e Cupons",
            "Fluxo da Cozinha (KDS)",
            "Dashboard com Métricas em Tempo Real",
            "Gestão Completa de Produtos e Estoque",
            "Cashback e Programa de Fidelidade",
            "App para Garçom com Comanda Digital",
            "Frente de Caixa"
          ],
          softwareHelp: {
            "@type": "WebPage",
            url: `${siteUrl}/#faq`
          },
          provider: {
            "@id": `${siteUrl}#organization`
          },
          creator: {
            "@id": `${siteUrl}#organization`
          },
          sameAs: [
            "https://app.oohhfood.com.br"
          ]
        },
        // === BreadcrumbList ===
        {
          "@id": `${siteUrl}#breadcrumb`,
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: siteUrl
            }
          ]
        },
        // === FAQPage ===
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}#faq`,
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          })),
          isPartOf: {
            "@id": `${siteUrl}#webpage`
          }
        }
      ]
    }, null, 2);
    useHead({
      __dangerouslyDisableSanitizersByTagID: {
        "ld-json-oohhfood": ["innerHTML"]
      },
      script: [
        {
          id: "ld-json-oohhfood",
          type: "application/ld+json",
          innerHTML: structuredData
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "hidden",
        "aria-hidden": "true"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StructuredData.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$6 = Object.assign(_sfc_main$g, { __name: "StructuredData" });
const _sfc_main$f = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "client-logos-container" }, _attrs))} data-v-92280280><div class="client-logos-wrapper" data-v-92280280><div class="client-logos-track" style="${ssrRenderStyle({ animationDuration: `${animationSpeed.value}s` })}" data-v-92280280><!--[-->`);
      ssrRenderList(duplicatedClients.value, (client, index) => {
        _push(`<div class="client-logo-item" data-v-92280280>`);
        if (client.logo && !imageErrors.value[getOriginalIndex(index)]) {
          _push(`<img${ssrRenderAttr("src", client.logo)}${ssrRenderAttr("alt", `${client.name} - Cliente OohhFood`)} class="client-logo-image" loading="lazy" width="180" height="60" data-v-92280280>`);
        } else {
          _push(`<span class="text-gray-400 font-bold text-xs md:text-sm opacity-60 text-center" data-v-92280280>${ssrInterpolate(client.name)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClientLogos.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$f, [["__scopeId", "data-v-92280280"]]), { __name: "ClientLogos" });
const _imports_0 = publicAssetsURL("/logo.png");
const _imports_1 = publicAssetsURL("/sistema-gestao-restaurante-oohhfood.png");
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mobileMenuOpen = ref(false);
    const scrolled = ref(false);
    const navLinks = [
      { href: "#", text: "Início", label: "Ir para o início da página" },
      { href: "#features", text: "Funcionalidades", label: "Ver funcionalidades do OohhFood" },
      { href: "#benefits", text: "Benefícios", label: "Ver benefícios do OohhFood" },
      { href: "#pricing", text: "Preços", label: "Ver planos e preços" },
      { href: "#faq", text: "Dúvidas", label: "Ver perguntas frequentes" },
      { href: "https://app.oohhfood.com.br/lojas", text: "Lojas", label: "Ver lojas cadastradas no OohhFood (abre em nova aba)", external: true }
    ];
    const avatarColors = ["bg-brand-500", "bg-warm", "bg-brand-700", "bg-dark-600"];
    const avatarInitials = ["MS", "JR", "AC", "PL"];
    const { data: clientRows } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("hero-client-logos", async () => {
      const data = await $fetch("/api/client-logos");
      return data || [];
    })), __temp = await __temp, __restore(), __temp);
    const clients = computed(() => {
      const rows = clientRows.value || [];
      return rows.map((row, index) => {
        const logo = row.logo?.trim() || "";
        const name = row.name?.trim() || `Cliente ${index + 1}`;
        return { name, logo };
      }).filter((client) => client.logo);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientLogos = __nuxt_component_0$5;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative overflow-hidden bg-dark-900 grain-overlay",
        "aria-label": "O OohhFood é o sistema mais completo para gestão de restaurantes, lanchonetes e delivery no Brasil"
      }, _attrs))} data-v-e20555ea><nav class="${ssrRenderClass([scrolled.value ? "bg-white/90 backdrop-blur-xl shadow-glass border-b border-dark-100" : "bg-transparent", "fixed top-0 left-0 right-0 z-50 transition-all duration-500"])}" aria-label="Navegação principal do OohhFood" data-v-e20555ea><div class="max-w-7xl mx-auto px-5 md:px-8 py-3 md:py-4" data-v-e20555ea><div class="flex items-center justify-between" data-v-e20555ea><a href="#" class="flex items-center gap-2 md:gap-3 group" data-v-e20555ea><img${ssrRenderAttr("src", _imports_0)} alt="OohhFood - Sistema de Gestão para Restaurantes" class="h-8 md:h-12 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" loading="eager" width="120" height="120" data-v-e20555ea><span class="${ssrRenderClass([scrolled.value ? "text-dark-900" : "text-white", "text-xl md:text-2xl font-display font-bold transition-colors duration-300"])}" data-v-e20555ea> Oohh<span class="text-brand-500" data-v-e20555ea>Food</span></span></a><div class="hidden md:flex items-center gap-1" data-v-e20555ea><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)}${ssrRenderAttr("target", link.external ? "_blank" : void 0)}${ssrRenderAttr("rel", link.external ? "noopener noreferrer" : void 0)} class="${ssrRenderClass([scrolled.value ? "text-dark-500 hover:text-dark-900 hover:bg-dark-50" : "text-white/70 hover:text-white hover:bg-white/10", "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"])}"${ssrRenderAttr("aria-label", link.label)} data-v-e20555ea>${ssrInterpolate(link.text)}</a>`);
      });
      _push(`<!--]--><a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="ml-3 btn-primary !py-2.5 !px-5 !text-sm !rounded-xl" aria-label="Fazer login no OohhFood (abre em nova aba)" data-v-e20555ea> Começar Agora <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-e20555ea></path></svg></a></div><button class="${ssrRenderClass([scrolled.value ? "text-dark-700 hover:bg-dark-50" : "text-white/80 hover:bg-white/10", "md:hidden p-2 rounded-xl transition-colors duration-300"])}" aria-label="Toggle menu"${ssrRenderAttr("aria-expanded", mobileMenuOpen.value)} aria-controls="mobile-menu" data-v-e20555ea>`);
      if (!mobileMenuOpen.value) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-e20555ea></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-e20555ea></path></svg>`);
      }
      _push(`</button></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div id="mobile-menu" class="${ssrRenderClass([scrolled.value ? "border-dark-100" : "border-white/10", "md:hidden mt-3 pb-4 space-y-1 border-t pt-4"])}" data-v-e20555ea><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<a${ssrRenderAttr("href", link.href)}${ssrRenderAttr("target", link.external ? "_blank" : void 0)}${ssrRenderAttr("rel", link.external ? "noopener noreferrer" : void 0)} class="${ssrRenderClass([scrolled.value ? "text-dark-600 hover:bg-dark-50" : "text-white/70 hover:bg-white/10", "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"])}"${ssrRenderAttr("aria-label", link.label)} data-v-e20555ea>${ssrInterpolate(link.text)}</a>`);
        });
        _push(`<!--]--><a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="block btn-primary !text-center !text-sm mt-2" aria-label="Fazer login no OohhFood (abre em nova aba)" data-v-e20555ea> Começar Agora </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav><div class="absolute inset-0 mesh-gradient opacity-60" data-v-e20555ea></div><div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" data-v-e20555ea></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-12 md:pt-40 md:pb-20" data-v-e20555ea><div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" data-v-e20555ea><div class="space-y-6 md:space-y-8 order-2 lg:order-1" data-v-e20555ea><div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm" data-v-e20555ea><span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" data-v-e20555ea></span><span class="text-xs md:text-sm text-white/60 font-medium" data-v-e20555ea> +1.000 restaurantes já utilizam </span></div><h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight" data-v-e20555ea> A forma mais inteligente de gerenciar seu <span class="text-gradient" data-v-e20555ea>restaurante</span></h1><p class="text-base md:text-lg text-white/50 leading-relaxed max-w-xl font-light" data-v-e20555ea> Da cozinha ao atendimento — otimize operações, reduza desperdícios e tome decisões baseadas em dados reais. Tudo em uma plataforma. </p><div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2" data-v-e20555ea><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="btn-primary !px-8 !py-4 !text-base !rounded-2xl" aria-label="Começar teste grátis do OohhFood (abre em nova aba)" data-v-e20555ea> Começar Teste Grátis <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-e20555ea></path></svg></a><a href="#features" class="inline-flex items-center justify-center gap-2 font-semibold text-white/70 hover:text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 text-base transition-all duration-300 text-center backdrop-blur-sm" aria-label="Explorar recursos e funcionalidades do OohhFood" data-v-e20555ea> Explorar Recursos </a></div><div class="flex items-center gap-4 pt-2" data-v-e20555ea><div class="flex -space-x-2" data-v-e20555ea><!--[-->`);
      ssrRenderList(avatarColors, (color, i) => {
        _push(`<div class="${ssrRenderClass([color, "w-8 h-8 rounded-full border-2 border-dark-900 flex items-center justify-center text-[10px] font-bold text-white"])}" data-v-e20555ea>${ssrInterpolate(avatarInitials[i])}</div>`);
      });
      _push(`<!--]--></div><div class="text-sm" data-v-e20555ea><div class="flex items-center gap-1" data-v-e20555ea><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<svg class="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-v-e20555ea><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-e20555ea></path></svg>`);
      });
      _push(`<!--]--></div><span class="text-white/40 text-xs" data-v-e20555ea>4.8/5 de 150+ avaliações</span></div></div></div><div class="relative order-1 lg:order-2" data-v-e20555ea><div class="absolute -inset-4 bg-brand-500/10 blur-3xl rounded-full" data-v-e20555ea></div><div class="relative" data-v-e20555ea><div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl" data-v-e20555ea><img${ssrRenderAttr("src", _imports_1)} alt="Sistema OohhFood - Interface de gestão de restaurante mostrando dashboard de pedidos, produtos, mesas e métricas em tempo real" class="w-full h-auto" loading="eager" width="800" height="600" fetchpriority="high" data-v-e20555ea><div class="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" data-v-e20555ea></div></div><div class="hidden sm:block absolute -top-3 -right-3 md:top-4 md:-right-6 bg-white rounded-2xl shadow-glass-lg p-3 md:p-4 floating-1 max-w-[160px] md:max-w-[200px] border border-dark-100" data-v-e20555ea><div class="flex items-center gap-2 mb-2" data-v-e20555ea><div class="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center" data-v-e20555ea><svg class="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-v-e20555ea></path></svg></div><span class="text-xs font-bold text-dark-800" data-v-e20555ea>Pedidos Hoje</span></div><ul class="space-y-1.5 text-[10px] md:text-xs" data-v-e20555ea><li class="flex items-center justify-between gap-2" data-v-e20555ea><span class="text-dark-400 truncate" data-v-e20555ea>15 Hambúrgueres</span><span class="bg-green-50 text-green-600 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0" data-v-e20555ea>Enviado</span></li><li class="flex items-center justify-between gap-2" data-v-e20555ea><span class="text-dark-400 truncate" data-v-e20555ea>6 Pastéis</span><span class="bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0" data-v-e20555ea>Pronto</span></li><li class="flex items-center justify-between gap-2" data-v-e20555ea><span class="text-dark-400 truncate" data-v-e20555ea>8 Milk Shakes</span><span class="bg-dark-50 text-dark-400 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0" data-v-e20555ea>Pendente</span></li></ul></div><div class="hidden sm:block absolute -bottom-3 -left-3 md:bottom-8 md:-left-6 bg-white rounded-2xl shadow-glass-lg p-3 md:p-4 floating-2 max-w-[150px] md:max-w-[180px] border border-dark-100" data-v-e20555ea><div class="flex items-center gap-2 mb-2" data-v-e20555ea><div class="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center" data-v-e20555ea><svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e20555ea><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-v-e20555ea></path></svg></div><span class="text-xs font-bold text-dark-800" data-v-e20555ea>Receita</span></div><div class="text-xl md:text-2xl font-display font-bold text-dark-900" data-v-e20555ea>R$ 4.280</div><div class="flex items-center gap-1 mt-1" data-v-e20555ea><span class="text-[10px] font-bold text-green-500" data-v-e20555ea>+23%</span><span class="text-[10px] text-dark-300" data-v-e20555ea>vs. ontem</span></div></div></div></div></div></div><div class="relative z-10 border-t border-white/5 py-8 md:py-12" data-v-e20555ea><div class="max-w-7xl mx-auto px-5 md:px-8" data-v-e20555ea><p class="text-center text-xs md:text-sm text-white/30 mb-6 md:mb-8 font-medium uppercase tracking-wider" data-v-e20555ea> Confiado por equipes de restaurantes de destaque </p>`);
      _push(ssrRenderComponent(_component_ClientLogos, { clients: clients.value }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$e, [["__scopeId", "data-v-e20555ea"]]), { __name: "HeroSection" });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    const iconColors = {
      "credit-card": { bg: "bg-brand-50", color: "text-brand-500" },
      "food": { bg: "bg-orange-50", color: "text-orange-500" },
      "device-mobile": { bg: "bg-violet-50", color: "text-violet-500" },
      "table": { bg: "bg-blue-50", color: "text-blue-500" },
      "users": { bg: "bg-emerald-50", color: "text-emerald-500" },
      "target": { bg: "bg-pink-50", color: "text-pink-500" },
      "fire": { bg: "bg-amber-50", color: "text-amber-500" },
      "chart-bar": { bg: "bg-cyan-50", color: "text-cyan-500" },
      "cog": { bg: "bg-dark-50", color: "text-dark-500" }
    };
    const iconBgClass = iconColors[props.icon]?.bg || "bg-dark-50";
    const iconColorClass = iconColors[props.icon]?.color || "text-dark-500";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card p-6 md:p-8 h-full group cursor-default" }, _attrs))}><div class="${ssrRenderClass([unref(iconBgClass), "mb-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"])}">`);
      if (__props.icon === "credit-card") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>`);
      } else if (__props.icon === "food") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`);
      } else if (__props.icon === "device-mobile") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`);
      } else if (__props.icon === "table") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`);
      } else if (__props.icon === "users") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else if (__props.icon === "target") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
      } else if (__props.icon === "fire") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>`);
      } else if (__props.icon === "chart-bar") {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`);
      } else {
        _push(`<svg class="${ssrRenderClass([unref(iconColorClass), "w-6 h-6"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
      }
      _push(`</div><h3 class="text-lg md:text-xl font-display font-bold text-dark-800 mb-2 group-hover:text-brand-600 transition-colors duration-300">${ssrInterpolate(__props.title)}</h3><p class="text-dark-400 leading-relaxed text-sm md:text-base">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$4 = Object.assign(_sfc_main$d, { __name: "FeatureCard" });
const _sfc_main$c = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_FeatureCard = __nuxt_component_0$4;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "features",
    class: "py-20 md:py-28 bg-cream relative overflow-hidden",
    "aria-label": "Funcionalidades do sistema OohhFood para restaurantes"
  }, _attrs))}><div class="absolute top-0 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div><div class="absolute bottom-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="text-center mb-14 md:mb-20"><span class="section-label mb-4 inline-flex"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Funcionalidades </span><h2 class="section-title mb-5"> Tudo que seu restaurante<br class="hidden md:block"><span class="text-gradient">precisa em um só lugar</span></h2><p class="section-subtitle"> Do primeiro pedido ao fechamento do caixa — cada funcionalidade foi pensada para simplificar sua operação. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">`);
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$4]]), { __name: "FeaturesSection" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BenefitItem",
  __ssrInlineRender: true,
  props: {
    number: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-5 p-5 rounded-2xl hover:bg-white/60 transition-all duration-400 group" }, _attrs))}><div class="flex-shrink-0"><div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center font-display font-bold text-lg text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-400">${ssrInterpolate(__props.number)}</div></div><div><h3 class="text-xl md:text-2xl font-display font-bold text-dark-800 mb-1.5 group-hover:text-brand-600 transition-colors duration-300">${ssrInterpolate(__props.title)}</h3><p class="text-dark-400 leading-relaxed text-sm md:text-base">${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BenefitItem.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$3 = Object.assign(_sfc_main$b, { __name: "BenefitItem" });
const _sfc_main$a = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_BenefitItem = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "benefits",
    class: "py-20 md:py-28 bg-white relative overflow-hidden",
    "aria-label": "Benefícios do OohhFood para seu restaurante"
  }, _attrs))}><div class="absolute inset-0 bg-warm-gradient"></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="text-center mb-14 md:mb-20"><span class="section-label mb-4 inline-flex"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Benefícios </span><h2 class="section-title mb-5"> Por que escolher o<br class="hidden md:block"><span class="text-gradient">OohhFood?</span></h2><p class="section-subtitle"> Resultados reais que fazem a diferença no seu dia a dia </p></div><div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"><div class="space-y-3">`);
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
  _push(`</div><div class="relative"><div class="absolute -inset-4 bg-brand-500/10 rounded-[2rem] blur-2xl"></div><div class="relative bg-dark-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden grain-overlay"><div class="absolute inset-0 mesh-gradient opacity-40"></div><div class="relative z-10 space-y-8"><div class="flex items-center gap-5 group"><div class="w-14 h-14 rounded-2xl bg-green-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div><div><div class="text-4xl md:text-5xl font-display font-bold">+35%</div><div class="text-white/40 text-sm mt-0.5">Aumento médio no ticket</div></div></div><div class="h-px bg-white/10"></div><div class="flex items-center gap-5 group"><div class="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><div class="text-4xl md:text-5xl font-display font-bold">-50%</div><div class="text-white/40 text-sm mt-0.5">Redução no tempo de atendimento</div></div></div><div class="h-px bg-white/10"></div><div class="flex items-center gap-5 group"><div class="w-14 h-14 rounded-2xl bg-yellow-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><svg class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><div><div class="text-4xl md:text-5xl font-display font-bold">4.8/5</div><div class="text-white/40 text-sm mt-0.5">Satisfação dos clientes</div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BenefitsSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3]]), { __name: "BenefitsSection" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-center glass-card p-8 md:p-10 h-full group" }, _attrs))}><div class="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center font-display font-bold text-sm text-white shadow-lg group-hover:scale-110 transition-transform duration-300">${ssrInterpolate(__props.step)}</div><div class="mx-auto mb-5 text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-400">${ssrInterpolate(__props.icon)}</div><h3 class="text-xl md:text-2xl font-display font-bold text-dark-800 mb-3 group-hover:text-brand-600 transition-colors duration-300">${ssrInterpolate(__props.title)}</h3><p class="text-dark-400 leading-relaxed text-sm md:text-base">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StepCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$9, { __name: "StepCard" });
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_StepCard = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 md:py-28 bg-cream relative overflow-hidden" }, _attrs))}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl"></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="text-center mb-14 md:mb-20"><span class="section-label mb-4 inline-flex"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> Como Funciona </span><h2 class="section-title mb-5"> Comece em <span class="text-gradient">3 passos simples</span></h2><p class="section-subtitle"> Em poucos minutos, seu restaurante estará totalmente digitalizado </p></div><div class="max-w-5xl mx-auto"><div class="hidden md:block absolute left-1/2 top-1/2 w-[60%] h-px bg-gradient-to-r from-brand-200 via-brand-300 to-warm/30 -translate-x-1/2" style="${ssrRenderStyle({ "margin-top": "40px" })}"></div><div class="grid md:grid-cols-3 gap-6 md:gap-8 relative">`);
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorksSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HowItWorksSection" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      if (Array.isArray(props.features)) {
        return props.features.filter(Boolean);
      }
      return props.features.split(",").map((f) => f.trim()).filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative rounded-3xl p-8 md:p-10 h-full transition-all duration-400",
          __props.popular ? "bg-dark-900 text-white ring-2 ring-brand-500/50 scale-[1.02] shadow-glow-lg" : "glass-card"
        ]
      }, _attrs))}>`);
      if (__props.popular) {
        _push(`<div class="absolute -top-4 left-1/2 -translate-x-1/2"><div class="bg-gradient-to-r from-brand-500 to-warm px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg"> Mais Popular </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-center mb-8"><h3 class="${ssrRenderClass([__props.popular ? "text-white" : "text-dark-800", "text-xl md:text-2xl font-display font-bold mb-2"])}">${ssrInterpolate(__props.name)}</h3><p class="${ssrRenderClass([__props.popular ? "text-white/50" : "text-dark-400", "text-sm mb-5"])}">${ssrInterpolate(__props.description)}</p><div class="flex items-baseline justify-center gap-1"><span class="${ssrRenderClass([__props.popular ? "text-white" : "text-dark-900", "text-4xl md:text-5xl font-display font-bold"])}">${ssrInterpolate(__props.price)}</span>`);
      if (__props.period) {
        _push(`<span class="${ssrRenderClass([__props.popular ? "text-white/40" : "text-dark-300", "text-sm"])}">${ssrInterpolate(__props.period)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (!__props.isEnterprise && unref(featuresList).length > 0) {
        _push(`<ul class="space-y-3.5 mb-8"><!--[-->`);
        ssrRenderList(unref(featuresList), (feature) => {
          _push(`<li class="flex items-start gap-3"><div class="${ssrRenderClass([__props.popular ? "bg-brand-500/20" : "bg-green-50", "flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"])}"><svg class="${ssrRenderClass([__props.popular ? "text-brand-400" : "text-green-500", "w-3 h-3"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div><span class="${ssrRenderClass([__props.popular ? "text-white/70" : "text-dark-500", "text-sm"])}">${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isEnterprise) {
        _push(`<div class="mb-8 text-center"><p class="${ssrRenderClass([__props.popular ? "text-white/50" : "text-dark-400", "leading-relaxed text-sm"])}"> Plano totalmente personalizado. Entre em contato e conte-nos o que você precisa. Vamos criar a solução ideal para o seu negócio. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", __props.buttonLink)} class="${ssrRenderClass([
        "block text-center py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5",
        __props.popular ? "bg-gradient-to-r from-brand-500 to-warm text-white shadow-lg hover:shadow-xl" : "bg-dark-900 text-white hover:bg-dark-800 shadow-md hover:shadow-lg"
      ])}"${ssrRenderAttr("aria-label", `${__props.buttonText} - ${__props.name}`)}>${ssrInterpolate(__props.buttonText)}</a></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$7, { __name: "PricingCard" });
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestHeader(header) {
  const event = useRequestEvent();
  return event ? getRequestHeader(event, header) : void 0;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PricingSection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const fallbackPlans = [
      {
        id: 1,
        nome: "Oohh Food Básico",
        slug: "basico",
        preco_mensal_cents: 9790,
        ordem: 1,
        funcionalidades: [
          { id: 1, slug: "cardapio_digital", nome: "Cardápio Digital", descricao: "Cardápio digital e loja online", ordem: 10 },
          { id: 2, slug: "pdv_balcao", nome: "Pedidos em Balcão (PDV)", descricao: "Ponto de venda para pedidos em balcão", ordem: 20 },
          { id: 3, slug: "cupons", nome: "Cupons", descricao: "Sistema de cupons de desconto", ordem: 30 },
          { id: 7, slug: "cashback_fidelizacao", nome: "Cashback e Fidelização automatizada", descricao: "Fidelização e cashback automatizados", ordem: 70 }
        ]
      },
      {
        id: 2,
        nome: "Oohh Food Profissional",
        slug: "profissional",
        preco_mensal_cents: 29790,
        ordem: 2,
        funcionalidades: [
          { id: 1, slug: "cardapio_digital", nome: "Cardápio Digital", descricao: "Cardápio digital e loja online", ordem: 10 },
          { id: 2, slug: "pdv_balcao", nome: "Pedidos em Balcão (PDV)", descricao: "Ponto de venda para pedidos em balcão", ordem: 20 },
          { id: 3, slug: "cupons", nome: "Cupons", descricao: "Sistema de cupons de desconto", ordem: 30 },
          { id: 5, slug: "qr_code_mesas", nome: "QR Code para mesas", descricao: "QR Code para pedidos por mesa", ordem: 50 },
          { id: 6, slug: "app_garcom_comanda", nome: "Aplicativo para Garçom com Comanda Digital", descricao: "Comanda digital e app para garçom", ordem: 60 },
          { id: 7, slug: "cashback_fidelizacao", nome: "Cashback e Fidelização automatizada", descricao: "Fidelização e cashback automatizados", ordem: 70 },
          { id: 8, slug: "recuperador_vendas", nome: "Recuperador de Vendas", descricao: "Ferramentas para recuperação de vendas", ordem: 80 },
          { id: 9, slug: "cadastro_entregadores", nome: "Cadastro de Entregadores", descricao: "Gestão de entregadores", ordem: 90 },
          { id: 10, slug: "frente_caixa", nome: "Frente de Caixa", descricao: "Frente de caixa", ordem: 100 },
          { id: 11, slug: "kds", nome: "Display para pedidos de cozinha (KDS)", descricao: "Kitchen Display System", ordem: 110 },
          { id: 12, slug: "gestor_estoque", nome: "Gestor de Estoque", descricao: "Controle de estoque", ordem: 120 }
        ]
      }
    ];
    const { data: planosData, error: planosError } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/planos", {
      key: "planos-pricing",
      default: () => fallbackPlans
    }, "$w8U7Z3hzXZ")), __temp = await __temp, __restore(), __temp);
    if (planosError.value) {
      console.warn("Falha ao carregar planos da API. Usando fallback local.", planosError.value);
    }
    const planos = computed(() => {
      return planosData.value && planosData.value.length > 0 ? planosData.value : fallbackPlans;
    });
    const gridCols = computed(() => {
      const count = pricingCards.value.length;
      if (count === 1) return "md:grid-cols-1 max-w-md";
      if (count === 2) return "md:grid-cols-2 max-w-4xl";
      if (count === 3) return "md:grid-cols-3";
      return "md:grid-cols-2 lg:grid-cols-4";
    });
    const pricingCards = computed(() => {
      const mapped = planos.value.map((plano) => {
        const isEnterprise = plano.slug === "enterprise";
        const isPopular = plano.slug === "profissional";
        const funcionalidades = plano.funcionalidades ?? [];
        const featureNames = funcionalidades.map((f) => f.nome).filter(Boolean);
        const planDescription = funcionalidades.find((f) => f.descricao)?.descricao;
        return {
          id: plano.id,
          name: plano.nome,
          price: isEnterprise ? "Sob Consulta" : `R$ ${(plano.preco_mensal_cents / 100).toFixed(2).replace(".", ",")}`,
          period: isEnterprise ? "" : "/mês",
          description: planDescription || descriptionForSlug(plano.slug),
          features: featureNames,
          popular: isPopular,
          buttonText: isEnterprise ? "Entre em Contato" : "Escolher Plano",
          buttonLink: isEnterprise ? "https://wa.me/5511999999999" : "https://app.oohhfood.com.br/signup",
          isEnterprise,
          ordem: plano.ordem
        };
      });
      return mapped.sort((a, b) => a.ordem - b.ordem);
    });
    function descriptionForSlug(slug) {
      const descriptions = {
        basico: "Ideal para quem está começando",
        profissional: "O mais completo para crescer",
        enterprise: "Para grandes operações"
      };
      return descriptions[slug] || "Plano sob medida";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PricingCard = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "py-20 md:py-28 bg-white relative overflow-hidden",
        "aria-label": "Planos e preços do OohhFood"
      }, _attrs))}><div class="absolute inset-0 bg-warm-gradient"></div><div class="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="text-center mb-14 md:mb-20"><span class="section-label mb-4 inline-flex"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Preços </span><h2 class="section-title mb-5"> Planos que cabem<br class="hidden md:block"><span class="text-gradient">no seu orçamento</span></h2><p class="section-subtitle"> Escolha o plano ideal para o tamanho do seu negócio. Mude quando quiser. </p></div><div class="${ssrRenderClass([unref(gridCols), "grid gap-6 md:gap-8 max-w-5xl mx-auto items-start"])}"><!--[-->`);
      ssrRenderList(unref(pricingCards), (plano) => {
        _push(ssrRenderComponent(_component_PricingCard, {
          key: plano.id,
          name: plano.name,
          price: plano.price,
          period: plano.period,
          description: plano.description,
          features: plano.features,
          popular: plano.popular,
          "button-text": plano.buttonText,
          "button-link": plano.buttonLink,
          "is-enterprise": plano.isEnterprise
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="text-center mt-14"><p class="text-dark-400 mb-5 text-sm"> Todos os planos incluem teste gratuito de 30 dias. Sem cartão de crédito. </p><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="btn-primary !px-10 !py-4 !text-base" aria-label="Começar teste grátis de 30 dias do OohhFood"> Começar Teste Grátis <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$6, { __name: "PricingSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    role: {},
    content: {},
    rating: {}
  },
  setup(__props) {
    const props = __props;
    const initials = computed(() => {
      return props.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card p-7 md:p-8 h-full flex flex-col group" }, _attrs))}><div class="flex items-center gap-0.5 mb-5"><!--[-->`);
      ssrRenderList(__props.rating, (i) => {
        _push(`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
      });
      _push(`<!--]--></div><p class="text-dark-600 mb-6 leading-relaxed flex-1 text-[0.95rem]"> “${ssrInterpolate(__props.content)}” </p><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">${ssrInterpolate(unref(initials))}</div><div><div class="font-display font-bold text-dark-800 text-sm">${ssrInterpolate(__props.name)}</div><div class="text-xs text-dark-400">${ssrInterpolate(__props.role)}</div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "TestimonialCard" });
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TestimonialCard = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 md:py-28 bg-cream relative overflow-hidden" }, _attrs))}><div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="text-center mb-14 md:mb-20"><span class="section-label mb-4 inline-flex"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> Depoimentos </span><h2 class="section-title mb-5"> O que nossos clientes<br class="hidden md:block"><span class="text-gradient">dizem sobre nós</span></h2><p class="section-subtitle"> Histórias reais de restaurantes que transformaram seus negócios </p></div><div class="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">`);
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "Maria Silva",
    role: "Proprietária da Pizzaria Bella",
    content: "O OohhFood revolucionou nosso atendimento. Os clientes adoram fazer pedidos pelo QR code e nossa equipe consegue focar no que realmente importa.",
    rating: 5
  }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "João Santos",
    role: "Gerente do Restaurante Sabor & Arte",
    content: "O dashboard nos dá insights valiosos sobre nossos produtos mais vendidos. Conseguimos aumentar nosso ticket médio em 40%!",
    rating: 5
  }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialCard, {
    name: "Ana Costa",
    role: "Dona da Lanchonete Express",
    content: "A loja online foi um divisor de águas. Agora recebemos pedidos de delivery 24/7 e nossa receita aumentou significativamente.",
    rating: 5
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "TestimonialsSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FAQSection",
  __ssrInlineRender: true,
  setup(__props) {
    const openIndex = ref(0);
    const faqs = [
      {
        question: "O que é o OohhFood e como ele funciona?",
        answer: "O OohhFood é um sistema completo de gestão para restaurantes, lanchonetes e delivery. Ele reúne PDV (ponto de venda), cardápio digital online, QR Code nas mesas, gestão de mesas, CRM, fidelização de clientes, cupons de desconto, fluxo da cozinha (KDS), dashboard com métricas e muito mais — tudo em uma única plataforma acessível pelo navegador, sem necessidade de instalação."
      },
      {
        question: "Quanto custa o OohhFood? Existe teste grátis?",
        answer: "O OohhFood oferece planos a partir de R$ 97,90/mês, com todas as funcionalidades essenciais incluídas. Todos os planos incluem 30 dias de teste grátis, sem necessidade de cartão de crédito. Você pode começar a usar imediatamente e só pagar quando estiver satisfeito com os resultados."
      },
      {
        question: "Preciso instalar algum aplicativo ou programa?",
        answer: "Não! O OohhFood funciona 100% na nuvem, direto pelo navegador do seu computador, tablet ou celular. Não é necessário instalar nenhum software. Basta acessar o sistema com seus dados de login e começar a usar. Isso também significa que suas informações estão sempre seguras e atualizadas automaticamente."
      },
      {
        question: "Como funciona o cardápio digital e o QR Code nas mesas?",
        answer: "Com o OohhFood, você cria seu cardápio digital completo com fotos, descrições e preços. Seus clientes podem acessar o cardápio online de qualquer lugar e fazer pedidos para delivery. Além disso, você gera QR Codes exclusivos para cada mesa do seu estabelecimento — o cliente escaneia com o celular, visualiza o cardápio e faz o pedido direto da mesa, sem precisar chamar o garçom."
      },
      {
        question: "O OohhFood serve para quais tipos de estabelecimentos?",
        answer: "O OohhFood foi projetado para atender diversos tipos de negócios do setor alimentício: restaurantes, lanchonetes, hamburguerias, pizzarias, cafeterias, padarias, bares, food trucks, docerias, açaiterias e qualquer estabelecimento que trabalhe com food service. O sistema é flexível e se adapta ao seu fluxo de trabalho específico."
      },
      {
        question: "Como o OohhFood ajuda a aumentar minhas vendas?",
        answer: "O OohhFood aumenta suas vendas de várias formas: o cardápio digital permite pedidos 24 horas por dia; o QR Code nas mesas facilita pedidos adicionais (aumentando o ticket médio em até 35%); o sistema de CRM e fidelização mantém clientes voltando; cupons e campanhas promocionais atraem novos clientes; e o dashboard com métricas em tempo real permite tomar decisões baseadas em dados para otimizar seu negócio."
      },
      {
        question: "Meus dados estão seguros no OohhFood?",
        answer: "Sim, a segurança dos dados é nossa prioridade. O OohhFood utiliza infraestrutura de nuvem com criptografia de ponta a ponta, backups automáticos diários e conformidade com a LGPD (Lei Geral de Proteção de Dados). Seus dados e os dados dos seus clientes estão sempre protegidos e disponíveis."
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou fidelidade contratual. Acreditamos que a qualidade do nosso produto é o suficiente para você querer continuar. Durante o período de teste grátis de 30 dias, você não terá nenhuma cobrança."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "py-20 md:py-28 bg-white relative overflow-hidden"
      }, _attrs))} data-v-cf0ed80a><div class="absolute inset-0 bg-warm-gradient" data-v-cf0ed80a></div><div class="absolute top-0 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" data-v-cf0ed80a></div><div class="relative z-10 max-w-4xl mx-auto px-5 md:px-8" data-v-cf0ed80a><div class="text-center mb-14 md:mb-20" data-v-cf0ed80a><span class="section-label mb-4 inline-flex" data-v-cf0ed80a><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cf0ed80a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-cf0ed80a></path></svg> Dúvidas Frequentes </span><h2 class="section-title mb-5" data-v-cf0ed80a> Perguntas <span class="text-gradient" data-v-cf0ed80a>frequentes</span></h2><p class="section-subtitle" data-v-cf0ed80a> Tire suas dúvidas sobre o OohhFood e comece a transformar seu restaurante </p></div><div class="space-y-3" data-v-cf0ed80a><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="glass-card !rounded-2xl overflow-hidden" data-v-cf0ed80a><button class="w-full flex items-center justify-between p-5 md:p-6 text-left group"${ssrRenderAttr("aria-expanded", openIndex.value === index)}${ssrRenderAttr("aria-controls", `faq-answer-${index}`)} data-v-cf0ed80a><h3 class="text-base md:text-lg font-display font-bold text-dark-900 pr-4 group-hover:text-brand-600 transition-colors" data-v-cf0ed80a>${ssrInterpolate(faq.question)}</h3><div class="${ssrRenderClass([openIndex.value === index ? "bg-brand-500 rotate-45" : "bg-dark-50 group-hover:bg-brand-50", "flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"])}" data-v-cf0ed80a><svg class="${ssrRenderClass([openIndex.value === index ? "text-white" : "text-dark-400 group-hover:text-brand-500", "w-4 h-4 transition-colors"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cf0ed80a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-cf0ed80a></path></svg></div></button>`);
        if (openIndex.value === index) {
          _push(`<div${ssrRenderAttr("id", `faq-answer-${index}`)} role="region" class="px-5 md:px-6 pb-5 md:pb-6" data-v-cf0ed80a><p class="text-dark-400 leading-relaxed text-sm md:text-base" data-v-cf0ed80a>${ssrInterpolate(faq.answer)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12" data-v-cf0ed80a><p class="text-dark-400 mb-4 text-sm" data-v-cf0ed80a> Ainda tem dúvidas? Fale com nossa equipe! </p><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="btn-primary !px-8 !py-3.5" aria-label="Começar teste grátis de 30 dias do OohhFood" data-v-cf0ed80a> Começar Teste Grátis <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cf0ed80a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-cf0ed80a></path></svg></a></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-cf0ed80a"]]), { __name: "FAQSection" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "py-20 md:py-28 relative overflow-hidden bg-dark-900 grain-overlay",
    "aria-label": "Comece a usar o OohhFood gratuitamente"
  }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-warm/10 to-brand-600/20 animate-gradient" style="${ssrRenderStyle({ "background-size": "200% 200%", "animation": "gradient-shift 8s ease infinite" })}"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[100px]"></div></div><div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8"><div class="max-w-3xl mx-auto text-center"><h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"> Pronto para transformar<br><span class="text-gradient">seu restaurante?</span></h2><p class="text-lg md:text-xl text-white/40 mb-10 font-light max-w-xl mx-auto"> Comece seu teste gratuito de 30 dias hoje mesmo. Sem cartão de crédito, sem compromisso. </p><a href="https://app.oohhfood.com.br/signup" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white text-dark-900 px-10 py-4 rounded-2xl font-display font-bold text-lg hover:bg-cream hover:scale-105 shadow-2xl transition-all duration-300" aria-label="Começar teste grátis de 30 dias do OohhFood (abre em nova aba)"> Começar Teste Grátis <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTASection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "CTASection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-dark-900 text-dark-300 pt-16 pb-8" }, _attrs))}><div class="max-w-7xl mx-auto px-5 md:px-8"><div class="grid md:grid-cols-3 gap-10 mb-12"><div><a href="#" class="flex items-center gap-2.5 mb-5 group"><img${ssrRenderAttr("src", _imports_0)} alt="OohhFood - Sistema de Gestão para Restaurantes" class="h-10 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" loading="lazy" width="120" height="120"><span class="text-xl font-display font-bold text-white"> Oohh<span class="text-brand-500">Food</span></span></a><p class="text-dark-400 text-sm leading-relaxed max-w-xs"> Sistema completo de gestão para restaurantes, lanchonetes e delivery. Da cozinha ao atendimento. </p></div><div><h4 class="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">Produto</h4><ul class="space-y-2.5"><li><a href="#features" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Funcionalidades</a></li><li><a href="#benefits" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Benefícios</a></li><li><a href="#pricing" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Preços</a></li><li><a href="#faq" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Dúvidas Frequentes</a></li><li><a href="#contact" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Contato</a></li></ul></div><div><h4 class="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4><ul class="space-y-2.5"><li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Termos de Uso</a></li><li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Política de Privacidade</a></li><li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Cookies</a></li></ul></div></div><div class="border-t border-white/5 pt-8"><div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dark-500"><div class="flex flex-col md:flex-row items-center gap-2 md:gap-4"><span>Um produto Vale Apps</span><span class="hidden md:inline">·</span><span>© ${ssrInterpolate(unref(currentYear))} Vale Soluções Digitais LTDA</span><span class="hidden md:inline">·</span><span>61.712.285/0001-88</span></div><span class="text-dark-600">Feito com ❤️ e muito ☕</span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const useTenant = () => {
  const mainDomain = "oohhfood.com.br";
  let serverTenant;
  try {
    const event = useRequestEvent();
    serverTenant = event?.context?.tenant;
  } catch {
    serverTenant = void 0;
  }
  const getHost = () => {
    {
      try {
        return useRequestHeader("host") || "";
      } catch {
        return "";
      }
    }
    return "";
  };
  const host = getHost();
  const hostWithoutPort = host.split(":")[0];
  const tenant = computed(() => {
    if (serverTenant) {
      return serverTenant;
    }
    if (!host) return null;
    if (hostWithoutPort.includes("localhost")) {
      const parts = hostWithoutPort.split(".");
      if (parts.length >= 2 && parts[0] !== "localhost" && parts[0] !== "app" && parts[0] !== "www") {
        return parts[0];
      }
      return null;
    }
    if (hostWithoutPort === mainDomain || hostWithoutPort === `www.${mainDomain}`) {
      return null;
    }
    if (hostWithoutPort.endsWith(`.${mainDomain}`)) {
      const subdomain = hostWithoutPort.replace(`.${mainDomain}`, "");
      if (subdomain && subdomain !== "app" && subdomain !== "www") {
        return subdomain;
      }
    }
    return null;
  });
  return {
    tenant,
    // Helper para verificar se é o painel administrativo
    isApp: computed(() => {
      if (!hostWithoutPort) return false;
      return hostWithoutPort === `app.${mainDomain}` || hostWithoutPort.startsWith("app.");
    })
  };
};
const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl || "https://baexcsepiwkdlkitfcaf.supabase.co";
  const supabaseAnonKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  return {
    supabase
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { tenant, isApp } = useTenant();
    const { supabase } = useSupabase();
    const { data: loja, error: lojaError } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`loja-${tenant.value || "default"}`, async () => {
      if (!tenant.value) {
        return null;
      }
      const { data, error } = await supabase.from("lojas").select("*").eq("slug", tenant.value).single();
      if (error) {
        console.warn(`Loja não encontrada para o tenant: ${tenant.value}`, error);
        return null;
      }
      return data;
    })), __temp = await __temp, __restore(), __temp);
    if (loja.value) {
      useHead({
        title: `${loja.value.nome || loja.value.name || tenant.value} - Cardápio Online`,
        meta: [
          {
            name: "description",
            content: loja.value.descricao || loja.value.description || `Cardápio online de ${loja.value.nome || loja.value.name || tenant.value}`
          },
          {
            property: "og:title",
            content: `${loja.value.nome || loja.value.name || tenant.value} - Cardápio Online`
          },
          {
            property: "og:description",
            content: loja.value.descricao || loja.value.description || `Cardápio online de ${loja.value.nome || loja.value.name || tenant.value}`
          },
          {
            property: "og:url",
            content: `https://${tenant.value}.oohhfood.com.br`
          }
        ],
        link: [
          {
            rel: "canonical",
            href: `https://${tenant.value}.oohhfood.com.br`
          }
        ]
      });
    }
    if (isApp.value) ;
    if (!loja.value) {
      useHead({
        title: tenant.value ? `${tenant.value} - OohhFood` : "OohhFood",
        meta: [
          {
            name: "description",
            content: "Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!"
          },
          {
            property: "og:url",
            content: tenant.value ? `https://${tenant.value}.oohhfood.com.br` : "https://oohhfood.com.br"
          }
        ],
        link: [
          {
            rel: "canonical",
            href: tenant.value ? `https://${tenant.value}.oohhfood.com.br` : "https://oohhfood.com.br"
          }
        ]
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StructuredData = __nuxt_component_0$6;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FeaturesSection = __nuxt_component_2;
      const _component_BenefitsSection = __nuxt_component_3;
      const _component_HowItWorksSection = __nuxt_component_4;
      const _component_PricingSection = __nuxt_component_5;
      const _component_TestimonialsSection = __nuxt_component_6;
      const _component_FAQSection = __nuxt_component_7;
      const _component_CTASection = __nuxt_component_8;
      const _component_AppFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_StructuredData, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<main id="main-content">`);
      _push(ssrRenderComponent(_component_FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_BenefitsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PricingSection, null, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FAQSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CTASection, null, null, _parent));
      _push(`</main>`);
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
//# sourceMappingURL=index-BRgobmia.mjs.map
