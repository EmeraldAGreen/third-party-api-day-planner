// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

/* Top of Screen
    planner displays current day at the top of the calendar in the currentDay <p>
    Bottom of Screen
    planner displays timeblocks in div container for 8-5 hours

    planner timeblocks are classed with different colors to indicate past, present, or future 

    on click the timeblock will switch to an input for an event 
    submit button 


    save the event "" in local storage 
*/

var currentDay = document.querySelector("#currentDay")
var container = document.querySelector(".container")

const rowsArray = document.querySelectorAll(".row")

currentDay.innerHTML = moment().format("[Today is] dddd, MMMM Do YYYY <br><br> h:mm:ss a")

var currentHour = moment().format('H')

var hourPast = hourPast < currentHour
var hourNow = currentTime
var hourFuture = hourFuture < currentHour


rowsArray.forEach(row => {
    let 
        rowIdString = row.id, rowHour
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    console.log(rowIdString)
    console.log(rowHour)
    
});
// Array.from(rows).forEach(row => {
//     let
//       rowIdString = row.id,
//       rowHour;
//     if (rowIdString) {
//       rowHour = parseInt(rowIdString);
//     }
//     if (rowHour) {
//       // Compares row id to current hour and sets color accordingly
//       if (currentHour === rowHour) {
//         setColor(row, "red");
//       } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//         setColor(row, "green");
//       } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//         setColor(row, "lightgrey");
//       } else {
//         setColor(row, "white");
//       }
//     }
//   });
  
//   function setColor(element, color) {
//     element.style.backgroundColor = color;
//   }