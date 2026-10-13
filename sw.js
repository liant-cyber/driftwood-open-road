const CACHE='driftwood-v9';
const THREE_MODULE='https://cdn.jsdelivr.net/npm/three@0.182.0/build/three.module.js';
const FILES=['./','./index.html','./style.css','./game.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES).then(()=>cache.add(THREE_MODULE).catch(()=>undefined))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(hit=>hit||fetch(event.request).then(response=>{if(new URL(event.request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>new URL(event.request.url).origin===location.origin?caches.match('./index.html'):Response.error())))});
