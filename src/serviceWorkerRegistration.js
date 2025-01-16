// src/serviceWorkerRegistration.js

// This is the "service worker" code that will manage caching and background tasks
// It is registered when your app is loaded to make it a Progressive Web App (PWA)

// You can add any other custom code to manage your service worker here

// Register the service worker
export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        navigator.serviceWorker
          .register(serviceWorkerUrl)
          .then(registration => {
            console.log('Service Worker registered: ', registration);
          })
          .catch(error => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  }
  
  // Unregister the service worker (used for development environments)
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error('Service Worker unregistration failed: ', error);
        });
    }
  }
  