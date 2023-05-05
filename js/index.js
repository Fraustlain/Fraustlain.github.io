document.addEventListener('DOMContentLoaded', function() {
    var para = document.querySelectorAll('.parallax');
    var sidenav = document.querySelectorAll('.sidenav');
    var matbox = document.querySelectorAll('.materialboxed');
    var car = document.querySelectorAll('.carousel');

    M.Parallax.init(para);
    M.Sidenav.init(sidenav);
    M.Materialbox.init(matbox);
    M.Carousel.init(car,{
      fullWidth: true
    });

  });