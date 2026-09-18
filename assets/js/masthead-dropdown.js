document.querySelectorAll('.masthead-dropdown').forEach(function (dropdown) {
  var summary = dropdown.querySelector('summary');
  var mouseInside = false;

  dropdown.addEventListener('pointerenter', function (event) {
    if (event.pointerType !== 'mouse') return;
    mouseInside = true;
    dropdown.open = true;
  });
  dropdown.addEventListener('pointerleave', function (event) {
    if (event.pointerType !== 'mouse') return;
    mouseInside = false;
    if (!dropdown.contains(document.activeElement)) dropdown.open = false;
  });
  dropdown.addEventListener('focusout', function (event) {
    if (!mouseInside && !dropdown.contains(event.relatedTarget)) dropdown.open = false;
  });
  dropdown.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      dropdown.open = false;
      summary.focus();
    } else if (event.key === 'ArrowDown' && event.target === summary) {
      event.preventDefault();
      dropdown.open = true;
      dropdown.querySelector('a').focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) dropdown.open = false;
  });
});
