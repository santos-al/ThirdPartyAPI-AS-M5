// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

  // Saves the text in the time slot of the corresponding save button
  $('.saveBtn').on("click", function () {
    let value = $(this).siblings('.description').val();
    let time = $(this).parents('.time-block').attr('id');
    localStorage.setItem(time, value);
  })
  
  // Keeps track of the current time and formats it into just the hour. Used to highlight present time on app.
  var now = dayjs().format('HH');
  if (now >= 9 && now <= 17) {
    $(`#hour-${now}`).addClass('present')
  };

  // Upon page refresh check local storage for any key pairs and load them onto the page
  for (i = 9; i < 17; i++) {
    let storageVal = localStorage.getItem(`hour-${i}`);
    $(`#hour-${i}`).children('.description').val(storageVal);
  }

  // sets the current hour to a number
  now = Number(now);

  // Sets the color for all hours in the future
  for (i = (now + 1); i <= 17; i++) {
    console.log(i);
    $(`#hour-${i}`).removeClass('past');
    $(`#hour-${i}`).addClass('future');
  }
    // if ((now - hour) < 0) {
    //   $(`#hour-${hour}`).addClass('future');
    // }

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
