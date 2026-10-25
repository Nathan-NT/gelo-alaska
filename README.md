# Gelo Alaska — site institucional

React 18 + Vite 5.

## Executar
```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Publicar em geloalaska.com.br
Envie o conteúdo de `dist/` para o servidor (Nginx, Netlify, Cloudflare Pages etc.).
Com Docker + Cloudflare Tunnel: sirva `dist/` com Nginx e aponte o túnel para ele.
A imagem de pré-visualização do WhatsApp (`public/og-gelo-alaska.jpg`) fica em
`https://www.geloalaska.com.br/og-gelo-alaska.jpg` depois da publicação.

## Onde editar
- Mensagens e número do WhatsApp: `src/lib/whatsapp.js`
- Estilos e paleta: `src/styles.css` (variáveis em `:root`)
- Seções: `src/components/`
