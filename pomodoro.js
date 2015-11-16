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
                //setTimeout(timerRest, 1000);
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
                //setTimeout(timerStart, 1000);
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

    var pomodoro = {

        timeWork: 1500,
        timeRest: 300,

        work: function() {
            var self = this;
            this.interval = setInterval(function() {
                self.timeWork -= 1;

                $("#min").text(Math.floor(self.timeWork / 60 % 60));
                $("#sec").text(Math.floor(self.timeWork % 60));
            }, 1000);
        },

        //rest: function() {
        //    var self = this;
        //    this.interval = setInterval(function() {
        //        self.timeRest -= 1;
        //
        //        $("#min").text(Math.floor(self.timeRest / 60 % 60));
        //        $("#sec").text(Math.floor(self.timeRest % 60));
        //    }, 1000);
        //},

        pause: function() {
            clearInterval(this.interval);
            delete this.interval;
        },

        resume: function() {
            if(!this.interval) this.work();
        }
    };

    var trigger = false;
    $('.touch').on('click', function() {
        if(trigger == false) {
            pomodoro.work();
            trigger = true;
        } else {
            pomodoro.pause();
            trigger = false;
        }
    });
});