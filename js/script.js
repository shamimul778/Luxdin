
function videoPlay() {
    document.getElementById('video-link').style="display: block; width: 745px; height: 420px";
}

function videoP() {
    document.getElementById('video-p').style="display: block; width: 745px; height: 420px; margin: 0 auto";
}

$(document).ready(function(){
	$('.video').click(function(){
        $('.video-area').hide();
    });
    $('.t-video').click(function(){
        $('.t-video').hide();
    });

    $('.s-consaltation').click(function(){
    	$('.schedule').toggle();
    });
});

function videoPly() {
    document.getElementById('video-lnk').style="display: block; width: 617px; height: 400px";
}