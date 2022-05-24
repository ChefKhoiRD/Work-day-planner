// Setting the date
var todaysDate = moment().format('dddd, MMMM do YYYY');
$("#currentDay").html(todaysDate);

// Saves user data to localStorage for refresh
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
        console.log(localStorage.getItem($(this).prop("id")));
    })
});

   
    function timeTracker() {
        // Get hours
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var currentTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (currentTime < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (currentTime === currentHour) {
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
