const worker = new Worker('dedicated-worker.js')

worker.postMessage('Hello worker!')

worker.onmessage = e => {
    console.log('MAIN | New message received:', e.data)
}