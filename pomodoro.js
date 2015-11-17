$(document).ready(function() {

    //Set value clock for Work
    $("#plus-work").click(function() {
        $("#status").text("Work!");
        $("#work-time").text(+$("#work-time").text() + 1);
        var min = $("#work-time").html();
        $("#min").text(min);
    });

    $("#minus-work").click(function() {
        $("#status").text("Work!");
        if(+$("#work-time").text() > 1)
            $("#work-time").text(+$("#work-time").text() - 1);
        var min = $("#work-time").html();
        $("#min").text(min);
    });

    //Set value clock for Break
    $("#plus-rest").click(function() {
        $("#rest-time").text(+$("#rest-time").text() + 1);
    });

    $("#minus-rest").click(function() {
        if(+$("#rest-time").text() > 1)
            $("#rest-time").text(+$("#rest-time").text() - 1);
    });

    //Start pomodoro function
    function run() {
        var min = $("#min").html();
        var sec = $("#sec").html();
        if(sec == 0) {
            if(min > 0) {
                min--;
                sec = 59;
            } else {
                var status = $("#status").html();
                if(status == "Work!") {
                    $("#status").text("Break!");
                    var breakMin = +$("#rest-time").html();
                    $("#min").text(breakMin);
                    return 0;
                } else {
                    $("#status").text("Work!");
                    var workMin = +$("#work-time").html();
                    $("#min").text(workMin);
                    return 0;
                }
            }
        } else {
            sec--;
        }
        $("#min").text(min);
        $("#sec").text(sec);
    }

    $('#start').click(function() {
        interval = setInterval(run, 1000);
    });
    $('#pause').click(function() {
        clearInterval(interval);
    })
});