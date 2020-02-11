onmessage = function(e) {
    console.log('WORKER | New message received:', e.data)
    postMessage('Hi main thread!')
}