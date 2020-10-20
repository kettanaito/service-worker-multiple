self.addEventListener('install', function () {
  console.log('Attempting to install worker2...')
})

self.addEventListener('fetch', function (event) {
  console.log('[2] [fetch]', event.request.url)
})
