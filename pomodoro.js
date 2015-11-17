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

    var pomodoro = {

        timeWork: 10,
        timeRest: 500,

        work: function() {
            var self = this;
            this.interval = setInterval(function() {
                self.timeWork -= 1;

                $("#min").text(Math.floor(self.timeWork / 60 % 60));
                $("#sec").text(Math.floor(self.timeWork % 60));
            }, 1000);
            if(self.timeWork === 0) {
                clearInterval(this.interval);
                pomodoro.rest();
                return 0;
            }
        },

        rest: function() {
            var self2 = this;
            this.interval2 = setInterval(function() {
                self2.timeRest -= 1;

                $("#min").text(Math.floor(self2.timeRest / 60 % 60));
                $("#sec").text(Math.floor(self2.timeRest % 60));
            }, 1000);
            if(self2.timeRest == 0) {
                clearInterval(this.interval2);
                pomodoro.work();
                return 0;
            }
        },

        pause: function() {
            clearInterval(this.interval);
            delete this.interval;
        },

        resume: function() {
            if(!this.interval) this.work();
        }
    };

    var trigger = 0;
    $('.touch').on('click', function() {
        if(trigger == 0) {
            pomodoro.work();
            trigger = 1;
        } else if(trigger == 1){
            pomodoro.pause();
            trigger = 0;
        } else if(trigger == 2) {
            pomodoro.resume();
            trigger = 0;
        }
    });
});