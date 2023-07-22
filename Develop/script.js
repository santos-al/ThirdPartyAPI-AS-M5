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
    $(`#hour-${i}`).removeClass('past');
    $(`#hour-${i}`).addClass('future');
  }

  // TODO: Add code to display the current date in the header of the page.
});
