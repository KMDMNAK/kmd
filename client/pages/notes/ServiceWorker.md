[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers?hl=ja)

## 概要
offline状態でもキャッシュを元にweb appを起動したり、
online状態でのパフォーマンスを向上させる。  

Object指向DBとの連携  
____
libraries  
- [workbox](https://developers.google.com/web/tools/workbox)  
    Googleが提供するservice worker用のライブラリ  

    features
    - Precaching
    - Runtime caching
    - Strategies
    - Request routing
    - Background sync
    - Helpful debugging
    - Greater flexibility and feature set than sw-precache and sw-toolbox

# service worker API
Service Workerが制御している状態で、ネットワークへのアクセス（ページ遷移、リソースの取得など）が発生すると、fetchイベントが発火します。
``` js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
```
