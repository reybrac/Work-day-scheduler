window.onload = function(){
    switchColor();
    nineAM();
    // tenAM();
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
    }
  }

function nineAM() {
    var input_textarea = document.querySelector("#text9am");
    var output_div = document.querySelector("#text9am");
    var save_button = document.querySelector("#button9am");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
  }