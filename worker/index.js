import { renderToString } from 'react-dom/server'
import React from 'react'
import App from '../src/App'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    // Serve static assets
    if (url.pathname.startsWith('/assets/')) {
      return env.ASSETS.fetch(request)
    }

    // Server-side render React
    try {
      const html = renderToString(React.createElement(App))
      
      const fullHtml = `
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React on Cloudflare Worker</title>
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>
      `
      
      return new Response(fullHtml, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      })
    } catch (error) {
      return new Response('Error rendering page: ' + error.message, { 
        status: 500 
      })
    }
  }
}