# Logos dos Clientes

Esta pasta contém os logos dos clientes que aparecem na seção "Confiado por" da landing page.

## Como adicionar logos

1. **Coloque os arquivos de logo nesta pasta** (`public/logos/`)
2. **Nomeie os arquivos conforme os nomes definidos** no componente `HeroSection.vue`:
   - `mentor.png` (ou .jpg, .svg, .webp)
   - `bricktown.png`
   - `citrin.png`
   - `omni.png`
   - `four-seasons.png`
   - `spoon-stable.png`

## Formatos suportados

- PNG (recomendado)
- JPG/JPEG
- SVG
- WebP

## Tamanho recomendado

- **Largura:** 150-200px
- **Altura:** 40-60px
- **Formato:** Horizontal (landscape)
- **Fundo:** Transparente (PNG com transparência) ou branco

## Adicionar novos clientes

Para adicionar um novo cliente:

1. Adicione o logo na pasta `public/logos/`
2. Edite o arquivo `components/HeroSection.vue`
3. Adicione um novo item no array `clients`:

```typescript
{
  name: 'NOME_DO_CLIENTE',
  logo: '/logos/nome-do-arquivo.png'
}
```

## Comportamento

- Se o logo existir, será exibido automaticamente
- Se o logo não existir, será exibido o nome do cliente em texto
- Os logos têm efeito hover (ficam coloridos ao passar o mouse)
- Os logos são exibidos em escala de cinza por padrão
