$(function() {
    if ($(window).width()<=778){ 
        $( ".navbar" ).css( "animation", "none" );
     }
    if ($(window).width()>778){ 
        $('.Allscript').prepend('<script src="nav.js"></script>');
    }
  });