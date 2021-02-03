window.onload = function(){
    switchColor();
    nineAM();
    tenAM();
    // elevenAM();
    // twelvePM();
    // onePM();
    // twoPM();
    // threePM();
    // fourPM();
    // fivePM();
   }
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);
  
 
  
  var now = new Date().getHours();
  
  function switchColor() {
    if (now > 9) {
      $("#text9am").addClass("past");
    } else  if (now >= 9 && now < 10) {
      $("#text9am").addClass("present");
    } else if (now > 10){
      $("#text9am").addClass("future");
    }
    if (now > 10) {
      $("#text10am").addClass("past");
    } else  if (now >= 10 && now < 11) {
      $("#text10am").addClass("present");
    } else if (now > 11){
      $("#text10am").addClass("future");
    }
  }

function nineAM() {
    var input_textarea = document.querySelector("#text9am");
    //var input_textarea = $("#text9am");
    var output_div = document.querySelector("#text9am");
    
    $("button").on("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
  }

  function tenAM() {
    var input_textarea2 = document.querySelector("#text10am");
    
    var output_div2 = document.querySelector("#text10am");
    
    $("button").on("click", updateOutput2);
  
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
  }