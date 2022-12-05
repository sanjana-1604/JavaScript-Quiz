const highscores = document.getElementById("highscores");
const clearBtn = document.getElementById("clear");
let keys = Object.keys(localStorage);
let li;
let length  = keys.length;

keys.forEach(()=>{
li = document.createElement("li");
console.log(keys);
li.innerText = localStorage.getItem(keys[length]);
highscores.appendChild(li);
length--;
});



clearBtn.addEventListener("click", ()=>{
localStorage.clear();
highscores.removeChild(li);

});
 
