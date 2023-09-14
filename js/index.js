document.addEventListener('DOMContentLoaded', function() {
    M.Parallax.init(document.querySelectorAll('.parallax'),{});
    M.Materialbox.init(document.querySelectorAll('.materialboxed'),{});
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {});
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});