const highscores = document.getElementById("highscores");
const clearBtn = document.getElementById("clear");

let keys = Object.keys(localStorage);
let li;
let length  = keys.length;

keys.forEach(()=>{
li = document.createElement("li");
console.log(keys[1]);
li.innerText = `${keys[length -1]} - ${localStorage.getItem(keys[length-1])}`;
highscores.appendChild(li);
length--;
});



clearBtn.addEventListener("click", ()=>{
localStorage.clear();
highscores.removeChild(li);

});
 
