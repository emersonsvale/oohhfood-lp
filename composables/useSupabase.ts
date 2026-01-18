import { createClient } from '@supabase/supabase-js'

/**
 * Composable para acessar o cliente Supabase
 * Configura automaticamente as credenciais do projeto oohhfood
 */
export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabaseUrl || 'https://baexcsepiwkdlkitfcaf.supabase.co'
  const supabaseAnonKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

  // Cria o cliente Supabase (singleton)
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  return {
    supabase
  }
}
