/**
 * Created by home on 11/10/15.
 */
var arrayWork = [0, 10];
var arrayRest = [0, 5];
var repeat = 2;

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

    function timer() {
        var min = $('#min').html();
        var sec = $('#sec').html();

        if(sec == 0) {
            if(min == 0) {
                //$('#msg').text("Отдохни");
                repeat--;
                if(repeat === 0)
                    return false;
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

    function sequence() {
        //setInterval(function() {
        //    set(arrayRest);
        //    setInterval(function() {
        //        set(arrayWork);
        //    }, arrayRest[1] * 1000);
        //}, arrayWork[1] * 1000);
        var loop1 = setInterval(function() {
            set(arrayRest);
            if(repeat === 0) {
                clearInterval(loop1);
            }
        }, arrayWork[1] * 1000);
        var loop2 = setInterval(function() {
            set(arrayWork);
            if(repeat === 0) {
                clearInterval(loop2);
            }
        }, (arrayWork[1] + arrayRest[1]) * 1000);
    }

    $('.touch').on('click', function() {
        timer();
        //setInterval(function() {
        //    set(arrayRest);
        //}, arrayWork[1] * 1000);
        //setInterval(function() {
        //    set(arrayWork);
        //}, (arrayWork[1] + arrayRest[1]) * 1000);
        sequence();
    });
});
