export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Ottieni il file dall'asset bucket
    let response = await env.ASSETS.fetch(request);
    
    // Se il file non esiste (404), servi index.html per SPA routing
    if (response.status === 404 && !url.pathname.includes('.')) {
      const indexUrl = new URL('/index.html', request.url);
      response = await env.ASSETS.fetch(indexUrl);
      
      return new Response(response.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'no-cache'
        }
      });
    }
    
    return response;
  }
};
