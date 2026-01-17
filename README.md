# OohhFood Landing Page

Landing page moderna e responsiva para o sistema OohhFood - Sistema completo de gestão para restaurantes, lanchonetes e delivery.

## 🚀 Tecnologias

- **Nuxt 4** - Framework Vue.js com SSR
- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utility-first

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Gerar site estático
npm run generate
```

## 🐳 Deploy com Docker

### Build da imagem

```bash
docker build -t oohhfood-lp .
```

### Executar container

```bash
docker run -p 3000:3000 oohhfood-lp
```

### Deploy no Coolify

1. Conecte o repositório GitHub no Coolify
2. O Coolify detectará automaticamente o Dockerfile
3. Configure as variáveis de ambiente se necessário
4. Deploy automático!

## 🎨 Estrutura do Projeto

```
oohhfood-landingpage/
├── assets/
│   └── css/
│       └── main.css          # Estilos globais
├── components/
│   ├── HeroSection.vue       # Seção hero principal
│   ├── FeaturesSection.vue   # Funcionalidades
│   ├── BenefitsSection.vue   # Benefícios
│   ├── HowItWorksSection.vue # Como funciona
│   ├── PricingSection.vue    # Planos e preços
│   ├── TestimonialsSection.vue # Depoimentos
│   ├── CTASection.vue        # Call to action
│   ├── StructuredData.vue     # Schema.org JSON-LD
│   └── AppFooter.vue         # Rodapé
├── layouts/
│   └── default.vue           # Layout padrão
├── pages/
│   └── index.vue             # Página principal
├── public/
│   ├── robots.txt            # Configuração SEO
│   ├── sitemap.xml           # Sitemap
│   └── manifest.json          # PWA manifest
├── app.vue                    # Componente raiz
├── nuxt.config.ts            # Configuração Nuxt
├── tailwind.config.js        # Configuração Tailwind
└── Dockerfile                # Docker para deploy
```

## 🎯 Seções da Landing Page

1. **Hero Section** - Apresentação principal com CTA
2. **Features** - Funcionalidades do sistema
3. **Benefits** - Benefícios e resultados
4. **How It Works** - Processo de implementação
5. **Pricing** - Planos e preços
6. **Testimonials** - Depoimentos de clientes
7. **CTA** - Formulário de contato
8. **Footer** - Links e informações

## 🔍 SEO

O projeto inclui otimizações completas de SEO:

- Meta tags (Open Graph, Twitter Cards)
- Schema.org structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Otimização de imagens
- Acessibilidade (ARIA labels)

Veja mais detalhes em `SEO_OPTIMIZATIONS.md`

## 🎨 Design

A landing page utiliza:
- Tema vermelho (red-600/red-700) alinhado com a identidade do OohhFood
- Design responsivo e mobile-first
- Animações suaves e transições
- Tipografia moderna e legível

## 📝 Variáveis de Ambiente

Para produção, configure:

```env
NODE_ENV=production
```

## 🚀 Deploy

### Coolify

1. Conecte o repositório no Coolify
2. O Dockerfile será detectado automaticamente
3. Configure o domínio (ex: oohhfood.com.br)
4. Deploy!

### Outros serviços

O Dockerfile é compatível com qualquer serviço que suporte Docker:
- Railway
- Render
- Fly.io
- DigitalOcean App Platform
- AWS ECS/Fargate

## 📄 Licença

© 2025 Vale Soluções Digitais LTDA - 61.712.285/0001-88
