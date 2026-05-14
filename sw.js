// Service worker mínimo — necessário pro Chrome considerar a página instalável
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // pass-through: deixa o navegador fazer a requisição normalmente
});
