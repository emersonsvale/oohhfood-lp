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
  const hostWithoutPort = host.split(':')[0]
  
  const tenant = computed(() => {
    // Prioriza o tenant do contexto do servidor (middleware)
    if (serverTenant) {
      return serverTenant
    }

    if (!host) return null

    // Em desenvolvimento com localhost
    if (hostWithoutPort.includes('localhost')) {
      const parts = hostWithoutPort.split('.')
      if (parts.length >= 2 && parts[0] !== 'localhost' && parts[0] !== 'app' && parts[0] !== 'www') {
        return parts[0]
      }
      return null
    }

    // Em produção, extrai do host
    if (hostWithoutPort === mainDomain || hostWithoutPort === `www.${mainDomain}`) {
      return null
    }

    if (hostWithoutPort.endsWith(`.${mainDomain}`)) {
      const subdomain = hostWithoutPort.replace(`.${mainDomain}`, '')
      if (subdomain && subdomain !== 'app' && subdomain !== 'www') {
        return subdomain
      }
    }

    return null
  })

  return { 
    tenant,
    // Helper para verificar se é o painel administrativo
    isApp: computed(() => {
      if (!hostWithoutPort) return false
      return hostWithoutPort === `app.${mainDomain}` || hostWithoutPort.startsWith('app.')
    })
  }
}
