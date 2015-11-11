/**
 * Created by home on 11/10/15.
 */
var arrayWork = [0, 10];
var arrayRest = [0, 5];

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

    function timerStart() {
            var min = $('#min').html();
            var sec = $('#sec').html();

            if (sec == 0) {
                if (min == 0) {
                    set(arrayRest);
                    setTimeout(timerRest, 1000);
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
            setTimeout(timerStart, 1000);
    }

    function timerRest() {
        var min1 = $('#min').html();
        var sec1= $('#sec').html();

        if (sec1 == 0) {
            if (min1 == 0) {
                set(arrayWork);
                setTimeout(timerStart, 1000);
                return false;
            } else {
                min1--;
                if (min1 < 10) min1 = "0" + min1;
                sec1 = 59;
            }
        } else {
            sec1--;
            if (sec1 < 10) sec1 = "0" + sec1;
        }

        $('#min').text(min1);
        $('#sec').text(sec1);
        setTimeout(timerRest, 1000);
    }

    $('.touch').on('click', function() {
        timerStart();
    });
});
