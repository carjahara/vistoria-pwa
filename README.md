# Vistoria PWA Wrapper

Wrapper PWA que embute o Web App do Google Apps Script em um iframe e
permite instalação como app real no Android/iOS (com ícone próprio).

## Como hospedar no GitHub Pages

1. Crie um repositório novo no GitHub, ex: `vistoria-pwa` (público OU privado — privado também funciona com Pages se conta for Pro; em conta gratuita precisa ser público)
2. Faça upload de todos esses arquivos para a raiz do repo:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
3. No repositório, vá em **Settings → Pages**
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**
5. Branch: `main` (ou `master`), pasta: `/ (root)` → clique em **Save**
6. Aguarde ~1 min. Sua URL será: `https://<seu-usuário>.github.io/vistoria-pwa/`
7. Abra essa URL no Chrome do Android
8. Toque em ⋮ → **Instalar app** → confirme
9. O ícone do clipboard aparece na tela inicial e o app abre em modo standalone

## Atualização do Web App

Se você mudar a URL do Apps Script (novo deployment), atualize o `src` do
iframe em `index.html`.
