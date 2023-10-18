class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        clearInterval(this.intervalId)
      }
    }, 1000)
      

    
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime /100/60;
    let currentMinutes = Math.floor(minutes, Math.random())
    return currentMinutes

  }

  getSeconds() {
    // ... your code goes here
  //  let seconds = this.intervalId % 60;
  //  let currentSeconds = Math.floor(seconds, Math.random())
  //  return currentSeconds
  //}
  let seconds = this.currentTime;
  if(this.currentTime === 0){
    return 0
  } 
  return seconds %60
}

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let i = value;
    let text = i.toString()
    if(text.length === 1){
      text = "0" + text
    }
  
    return text

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;

  }

  split() {
    // ... your code goes here

  }
}
