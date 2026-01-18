# Configuração de Variáveis de Ambiente

## Supabase Configuration

Para usar o Supabase no projeto, você precisa configurar as seguintes variáveis de ambiente.

### Criar arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
# Supabase Configuration
# Projeto: oohhfood (baexcsepiwkdlkitfcaf)
# URL: https://baexcsepiwkdlkitfcaf.supabase.co

# URL do projeto Supabase
SUPABASE_URL=https://baexcsepiwkdlkitfcaf.supabase.co

# Chave anônima (anon/public key) - Pode ser exposta no cliente
# Encontre em: Supabase Dashboard > Settings > API > anon public key
SUPABASE_ANON_KEY=sua_chave_anon_aqui

# Chave de serviço (service_role key) - NUNCA exponha no cliente!
# Use apenas em server-side code
# Encontre em: Supabase Dashboard > Settings > API > service_role key
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui
```

### Como obter as chaves

1. Acesse o [Supabase Dashboard](https://app.supabase.com)
2. Selecione o projeto `oohhfood` (baexcsepiwkdlkitfcaf)
3. Vá em **Settings** > **API**
4. Copie a **anon public** key para `SUPABASE_ANON_KEY`
5. Copie a **service_role** key para `SUPABASE_SERVICE_ROLE_KEY` (se necessário para operações server-side)

### Importante

- A chave `SUPABASE_ANON_KEY` é segura para ser exposta no cliente (já está no código público)
- A chave `SUPABASE_SERVICE_ROLE_KEY` **NUNCA** deve ser exposta no cliente. Use apenas em:
  - Server middleware
  - Server API routes
  - Server plugins

### Estrutura da Tabela Esperada

O código espera uma tabela chamada `lojas` com as seguintes colunas (ajuste conforme necessário):

- `slug` ou `subdomain`: string - O subdomínio da loja (ex: "feijoludelivery")
- `nome` ou `name`: string - Nome da loja
- `descricao` ou `description`: string (opcional) - Descrição da loja

Exemplo de estrutura SQL:

```sql
CREATE TABLE lojas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```
