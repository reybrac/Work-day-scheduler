//var hello = document.querySelector("container");

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];  

//$(".container").append("<p>Hello</p>");
var allCont = document.querySelector(".time");
var allEnt = document.querySelector(".entry");
var saveButton = document.querySelector(".saveButton");
for (var i =0; i < times.length; i++){
    
    var eachTime = document.createElement("p");
    
    eachTime.classList.add("hour", "row", "description");
    eachTime.textContent += times[i];
    allCont.appendChild(eachTime);
    
    // var eachEnt = document.createElement("form");
    // //$("p").addClass("hour", "row");
    // eachEnt.classList.add("present", "row", "textarea", "description");
    // //eachEnt.textContent += times[i];
    // allEnt.appendChild(eachEnt);
    
    // var eachButton = document.createElement("button");
    // //var eachImage = document.createElement("i");
    // //eachImage.classList.add("fas fa-save");
    // //$("p").addClass("hour", "row");
    // eachButton.classList.add( "row", "description", "saveBtn", "saveBtn", "saveBtn", "i:hover");
    // //eachButton.textContent = document.createElement("i").classList.add("fas fa-save") + times[i];
    // saveButton.appendChild(eachButton);
    
    //var eachButton = document.createElement("button");

}
//Individual sections to append data
// var allEnt = document.querySelector(".entry");
// for (var i =0; i < times.length; i++){
    
//     var eachEnt = document.createElement("p");
//     //$("p").addClass("hour", "row");
//     eachEnt.classList.add("present", "row");
//     eachEnt.textContent += times[i];
//     allEnt.appendChild(eachEnt);
    
//     //var eachButton = document.createElement("button");

// }


// for (var i =0; i < times.length; i++){
//     var saveButton = document.querySelector(".saveButton");
//     var eachButton = document.createElement("button");
//     var eachImage
//     //$("p").addClass("hour", "row");
//     eachButton.classList.add( "saveBtn", "row");
//     eachButton.textContent = document.createElement("i") + times[i];
//     saveButton.appendChild(eachButton);
    
//     //var eachButton = document.createElement("button");

// }