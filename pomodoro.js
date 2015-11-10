/**
 * Created by home on 11/10/15.
 */
var arrayWork = [2, 0];
var arrayRest = [5, 0];
var repeat = 5;

$(document).ready(function() {
    //if(arrayWork[0] < 10) {
    //    $('#min').text("0" + arrayWork[0]);
    //    $('#sec').text("0" + arrayWork[1]);
    //} else {
    //    $('#min').text(arrayWork[0]);
    //    $('#sec').text("0" + arrayWork[1]);
    //}

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

    function timer() {
        //var min = arr[0];
        //var sec = arr[1];
        var min = $('#min').html();
        var sec = $('#sec').html();

        if(sec == 0) {
            if(min == 0) {
                //$('#msg').text("Отдохни");
                set(arrayRest);
                timer();
            } else {
                min--;
                if(min < 10) min = "0" + min;
                sec = 59;
            }
        } else {
            sec--;
            if(sec < 10) sec = "0" + sec;
        }
        $('#min').text(min);
        $('#sec').text(sec);
        setTimeout(timer, 1000);
    }

    $('.touch').on('click', function() {
        timer(arrayWork);
    });
});
