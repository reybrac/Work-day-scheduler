//var hello = document.querySelector("container");

var times = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];  

//$(".container").append("<p>Hello</p>");
var allCont = document.querySelector(".time");
for (var i =0; i < times.length; i++){
    
    var eachTime = document.createElement("p");
    //$("p").addClass("hour", "row");
    eachTime.classList.add("hour", "row");
    eachTime.textContent += times[i];
    allCont.appendChild(eachTime);
    
    //var eachButton = document.createElement("button");

}

var allEnt = document.querySelector(".entry");
for (var i =0; i < times.length; i++){
    
    var eachEnt = document.createElement("a");
    //$("p").addClass("hour", "row");
    eachEnt.classList.add("present");
    eachEnt += times[i];
    allEnt.appendChild(eachEnt);
    
    //var eachButton = document.createElement("button");

}