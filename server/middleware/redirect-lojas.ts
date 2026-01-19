export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host') || ''
  const path = event.path || ''
  const mainDomain = 'oohhfood.com.br'
  
  // Remove a porta do host para comparação
  const hostWithoutPort = host.split(':')[0]
  
  // Verifica se o host é exatamente o domínio principal (sem subdomínio)
  // e se a rota começa com /lojas
  if (hostWithoutPort === mainDomain && path.startsWith('/lojas')) {
    // Constrói a URL de destino mantendo o path completo e query params
    const url = getRequestURL(event)
    const targetUrl = `https://app.${mainDomain}${url.pathname}${url.search}`
    
    // Redireciona com status 301 (permanente) ou 302 (temporário)
    // 301 é melhor para SEO, mas use 302 se for temporário
    return sendRedirect(event, targetUrl, 301)
  }
  
  // Se não for uma rota /lojas no domínio principal, continua normalmente
  return
})
