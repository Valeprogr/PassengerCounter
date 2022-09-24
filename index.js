//
let countEl = document.getElementById('count-el');
let count = 0;
document.getElementById('increment-btn').onclick = function increment() {
    count++;
    if(count==1){
        countEl.innerText = count + ' person';
    }else{
        countEl.innerText = count + ' persons';
    }
}


let saveEl= document.getElementById('save-el');
document.getElementById('save-btn').onclick = function save() {
   let countStr=(count + ' - ');
    saveEl.textContent += countStr;
   countEl.textContent = 0;
   count = 0;
}
 

