importScripts('worker2.js')

self.addEventListener('install', function () {
  console.log('Attempting to install worker1...')
})

self.addEventListener('fetch', function (event) {
  console.log('[1] [fetch]', event.request.url)
})
