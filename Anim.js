$(document).ready(function(){
    // var x = $("#about").offset();

    // var y = $("#coucou").offset();

    // alert (y.top + " " + y.left);

    $(window).scroll(function(){
        if($(window).scrollTop() >= 150) {
            var about = $('#textAbout')[0];
            $(about).css("animation", "slideInLeft 3s");
        }
    })

    $(window).scroll(function(){
    if($(window).scrollTop() >= 700) {
        var img1 = $('#projet1IMG')[0];
        var txt1 = $('#projet1TXT')[0];
        $(img1).css("animation", "fadeIn 4s");
        $(txt1).css("animation", "slideInUp 4s");
    }
})

$(window).scroll(function(){
    if($(window).scrollTop() >= 1200) {
        var img2 = $('#projet2IMG')[0];
        var txt2 = $('#projet2TXT')[0];
        $(img2).css("animation", "fadeIn 4s");
        $(txt2).css("animation", "slideInUp 4s");
    }
})

$(window).scroll(function(){
    if($(window).scrollTop() >= 1650) {
        var img3 = $('#projet3IMG')[0];
        var txt3 = $('#projet3TXT')[0];
        $(img3).css("animation", "fadeIn 4s");
        $(txt3).css("animation", "slideInUp 4s");
    }
})


})