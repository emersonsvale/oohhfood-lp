export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host') || ''
  const hostWithoutPort = host.split(':')[0]
  const mainDomain = 'oohhfood.com.br'
  
  if (!hostWithoutPort) {
    return
  }

  // Em desenvolvimento, permite subdomínio local como loja.localhost:3000
  if (hostWithoutPort.includes('localhost')) {
    const parts = hostWithoutPort.split('.')
    if (parts.length >= 2 && parts[0] !== 'localhost' && parts[0] !== 'app' && parts[0] !== 'www') {
      event.context.tenant = parts[0]
    }
    return
  }

  // Ignora domínio principal sem subdomínio
  if (hostWithoutPort === mainDomain || hostWithoutPort === `www.${mainDomain}`) {
    return
  }

  // Extrai subdomínio apenas quando o host realmente termina com o domínio principal
  if (!hostWithoutPort.endsWith(`.${mainDomain}`)) {
    return
  }

  const subdomain = hostWithoutPort.replace(`.${mainDomain}`, '')

  // Se o subdomínio existe e não é 'app' ou 'www', define como tenant
  if (subdomain && subdomain !== 'app' && subdomain !== 'www' && subdomain !== '') {
    // Adiciona o tenant ao contexto do H3
    event.context.tenant = subdomain
  }
})
