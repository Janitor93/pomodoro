/**
 * Created by home on 11/10/15.
 */
var arrayWork = [2, 0];
var arrayRest = [1, 0];

$(document).ready(function() {

    set(arrayWork);

    function set(arr) {
        if(arr[0] < 10) {
            $('#min').text("0" + arr[0]);
            $('#sec').text("0" + arr[1]);
        } else {
            $('#min').text(arr[0]);
            $('#sec').text("0" + arr[1]);
        }
    }

    var startS = 0;
    function timerStart() {
        var min = $('#min').html();
        var sec = $('#sec').html();

        if (sec == 0) {
            if (min == 0) {
                set(arrayRest);
                timerRest();
                return false;
            } else {
                min--;
                if (min < 10) min = "0" + min;
                sec = 59;
            }
        } else {
            sec--;
            if (sec < 10) sec = "0" + sec;
        }

        $('#min').text(min);
        $('#sec').text(sec);
        startS = setTimeout(timerStart, 1000);
    }

    var startR = 0;
    function timerRest() {
        var min = $('#min').html();
        var sec= $('#sec').html();

        if (sec == 0) {
            if (min == 0) {
                set(arrayWork);
                timerStart();
                return false;
            } else {
                min--;
                if (min < 10) min = "0" + min;
                sec = 59;
            }
        } else {
            sec--;
            if (sec < 10) sec = "0" + sec;
        }

        $('#min').text(min);
        $('#sec').text(sec);
        startR = setTimeout(timerRest, 1000);
    }

    var trigger = false;
    $('.touch').on('click', function() {
        if(trigger == false) {
            timerStart();
            trigger = true;
        } else {
            clearTimeout(startS);
            clearTimeout(startR);
            trigger = false;
        }
    });
});