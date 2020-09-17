
  window.onscroll = function scrollFunction() {
    if (document.body.scrollTop >= 550 || document.documentElement.scrollTop >= 550) {
      var elements = document.getElementsByClassName("nav_select"), i, len;
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = '#232933';
        elements[i].style.filter = 'none';
      }
    }
    else {
      var elements = document.getElementsByClassName("nav_select"), i, len;
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = '#fff';
        elements[i].style.filter = 'none';
    }
  }
}