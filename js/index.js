document.addEventListener('DOMContentLoaded', function() {
    M.Parallax.init(document.querySelectorAll('.parallax'),{});
    M.Materialbox.init(document.querySelectorAll('.materialboxed'),{});
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {});
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
  });