// Setting the date
var todaysDate = moment().format('dddd, MMMM do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // save button click listener 
    $(".saveBtn").on("click", function () {
        // Get user's.reminder values 
        var text = $(this).siblings(".reminder").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour1 .reminder").val(localStorage.getItem("hour1"));
    $("#hour2 .reminder").val(localStorage.getItem("hour2"));
    $("#hour3 .reminder").val(localStorage.getItem("hour3"));
    $("#hour4 .reminder").val(localStorage.getItem("hour4"));
    $("#hour5 .reminder").val(localStorage.getItem("hour5"));
    $("#hour6 .reminder").val(localStorage.getItem("hour6"));
    $("#hour7 .reminder").val(localStorage.getItem("hour7"));
    $("#hour8 .reminder").val(localStorage.getItem("hour8"));
    $("#hour9 .reminder").val(localStorage.getItem("hour9"));
    $("#hour10 .reminder").val(localStorage.getItem("hour10"));

    timeTracker();
})