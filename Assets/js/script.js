// Declare Time Variables
var now = moment()
// Time variable in military time
var currentTime = now.hour();

// Declare Element Variable
var currentDayEl = $("#currentDay");

// Function to display date
function displayDate() {
    // variable for date formatted day, month, day, year
    var date = now.format("dddd, MMMM Do YYYY");
    // update text to show date
    currentDayEl.text(date);
}

// On document load get and display items from local storage
$(document).ready(function() {
    // Declare variables for each local storage item
    var nine = localStorage.getItem("9");
    var ten = localStorage.getItem("10");
    var eleven = localStorage.getItem("11");
    var twelve = localStorage.getItem("12");
    var one = localStorage.getItem("13");
    var two = localStorage.getItem("14");
    var three = localStorage.getItem("15");
    var four = localStorage.getItem("16");
    var five = localStorage.getItem("17");
    // Display value for each local storage item
    $(".9").val(nine);
    $(".10").val(ten);
    $(".11").val(eleven);
    $(".12").val(twelve);
    $(".13").val(one);
    $(".14").val(two);
    $(".15").val(three);
    $(".16").val(four);
    $(".17").val(five);
    // Shows date and top of the screen
    displayDate(); 
    // Run Change Color function
    changeColor();
})

// Function to change color depending on time
function changeColor () {
    // If current time equals time
    if (currentTime === 09) {
        // Remove past and future class and add present
        $(".9").removeClass("past").removeClass("future").addClass("present");
        // If current time is more than current time
        } else if (09 < currentTime) {
        // Remove present and future class and add past   
        $(".9").removeClass("present").removeClass("future").addClass("past");
        // If current time is less than current time
        } else if (09 > currentTime)  {
        // Remove present and past class and add future  
        $(".9").removeClass("present").removeClass("past").addClass("future");
        }
      // Repeated steps above for hours 10 through 17
    } if (currentTime === 10) {
        $(".10").removeClass("past").removeClass("future").addClass("present");
        } else if (10 < currentTime) {
        $(".10").removeClass("present").removeClass("future").addClass("past");
        } else if (10 > currentTime) {
        $(".10").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 11) {
        $(".11").removeClass("past").removeClass("future").addClass("present");
        } else if (11 < currentTime) {
        $(".11").removeClass("present").removeClass("future").addClass("past");
        } else if (11 > currentTime) {
        $(".11").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 12) {
        $(".12").removeClass("past").removeClass("future").addClass("present");
        } else if (12 < currentTime) {
        $(".12").removeClass("present").removeClass("future").addClass("past");
        } else if (12 > currentTime) {
        $(".12").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 13) {
        $(".13").removeClass("past").removeClass("future").addClass("present");
        } else if (13 < currentTime) {
        $(".13").removeClass("present").removeClass("future").addClass("past");
        } else if (13 > currentTime) {
        $(".13").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 14) {
        $(".14").removeClass("past").removeClass("future").addClass("present");
        } else if (14 < currentTime) {
        $(".14").removeClass("present").removeClass("future").addClass("past");
        } else if (14 > currentTime) {
        $(".14").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 15) {
        $(".15").removeClass("past").removeClass("future").addClass("present");
        } else if (15 < currentTime) {
        $(".15").removeClass("present").removeClass("future").addClass("past");
        } else if (15 > currentTime) {
        $(".15").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 16) {
        $(".16").removeClass("past").removeClass("future").addClass("present");
        } else if (16 < currentTime) {
        $(".16").removeClass("present").removeClass("future").addClass("past");
        } else if (16 > currentTime) {
        $(".16").removeClass("present").removeClass("past").addClass("future");

    } if (currentTime === 17) {
        $(".17").removeClass("past").removeClass("future").addClass("present");
        } else if (17 < currentTime) {
        $(".17").removeClass("present").removeClass("future").addClass("past");
        } else if (17 > currentTime) {
        $(".17").removeClass("present").removeClass("past").addClass("future");
    };

// Console log current time
console.log("Current time: ", currentTime);

// Function to handle Save Button
function handleSaveBtn(hour) {
    // Variable for time value declared
    var timeValue = $("." + hour).val();
    // Console log timeValue
    console.log(timeValue);
    // Save to local storage
    localStorage.setItem(hour, timeValue);
}

// Listener Event for each button when clicked
$("#9").on("click", function() {
    handleSaveBtn("9")
});
$("#10").on("click", function() {
    handleSaveBtn("10")
});
$("#11").on("click", function() {
    handleSaveBtn("11")
});
$("#12").on("click", function() {
    handleSaveBtn("12")
});
$("#13").on("click", function() {
    handleSaveBtn("13")
});
$("#14").on("click", function() {
    handleSaveBtn("14")
});
$("#15").on("click", function() {
    handleSaveBtn("15")
});
$("#16").on("click", function() {
    handleSaveBtn("16")
});
$("#17").on("click", function() {
    handleSaveBtn("17")
});