const sampleWorker = new Worker("./sampleWorker.js");
sampleWorker.postMessage("Hi sample worker");
sampleWorker.onmessage = (event) => {
  //console.log(event);
  //console.log("Message received from sample worker. Message:", event.data);
  alert("Calculation finished(web worker) Result: " + event.data);
};

const increaseButtonEl = document.getElementById("btn-increase-count");
const countEl = document.getElementById("count");
const startCalcInWorkerEl = document.getElementById("start-calc-in-worker");
const startCalcInMainThreadEl = document.getElementById("start-calc-in-main-thread");

increaseButtonEl.addEventListener("click", () => {
  const currentCount = Number(countEl.innerText.split(" ").pop());
  const newCountText = "Count " + (currentCount + 1);
  countEl.innerText = newCountText;
});

startCalcInWorkerEl.addEventListener("click", () => {
  sampleWorker.postMessage("START_CALCULATION");
});

startCalcInMainThreadEl.addEventListener("click", () => {
    let res = 0;
    for(let i = 0; i < 1000000000; i++){
        res += i;
    }
    alert("Calculation finished(main thread) Result: " + res);
})
