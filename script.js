//var hello = document.querySelector("container");

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];  

//$(".container").append("<p>Hello</p>");
var allCont = document.querySelector(".time");
var allEnt = document.querySelector(".entry");
var saveButton = document.querySelector(".saveButton");
// for (var i =0; i < times.length; i++){
    
//     var eachTime = document.createElement("p");
    
//     eachTime.classList.add("hour", "row", "description");
//     eachTime.textContent += times[i];
//     allCont.appendChild(eachTime);
    


// }

for (var i =0; i < times.length; i++){
    
    var time1 = $("<a></a>").addClass("hour container row").text(times[i]);
    $("div.time").append(time1);
    
    var time2 = $("<input type='text'></input>").addClass("row present textarea description").attr('id',"text" + times[i]);
    $("div.entry").append(time2);
    
    var time3 = $("<button></button>").addClass("row saveBtn i").attr('id', times[i]);
    
    $("div.saveButton").append(time3);
    
}
