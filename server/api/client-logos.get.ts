import { createClient } from '@supabase/supabase-js'

interface ClientRow {
    [key: string]: unknown
}

interface ClientLogo {
    name: string
    logo: string
}

const getValueByKeys = (row: ClientRow, keys: string[]) => {
    return keys
        .map((key) => row[key])
        .find((value): value is string => typeof value === 'string' && value.trim().length > 0)
}

const normalizeLogoUrl = (logo: string, supabaseUrl: string) => {
    if (logo.startsWith('http://') || logo.startsWith('https://') || logo.startsWith('/')) {
        return logo
    }

    if (logo.startsWith('storage/v1/object/public/')) {
        return `${supabaseUrl}/${logo}`
    }

    return logo
}

export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    const supabaseUrl = config.public.supabaseUrl || 'https://baexcsepiwkdlkitfcaf.supabase.co'
    const supabaseKey = config.supabaseServiceKey || config.public.supabaseAnonKey || ''

    if (!supabaseKey) {
        return [] as ClientLogo[]
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
        .from('empresas')
        .select('*')
        .limit(80)

    if (error) {
        console.warn('Erro ao buscar logos dos clientes (API):', error)
        return [] as ClientLogo[]
    }

    const rows = (data || []) as ClientRow[]

    return rows
        .map((row, index) => {
            const logo = getValueByKeys(row, ['logo', 'logo_url', 'imagem', 'image_url', 'foto', 'foto_url', 'image', 'avatar', 'avatar_url'])
            const name = getValueByKeys(row, ['nome', 'name', 'razao_social', 'titulo', 'title']) || `Cliente ${index + 1}`

            if (!logo) {
                return null
            }

            return {
                name: name.trim(),
                logo: normalizeLogoUrl(logo.trim(), supabaseUrl)
            } as ClientLogo
        })
        .filter((client): client is ClientLogo => Boolean(client?.logo))
})
