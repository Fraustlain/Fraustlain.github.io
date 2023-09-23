document.addEventListener('DOMContentLoaded', function() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.Parallax.init(document.querySelectorAll('.parallax'), {});
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
        position: 'top'
    });
  });