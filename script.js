$(document).ready(function(){
    switchColor();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    // onePM();
    // twoPM();
    // threePM();
    // fourPM();
    // fivePM();
   });
  
  
  
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);
  
 
  
  var now = new Date().getHours();
  

// 9am function to set value to local storage and retrieve the information
function nineAM() {
    var input_textarea9 = $("#text9am"); 
    //var input_textarea9 = document.querySelector("#text9am");
    var output_div9 = $("#text9am");
    //var output_div9 = document.querySelector("#text9am");
    
    $("button").on("click", updateOutput9);
    input_textarea9.val(localStorage.getItem("content9")); 
    output_div9.text(localStorage.getItem("content9"));
    //output_div9.textContent = localStorage.getItem("content9");
    //input_textarea9.value = localStorage.getItem("content9");
  
    function updateOutput9() {
      localStorage.setItem("content9", input_textarea9.val());
  
      output_div9.textContent = input_textarea9.val();
    }
  }

  function tenAM() {
    var input_textarea10 = document.querySelector("#text10am");
    
    var output_div10 = document.querySelector("#text10am");
    
    $("button").on("click", updateOutput10);
  
    output_div10.textContent = localStorage.getItem("content10");
    input_textarea10.value = localStorage.getItem("content10");
  
    function updateOutput10() {
      localStorage.setItem("content10", input_textarea10.value);
  
      output_div10.textContent = input_textarea10.value;
    }
  }

  function elevenAM() {
    var input_textarea11 = document.querySelector("#text11am");
    
    var output_div11 = document.querySelector("#text11am");
    
    $("button").on("click", updateOutput11);
  
    output_div11.textContent = localStorage.getItem("content11");
    input_textarea11.value = localStorage.getItem("content11");
  
    function updateOutput11() {
      localStorage.setItem("content11", input_textarea11.value);
  
      output_div11.textContent = input_textarea11.value;
    }
  }

  function twelvePM() {
    var input_textarea12 = document.querySelector("#text12pm");
    
    var output_div12 = document.querySelector("#text12pm");
    
    $("button").on("click", updateOutput12);
  
    output_div12.textContent = localStorage.getItem("content12");
    input_textarea12.value = localStorage.getItem("content12");
  
    function updateOutput12() {
      localStorage.setItem("content12", input_textarea12.value);
  
      output_div12.textContent = input_textarea12.value;
    }
  }






  function switchColor() {
    if (now > 9) {
      $("#text9am").addClass("past");
    } else  if (now >= 9 && now < 10) {
      $("#text9am").addClass("present");
    } else if (now < 9){
      $("#text9am").addClass("future");
    }
    if (now > 10) {
      $("#text10am").addClass("past");
    } else  if (now >= 10 && now < 11) {
      $("#text10am").addClass("present");
    } else if (now < 10){
      $("#text10am").addClass("future");
    }
    if (now > 11) {
      $("#text11am").addClass("past");
    } else  if (now >= 11 && now < 12) {
      $("#text11am").addClass("present");
    } else if (now < 11){
      $("#text11am").addClass("future");
    }
    if (now > 12) {
      $("#text12pm").addClass("past");
    } else  if (now >= 12 && now < 13) {
      $("#text12pm").addClass("present");
    } else if (now < 12){
      $("#text12pm").addClass("future");
    }
  }