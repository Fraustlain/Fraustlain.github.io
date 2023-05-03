document.addEventListener('DOMContentLoaded', function() {
    var para = document.querySelectorAll('.parallax');
    var sidenav = document.querySelectorAll('.sidenav');
    M.Parallax.init(para);
    M.Sidenav.init(sidenav);
  });