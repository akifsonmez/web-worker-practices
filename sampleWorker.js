this.onmessage = ((event) => {
    console.log(event)
    console.log("Message received from main thread: Message:", event.data)
    this.postMessage("Hi main thread");
})