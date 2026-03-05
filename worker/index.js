export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Usa il binding ASSETS definito in wrangler.toml
    if (!env.ASSETS) {
      return new Response('ASSETS binding not configured', { status: 500 });
    }
    
    try {
      // Prova a servire il file richiesto
      let response = await env.ASSETS.fetch(request);
      
      // Se non trovato e non è un file statico, servi index.html
      if (response.status === 404 && !url.pathname.includes('.')) {
        const indexUrl = new URL('/index.html', url.origin);
        response = await env.ASSETS.fetch(indexUrl);
        
        // Assicurati che il content-type sia corretto
        const headers = new Headers(response.headers);
        headers.set('Content-Type', 'text/html;charset=UTF-8');
        
        return new Response(response.body, {
          status: 200,
          headers: headers
        });
      }
      
      return response;
    } catch (error) {
      return new Response('Error: ' + error.message, { status: 500 });
    }
  }
};
