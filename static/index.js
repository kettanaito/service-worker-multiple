navigator.serviceWorker.register('./worker1.js').then(() => {
  console.warn('Worker registered!')
})

document.getElementById('btn').addEventListener('click', () => {
  fetch('https://api.github.com')
})
