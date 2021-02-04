$(document).ready(function(){
    switchColor();
    nineAm();
    tenAm();
    elevenAm();
    twelvePm();
    onePm();
    twoPm();
    threePm();
    fourPm();
    fivePm();
   });
  
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime); 
  var now = new Date().getHours();
  

// 9am function to set value to local storage and retrieve the information
function nineAm() {
    var input_textarea9 = $("#text9am"); 
    var output_div9 = $("#text9am");

    $("button").on("click", updateOutput9);
        output_div9.text(localStorage.getItem("content9"));
        input_textarea9.val(localStorage.getItem("content9")); 
    
  
    function updateOutput9() {
        localStorage.setItem("content9", input_textarea9.val());
        output_div9.textContent = input_textarea9.val();
        //location.reload(); -- was not able to get this to work properly
    }
  }

  // 10am function to set value to local storage and retrieve the information
  function tenAm() {
    var input_textarea10 = $("#text10am");
    var output_div10 = $("#text10am");

    $("button").on("click", updateOutput10);
        output_div10.text(localStorage.getItem("content10"));
        input_textarea10.val(localStorage.getItem("content10"));

    function updateOutput10() {
        localStorage.setItem("content10", input_textarea10.val());
        output_div10.textContent = input_textarea10.val();
    }
  }

// 11am function to set value to local storage and retrieve the information
  function elevenAm() {
    var input_textarea11 = $("#text11am");
    var output_div11 = $("#text11am");
    
    $("button").on("click", updateOutput11);
        output_div11.text(localStorage.getItem("content11"));
        input_textarea11.val(localStorage.getItem("content11"));

    function updateOutput11() {
        localStorage.setItem("content11", input_textarea11.val());
        output_div11.textContent = input_textarea11.val();
    }
  }

// 12pm function to set value to local storage and retrieve the information
  function twelvePm() {
    var input_textarea12 = $("#text12pm");
    var output_div12 = $("#text12pm");
    
    $("button").on("click", updateOutput12);
        output_div12.text(localStorage.getItem("content12"));
        input_textarea12.val(localStorage.getItem("content12"));

    function updateOutput12() {
        localStorage.setItem("content12", input_textarea12.val());
        output_div12.textContent = input_textarea12.val();
    }
  }

// 1pm function to set value to local storage and retrieve the information
  function onePm() {
    var input_textarea1 = $("#text1pm");
    var output_div1 = $("#text1pm");
    
    $("button").on("click", updateOutput1);
        output_div1.text(localStorage.getItem("content1"));
        input_textarea1.val(localStorage.getItem("content1"));

    function updateOutput1() {
        localStorage.setItem("content1", input_textarea1.val());
        output_div1.textContent = input_textarea1.val();
    }
  }

  // 2pm function to set value to local storage and retrieve the information
  function twoPm() {
    var input_textarea2 = $("#text2pm");
    var output_div2 = $("#text2pm");
    
    $("button").on("click", updateOutput2);
        output_div2.text(localStorage.getItem("content2"));
        input_textarea2.val(localStorage.getItem("content2"));

    function updateOutput2() {
        localStorage.setItem("content2", input_textarea2.val());
        output_div2.textContent = input_textarea2.val();
    }
  }

  // 3pm function to set value to local storage and retrieve the information
  function threePm() {
    var input_textarea3 = $("#text3pm");
    var output_div3 = $("#text3pm");
    
    $("button").on("click", updateOutput3);
        output_div3.text(localStorage.getItem("content3"));
        input_textarea3.val(localStorage.getItem("content3"));

    function updateOutput3() {
        localStorage.setItem("content3", input_textarea3.val());
        output_div3.textContent = input_textarea3.val();
    }
  }

  // 4pm function to set value to local storage and retrieve the information
  function fourPm() {
    var input_textarea4 = $("#text4pm");
    var output_div4 = $("#text4pm");
    
    $("button").on("click", updateOutput4);
        output_div4.text(localStorage.getItem("content4"));
        input_textarea4.val(localStorage.getItem("content4"));

    function updateOutput4() {
        localStorage.setItem("content4", input_textarea4.val());
        output_div4.textContent = input_textarea4.val();
    }
  }

  // 5pm function to set value to local storage and retrieve the information
  function fivePm() {
    var input_textarea5 = $("#text5pm");
    var output_div5 = $("#text5pm");
    
    $("button").on("click", updateOutput5);
        output_div5.text(localStorage.getItem("content5"));
        input_textarea5.val(localStorage.getItem("content5"));

    function updateOutput5() {
        localStorage.setItem("content5", input_textarea5.val());
        output_div5.textContent = input_textarea5.val();
    }
  }

  function switchColor() {
    //Checks if current time is within 9am and assigns appropriate color
    if (now > 9) {
        $("#text9am").addClass("past");
      } else  if (now >= 9 && now < 10) {
          $("#text9am").addClass("present");
      } else if (now < 9){
          $("#text9am").addClass("future");
    }

    //Checks if current time is within 10am and assigns appropriate color
    if (now > 10) {
        $("#text10am").addClass("past");
      } else  if (now >= 10 && now < 11) {
          $("#text10am").addClass("present");
      } else if (now < 10){
          $("#text10am").addClass("future");
    }

    //Checks if current time is within 11am and assigns appropriate color
    if (now > 11) {
        $("#text11am").addClass("past");
      } else  if (now >= 11 && now < 12) {
          $("#text11am").addClass("present");
      } else if (now < 11){
          $("#text11am").addClass("future");
    }

    //Checks if current time is within 12pm and assigns appropriate color
    if (now > 12) {
        $("#text12pm").addClass("past");
      } else  if (now >= 12 && now < 13) {
          $("#text12pm").addClass("present");
      } else if (now < 12){
          $("#text12pm").addClass("future");
    }

    //Checks if current time is within 1pm and assigns appropriate color
    if (now > 13) {
        $("#text1pm").addClass("past");
      } else  if (now >= 13 && now < 14) {
          $("#text1pm").addClass("present");
      } else if (now < 13){
          $("#text1pm").addClass("future");
    }

    //Checks if current time is within 2pm and assigns appropriate color
    if (now > 14) {
        $("#text2pm").addClass("past");
      } else  if (now >= 14 && now < 15) {
          $("#text2pm").addClass("present");
      } else if (now < 14){
          $("#text2pm").addClass("future");
    }

    //Checks if current time is within 3pm and assigns appropriate color
    if (now > 15) {
        $("#text3pm").addClass("past");
      } else  if (now >= 15 && now < 16) {
          $("#text3pm").addClass("present");
      } else if (now < 15){
          $("#text3pm").addClass("future");
    }

    //Checks if current time is within 4pm and assigns appropriate color
    if (now > 16) {
        $("#text4pm").addClass("past");
      } else  if (now >= 16 && now < 17) {
          $("#text4pm").addClass("present");
      } else if (now < 16){
          $("#text4pm").addClass("future");
    }

    //Checks if current time is within 5pm and assigns appropriate color
    if (now > 17) {
        $("#text5pm").addClass("past");
      } else  if (now >= 17 && now < 18) {
          $("#text5pm").addClass("present");
      } else if (now < 17){
          $("#text5pm").addClass("future");
    }
  }