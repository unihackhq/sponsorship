function ready() {
  var buttons = Array.from(
    document.querySelectorAll('.pkg-mobile-selector__button'),
  );
  var container = document.querySelector('.pkg-container');

  buttons.map(function(button) {
    button.addEventListener('click', function(event) {
      var package = event.target.dataset.package;
      container.dataset.package = package;
    });
  });
}

document.addEventListener('DOMContentLoaded', ready);
