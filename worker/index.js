import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      // Prova a servire il file richiesto
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: JSON.parse(env.__STATIC_CONTENT_MANIFEST),
        }
      );
    } catch (e) {
      // Se il file non esiste e non è una risorsa statica, servi index.html
      if (e.status === 404 && !url.pathname.includes('.')) {
        try {
          return await getAssetFromKV(
            {
              request: new Request(`${url.origin}/index.html`, request),
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: JSON.parse(env.__STATIC_CONTENT_MANIFEST),
            }
          );
        } catch (indexError) {
          return new Response('Not Found', { status: 404 });
        }
      }
      
      return new Response(e.message || 'Internal Server Error', { status: e.status || 500 });
    }
  }
};
