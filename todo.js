const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const timer = document.getElementsByClassName("apk"); 
function addTask(){
     if(inputBox.value===''){
        window.alert("Enter anything inside the field");
     }
     else{
        let li = document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }


     inputBox.value="";
     saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

 let date = document.getElementById("date");
 let t=new Date();
 date.innerHTML=t.getDay()+"/"+t.getMonth()+"/"+t.getFullYear()+"/"+t.getHours()+"/"+t.getMinutes();
 date.appendChild(date);
 saveData();

 
