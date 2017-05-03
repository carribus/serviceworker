/**
 * Created by petermares on 03/05/2017.
 */
this.started = false;

this.addEventListener('install', (ev) => {
    console.log('[SWK] Service-worker.js file is installed!');
    ev.waitUntil(self.skipWaiting());
});

this.addEventListener('activate', (ev) => {
    console.log('[SWK] Service-worker.js activated!');
    ev.waitUntil(self.clients.claim());
    if ( !this.started ) {
        // if you want to see notifications popping up after you closed the tab, just change setTimeout to setInterval
        setTimeout(createNotification, 5000);
        this.started = true;
    }
})

this.addEventListener('fetch', (ev) => {
    console.log("[SWK] fetch handled:");
    console.log(ev);
})

function createNotification(title, options, visibilityPeriod, onclick) {
    console.log('Creating notification');
    this.registration.showNotification('Vibration Sample', {
        body: 'Buzz! Buzz!',
        // icon: '../images/touch/chrome-touch-icon-192x192.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample'
    });
}