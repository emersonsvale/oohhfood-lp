# 🚀 Guia de Deploy - OohhFood Landing Page

## Deploy no Coolify

### Passo a Passo

1. **Conecte o Repositório**
   - Acesse seu painel do Coolify
   - Vá em "New Resource" > "Application"
   - Conecte o repositório GitHub: `https://github.com/emersonsvale/oohhfood-lp`

2. **Configuração Automática**
   - O Coolify detectará automaticamente o `Dockerfile`
   - Porta padrão: `3000`
   - Build será executado automaticamente

3. **Variáveis de Ambiente (Opcional)**
   ```
   NODE_ENV=production
   PORT=3000
   HOST=0.0.0.0
   ```

4. **Domínio**
   - Configure o domínio: `oohhfood.com.br`
   - O Coolify configurará SSL automaticamente via Let's Encrypt

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build e deploy completarem
   - Acesse: `https://oohhfood.com.br`

## Build Local (Teste)

### Com Docker

```bash
# Build da imagem
docker build -t oohhfood-lp .

# Executar container
docker run -p 3000:3000 oohhfood-lp
```

### Com Docker Compose

```bash
docker-compose up -d
```

### Build Manual

```bash
# Instalar dependências
npm install

# Build
npm run build

# Preview
npm run preview
```

## Estrutura do Dockerfile

O Dockerfile usa multi-stage build para otimizar o tamanho da imagem:

1. **Stage 1 (deps)**: Instala apenas dependências de produção
2. **Stage 2 (builder)**: Instala todas as dependências e faz o build
3. **Stage 3 (runner)**: Imagem final minimalista com apenas o necessário

## Troubleshooting

### Erro: "Cannot find module"
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para verificar

### Erro: "Port already in use"
- Altere a porta no Coolify ou no docker-compose.yml

### Build lento
- O primeiro build pode demorar devido ao download de dependências
- Builds subsequentes serão mais rápidos devido ao cache

### Health check falhando
- Verifique se a aplicação está respondendo na porta 3000
- Verifique os logs do container

## Monitoramento

Após o deploy, monitore:
- Logs do container no Coolify
- Health checks automáticos
- Performance via métricas do Coolify

## Atualizações

Para atualizar a aplicação:
1. Faça push para o repositório GitHub
2. O Coolify detectará automaticamente (se configurado)
3. Ou clique em "Redeploy" no painel do Coolify
