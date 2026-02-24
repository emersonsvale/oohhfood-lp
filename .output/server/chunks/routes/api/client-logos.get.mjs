import { c as defineEventHandler, u as useRuntimeConfig } from '../../_/nitro.mjs';
import { createClient } from '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const getValueByKeys = (row, keys) => {
  return keys.map((key) => row[key]).find((value) => typeof value === "string" && value.trim().length > 0);
};
const normalizeLogoUrl = (logo, supabaseUrl) => {
  if (logo.startsWith("http://") || logo.startsWith("https://") || logo.startsWith("/")) {
    return logo;
  }
  if (logo.startsWith("storage/v1/object/public/")) {
    return `${supabaseUrl}/${logo}`;
  }
  return logo;
};
const clientLogos_get = defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl || "https://baexcsepiwkdlkitfcaf.supabase.co";
  const supabaseKey = config.supabaseServiceKey || config.public.supabaseAnonKey || "";
  if (!supabaseKey) {
    return [];
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase.from("empresas").select("*").limit(80);
  if (error) {
    console.warn("Erro ao buscar logos dos clientes (API):", error);
    return [];
  }
  const rows = data || [];
  return rows.map((row, index) => {
    const logo = getValueByKeys(row, ["logo", "logo_url", "imagem", "image_url", "foto", "foto_url", "image", "avatar", "avatar_url"]);
    const name = getValueByKeys(row, ["nome", "name", "razao_social", "titulo", "title"]) || `Cliente ${index + 1}`;
    if (!logo) {
      return null;
    }
    return {
      name: name.trim(),
      logo: normalizeLogoUrl(logo.trim(), supabaseUrl)
    };
  }).filter((client) => Boolean(client == null ? void 0 : client.logo));
});

export { clientLogos_get as default };
//# sourceMappingURL=client-logos.get.mjs.map
