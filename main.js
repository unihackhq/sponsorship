const ready = () => {
  // package selector for mobile
  const buttons = Array.from(
    document.querySelectorAll('.pkg-mobile-selector__button'),
  );
  const container = document.querySelector('.pkg-container');

  buttons.map(button => {
    button.addEventListener('click', event => {
      const package = event.target.dataset.package;
      container.dataset.package = package;
    });
  });

  // info button in table
  const infoButtons = Array.from(
    document.querySelectorAll('.pkg-table__more-info'),
  );
  infoButtons.map(button => {
    button.addEventListener('click', event => {
      event.target.classList.toggle('active');
    });
  });
};

document.addEventListener('DOMContentLoaded', ready);
