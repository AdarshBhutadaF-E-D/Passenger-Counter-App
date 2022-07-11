let Count = 0;
let CountEl = document.getElementById("count");
let SaveEl = document.getElementById("save-el")

function Increment(){
  Count += 1;
  CountEl.textContent = Count;
}

function Save(){
    let countStr = Count + " - ";
    SaveEl.textContent += countStr;
    CountEl.textContent=0;
    Count=0;
}