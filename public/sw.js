const cacheName='version-1'
const urlToCache=['index.html','offline.html']

//install sw
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheName)
        .then((cache)=>{
            console.log('Opened cache')

            return cache.addAll(urlToCache)
        })
    )
})
//Listen sw
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=>caches.match('offline.html'))
        })
        
    )
})
//Activate sw
self.addEventListener('activate',(event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(cacheName);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
})