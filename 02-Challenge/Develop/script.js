/* DECLARING VARAIABES */

// Used later to save user input
var savedButton = document.querySelector('.savedButton');

// Used later to display user's current date
var currentDate = moment().format('dddd, MMMM Do');

/* CURRENT USER'S DATE */

// Setting user's current date
$('#currentDay').text(currentDate);

/* LOADING LOCAL STORAGE */
if (localStorage.getItem(timeOfHour, savedText)) {
    var textDescription = JSON.parse(localStorage.getItem(timeOfHour, savedText));
    console.log('getting description from local storage');
} else {
    var textDescription = [];
    console.log('no previous text was saved');
}

/* SAVING LOCAL STORAGE */

// This will save the textarea text to local storage on the hour row it was being saved onto
$("savedButton").on("click", function() {
    //This code will add a key code to save with the text in local storage
    var timeOfHour = $(this).parent().attr("id");

    // This will save only the textarea text to local storage
    var savedText = $(this).siblings(".description").val();

    // Setting the keys and values into local storage
    localStorage.setItem(timeOfHour, savedText);
});

/* TRACKING HOURS OF THE DAY */
