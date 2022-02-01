// ## User Story

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// ## Acceptance Criteria

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

var currentDay = document.querySelector("#currentDay")
var container = document.querySelector(".container")

currentDay.innerHTML = moment().format("[Today is] dddd, MMMM Do YYYY <br><br> h:mm:ss a")

var currentHour = parseInt(moment().format("H"))
console.log(currentHour)


const rowsArray = document.querySelectorAll(".dayHour")
console.log(rowsArray)

$.each(rowsArray, function (i, dayHour) {
    var rowHourId = parseInt($(this).attr("id"));
    console.log(rowHourId)
    if (rowHourId === currentHour) {
      $(this).next().addClass("present");
    } else if (rowHourId < currentHour) {
      $(this).next().addClass("past");
    } else if (rowHourId > currentHour) {
      $(this).next().addClass("future");
    }
  });

var submitButton = $(".saveEvent")


submitButton.on("click", function(){
    var eventText = $(this).siblings(".form-control").val()
    console.log(eventText)
    var eventTime = $(this).siblings(".dayHour").text()
    console.log(eventTime)
    localStorage.setItem(eventTime ,eventText)
})

$("#nine-am").val(localStorage.getItem("9 AM"))
$("#ten-am").val(localStorage.getItem("10 AM"))
$("#eleven-am").val(localStorage.getItem("11 AM"))
$("#twelve-pm").val(localStorage.getItem("12 PM"))
$("#one-pm").val(localStorage.getItem("1 PM"))
$("#two-pm").val(localStorage.getItem("2 PM"))
$("#three-pm").val(localStorage.getItem("3 PM"))
$("#four-pm").val(localStorage.getItem("4 PM"))
$("#five-pm").val(localStorage.getItem("5 PM"))
