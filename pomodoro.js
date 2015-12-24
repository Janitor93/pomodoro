$(document).ready(function() {

    //rounding and concatenation
    function rounding(n) {
        if(n >= 10) {
            return n;
        } else {
            var dec = Math.floor(n / 10);
            var un = n % 10;
            return dec + "" + un;
        }
    }

    //Set value clock for Work
    $("#plus-work").click(function() {
        if(running == false) {
            $("#status").text("Work!");
            $("#work-time").text(+$("#work-time").text() + 1);
            var min = $("#work-time").html();
            $("#min").text(rounding(min));
        }
    });

    $("#minus-work").click(function() {
        if(+$("#work-time").text() > 1 && running == false) {
            $("#work-time").text(+$("#work-time").text() - 1);
            $("#status").text("Work!");
            var min = $("#work-time").html();
            $("#min").text(rounding(min));
        }
    });

    //Set value clock for Break
    $("#plus-rest").click(function() {
        if(running == false)
            $("#rest-time").text(+$("#rest-time").text() + 1);
    });

    $("#minus-rest").click(function() {
        if(+$("#rest-time").text() > 1 && running == false)
            $("#rest-time").text(+$("#rest-time").text() - 1);
    });

    //audio
    var audio = new Audio('http://www.soundjay.com/misc/sounds/bell-ringing-04.mp3');
    function beep() {
        audio.play();
    }

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
                    beep();
                    $("#status").text("Break!");
                    var breakMin = +$("#rest-time").html();
                    $("#min").text(breakMin);
                    $("#bar").removeClass("progress-bar-success");
                    $("#bar").addClass("progress-bar-danger");
                    return 0;
                } else {
                    beep();
                    $("#status").text("Work!");
                    var workMin = +$("#work-time").html();
                    $("#min").text(workMin);
                    $("#bar").removeClass("progress-bar-danger");
                    $("#bar").addClass("progress-bar-success");
                    return 0;
                }
            }
        } else {
            sec--;
        }
        $("#min").text(rounding(min));
        $("#sec").text(rounding(sec));
        $(".progress-bar").css("width", moveBar(min, sec) + "%");
    }

    //for progress bar
    function moveBar(m, n) {
        var t = $("#work-time").html();
        var k = t * 60;
        return Math.ceil((100 * (k - (m * 60 + n)))/k);
    }

    var running = false;
    var interval;
    $('#start').click(function() {
        if(running == false) {
            interval = setInterval(run, 1000);
            running = true;
        }
    });
    $('#pause').click(function() {
        clearInterval(interval);
        running = false;
    });
});