const sampleWorker = new Worker("./sampleWorker.js")
sampleWorker.postMessage("Hi sample worker")
sampleWorker.onmessage = (event) => {
    console.log(event)
    console.log("Message received from sample worker. Message:", event.data)
}