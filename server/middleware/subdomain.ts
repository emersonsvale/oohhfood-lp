export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host') || ''
  const mainDomain = 'oohhfood.com.br'
  
  // Ignora localhost e o domínio principal para testes
  // Em desenvolvimento, você pode usar um subdomínio local como feijoludelivery.localhost:3000
  if (!host || host === mainDomain) {
    // Em desenvolvimento, permite usar subdomínios locais
    if (host.includes('localhost')) {
      const parts = host.split('.')
      if (parts.length >= 2 && parts[0] !== 'localhost' && parts[0] !== 'app' && parts[0] !== 'www') {
        event.context.tenant = parts[0]
      }
    }
    return
  }

  // Remove o domínio principal para extrair o subdomínio
  const subdomain = host.replace(`.${mainDomain}`, '').split(':')[0] // Remove porta se houver

  // Se o subdomínio existe e não é 'app' ou 'www', define como tenant
  if (subdomain && subdomain !== 'app' && subdomain !== 'www' && subdomain !== '') {
    // Adiciona o tenant ao contexto do H3
    event.context.tenant = subdomain
  }
})
