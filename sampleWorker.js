this.onmessage = ((event) => {
    //console.log(event)
    //console.log("Message received from main thread: Message:", event.data)
    //this.postMessage("Hi main thread");
    let res = 0;
    for(let i = 0; i < 1000000000; i++){
        res += i;
    }
    this.postMessage(res);
})