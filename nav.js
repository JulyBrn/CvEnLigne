

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    var elements = document.getElementsByClassName("nav_select"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.color = '#291C54';
      elements[i].style.filter = 'none';
    }


  } else {
    var elements = document.getElementsByClassName("nav_select"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.color = 'white';
      elements[i].style.filter = 'drop-shadow(2px 4px 6px black)';
    }
  }
}