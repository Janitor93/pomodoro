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