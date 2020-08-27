

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop >= 690 || document.documentElement.scrollTop >= 690) {
    var elements = document.getElementsByClassName("nav_select"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.color = '#291C54';
      elements[i].style.filter = 'none';
    }
    if (document.body.scrollTop >= 3400 && document.body.scrollTop <= 4079  || document.documentElement.scrollTop >= 3400 &&  document.documentElement.scrollTop <= 4079) {
      var elements = document.getElementsByClassName("nav_select"), i, len;
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = 'white';
        elements[i].style.filter = 'none';
      }
    }


  } else {
    var elements = document.getElementsByClassName("nav_select"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.color = 'white';

    }
  }
}