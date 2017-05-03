/**
 * Created by petermares on 03/05/2017.
 */
this.addEventListener('install', (ev) => {
    console.log('[SWK] Service-worker.js file is installed!');
    ev.waitUntil(self.skipWaiting());
});

this.addEventListener('activate', (ev) => {
    console.log('[SWK] Service-worker.js activated!');
    ev.waitUntil(self.clients.claim());
    setTimeout(createNotification, 5000);
})

this.addEventListener('fetch', (ev) => {
    console.log("[SWK] fetch handled:");
    console.log(ev);
})

function createNotification(title, options, visibilityPeriod, onclick) {
    console.log('Creating notification');
    console.log(this.ServiceWorkerRegistration);
    this.registration.showNotification('Vibration Sample', {
        body: 'Buzz! Buzz!',
        // icon: '../images/touch/chrome-touch-icon-192x192.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample'
    });
}