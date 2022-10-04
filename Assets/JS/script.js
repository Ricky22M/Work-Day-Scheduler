/* DECLARING VARAIABES */

// Used later to display user's current date
var currentDate = moment().format('dddd, MMMM Do');

/* CURRENT USER'S DATE */

// Setting user's current date
$('#currentDay').text(currentDate);

/* SAVING LOCAL STORAGE */

// This will save the textarea text to local storage on the hour row it was being saved onto
$(".saveButton").on("click", function() {   
    //This code will add a key code to save with the text in local storage
    var timeOfHour = $(this).parent().attr("id");
    // This will save only the textarea text to local storage
    var savedText = $(this).siblings(".description").val();
    // Setting the keys and values into local storage
    localStorage.setItem(timeOfHour, savedText);
});

/* LOADING LOCAL STORAGE */

// This code will run as soon as the page is started
// This code will output the values from the local storage to the textarea depending on what task and hour was being saved
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));    
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

/* TRACKING HOURS OF THE DAY */

// This code will help to track the user's current hour and color code the past, present, and future hours
$(".time-block").each(function () {
    // Used later to track the user's current hour
    var userHours = moment().hour();
    // setting a variable for the time blocks
    var timeBlocks = parseInt($(this).attr("id").split("hour")[1]);

    // If any time blocks are equivalent to the user's current hour, then add the "present" class to that time block and remove all other classes within this statement
    if (timeBlocks < userHours) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (timeBlocks === userHours) { // If any time blocks are past the user's current hour, then add the "past" class to that time block and remove all other classes within this statement
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } else { // If the user's current hour is behind the future hours, then add the "future" class to that time block and remove all other classes within this statement
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});