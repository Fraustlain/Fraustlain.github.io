document.addEventListener('DOMContentLoaded', function() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.Parallax.init(document.querySelectorAll('.parallax'), {});
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {}); 
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
        position: 'top'
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

