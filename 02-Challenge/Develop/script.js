/* DECLARING VARAIABES */

// Used later to display user's current date
var currentDate = moment().format('dddd, MMMM Do');
// Used later to track the user's current hour
var userHours = moment().hour();

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

// I still need to learn how I can make code to track the hours of the day