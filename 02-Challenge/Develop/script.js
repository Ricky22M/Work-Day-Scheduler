// This code is being used to show the user's current date and time at the top of the page
var timeDisplay = $('#currentDay');

function displayCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do h:mm:ss a');
    timeDisplay.text(currentDate);
}



// This code is used to call the function displayCurrentDate to get the user's current date and time to updated the time every second
setInterval(displayCurrentDate, 1000);