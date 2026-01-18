# Configuração de Subdomínios - Multi-tenancy

Este projeto suporta acesso via subdomínios para diferentes lojas.

## Como Funciona

- **Landing page padrão**: `oohhfood.com.br` ou `www.oohhfood.com.br`
- **Painel administrativo**: `app.oohhfood.com.br`
- **Lojas**: `[slug].oohhfood.com.br` (ex: `feijoludelivery.oohhfood.com.br`)

## Estrutura Criada

### 1. Middleware de Servidor (`server/middleware/subdomain.ts`)
Detecta o subdomínio antes da página renderizar e adiciona ao contexto do evento H3.

### 2. Composable (`composables/useTenant.ts`)
Permite acessar o tenant atual em qualquer componente:

```vue
<script setup>
const { tenant, isApp } = useTenant()

// tenant.value será 'feijoludelivery' se acessar feijoludelivery.oohhfood.com.br
// isApp.value será true se acessar app.oohhfood.com.br
</script>
```

### 3. Tipos TypeScript (`types/h3.d.ts`)
Adiciona o tipo `tenant` ao contexto do H3 para suporte completo ao TypeScript.

## Uso com Supabase

O Supabase já está configurado! Use o tenant assim:

```typescript
const { tenant } = useTenant()
const { supabase } = useSupabase()

if (tenant.value) {
  const { data: loja } = await supabase
    .from('lojas')
    .select('*')
    .eq('slug', tenant.value) // ou 'subdomain' dependendo da sua coluna
    .single()
}
```

### Composable useSupabase

O composable `useSupabase()` já está disponível e configurado com o projeto oohhfood (baexcsepiwkdlkitfcaf).

**Importante**: Configure as variáveis de ambiente no arquivo `.env` (veja `ENV_SETUP.md`).

## Desenvolvimento Local

Para testar subdomínios localmente, você pode:

1. **Usar hosts locais**: Edite o arquivo `hosts` do Windows:
   ```
   127.0.0.1 feijoludelivery.localhost
   ```
   E acesse: `http://feijoludelivery.localhost:3000`

2. **Usar variável de ambiente**: Configure uma variável para simular o tenant em desenvolvimento.

## Configuração de DNS

Para produção, configure os registros DNS:

```
*.oohhfood.com.br  A  [IP_DO_SERVIDOR]
oohhfood.com.br     A  [IP_DO_SERVIDOR]
app.oohhfood.com.br A  [IP_DO_SERVIDOR]
```

## Próximos Passos

1. ✅ Configure as variáveis de ambiente no arquivo `.env` (veja `ENV_SETUP.md`)
2. Crie a tabela `lojas` no Supabase com a coluna `slug` ou `subdomain`
3. ✅ O código em `pages/index.vue` já está configurado e funcionando
4. Ajuste as queries conforme sua estrutura de banco de dados (nome da tabela/colunas)

### Estrutura Esperada da Tabela

O código espera uma tabela `lojas` com:
- `slug` ou `subdomain`: string - O subdomínio da loja
- `nome` ou `name`: string - Nome da loja
- `descricao` ou `description`: string (opcional) - Descrição da loja

Veja `ENV_SETUP.md` para mais detalhes sobre a estrutura SQL.
