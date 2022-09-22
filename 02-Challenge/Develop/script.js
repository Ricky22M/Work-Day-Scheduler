// Creating variables for later use
// need to get ids of text areas to save on to local storage
var textDescription = document.querySelector('saveBtn').addEventListener("click", function() 
    {
        var savedText = document.querySelector('description').value;
        // Local Storage [User] = user
        localStorage.setItem('savedText', text);
        console.log("querySelector is being tested")
    }, false
);

// This code is being used to show the user's current date at the top of the page
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDate);

// Local storage code

if (localStorage.getItem('description')) {
    var textDescription = JSON.parse(localStorage.getItem('description'));
    console.log('getting description from local storage');
} else {
    var textDescription = [];
    console.log('no previous text was saved');
}

function savedDescription() {
    localStorage.setItem('savedDescription', 'false');


}