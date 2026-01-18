/**
 * Composable para acessar o tenant (subdomínio) atual
 * Funciona tanto no servidor quanto no cliente
 */
export const useTenant = () => {
  const mainDomain = 'oohhfood.com.br'
  
  // No servidor, tenta pegar do contexto do evento (setado pelo middleware)
  let serverTenant: string | undefined
  try {
    const event = useRequestEvent()
    serverTenant = event?.context?.tenant
  } catch {
    // useRequestEvent() pode não estar disponível em todos os contextos
    serverTenant = undefined
  }

  // No cliente ou servidor, também tenta extrair do host
  const getHost = () => {
    if (process.server) {
      try {
        return useRequestHeader('host') || ''
      } catch {
        return ''
      }
    }
    return typeof window !== 'undefined' ? window.location.host : ''
  }

  const host = getHost()
  
  const tenant = computed(() => {
    // Prioriza o tenant do contexto do servidor (middleware)
    if (serverTenant) {
      return serverTenant
    }

    if (!host) return null

    // Em desenvolvimento com localhost
    if (host.includes('localhost')) {
      const parts = host.split('.')
      if (parts.length >= 2 && parts[0] !== 'localhost' && parts[0] !== 'app' && parts[0] !== 'www') {
        return parts[0]
      }
      return null
    }

    // Em produção, extrai do host
    if (host.includes(mainDomain)) {
      const subdomain = host.replace(`.${mainDomain}`, '').split(':')[0]
      if (subdomain && subdomain !== 'app' && subdomain !== 'www' && subdomain !== '') {
        return subdomain
      }
    }

    return null
  })

  return { 
    tenant,
    // Helper para verificar se é o painel administrativo
    isApp: computed(() => {
      if (!host) return false
      return host.includes('app.') || host.startsWith('app.')
    })
  }
}
