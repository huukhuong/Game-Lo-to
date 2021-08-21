$(document).ready(function () {
    var wrap = $('#wrap-ball');
    var arr = [];
    var btnPlay = $('#btn-play');
    var btnReset = $('#btn-reset');
    var btnPause = $('#btn-pause');
    var pauseMessage = $('#pause-message');

    for (i = 1; i < 90; i++) {
        let val = i + 1;
        let num = val < 10 ? '0' + val : val;
        arr[i] = num;

    }

    var auto = true;


    btnPlay.click(function () {
        btnPlay.prop('disabled', true);
        btnPause.css('display', 'block');
        pauseMessage.css('display', 'none');

        let i = getRandomInt(0, arr.length);

        var audio = new Audio('../audio/raoloto' + (Number(arr[i])) + '.webm');
        audio.play();

        $('#top-gift').css('display', 'none');

        audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            $('#top-gift').css('display', 'block');
            let value = '<div class="ball"><div class="ball__center">' + arr[i] + '</div></div>';
            wrap.append(value);
            arr.splice(i, 1);

            if (auto) {
                btnPlay.click();
            } else {
                btnPlay.prop('disabled', false);
            }
        });


    });

    btnPause.click(function() {
        auto = false;
        btnPause.prop('disabled', true);
        pauseMessage.css('display', 'block');
    });

    btnReset.click(function () {
        location.reload();
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
});