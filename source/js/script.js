let hour=document.querySelector("#hour")
let minute=document.querySelector("#minute")
let seconds=document.querySelector("#seconds")

setInterval(myTimer, 1000);

function myTimer() {
 let d = new Date()

  let nowHour=d.getHours()
  let nowMinute=d.getMinutes()
  let nowSecond=d.getSeconds()

  if(nowHour<10){

    nowHour="0"+nowHour
  }
  
  if(nowMinute<10){

    nowMinute="0"+nowMinute
  }
  
  if(nowSecond<10){

    nowSecond="0"+nowSecond
  }
   
  hour.innerHTML=nowHour
  minute.innerHTML=nowMinute
  seconds.innerHTML=nowSecond
}

