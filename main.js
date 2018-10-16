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

  const selector = document.querySelector('.pkg-mobile-selector');
  const scrollListener = event => {
    const top = selector.getBoundingClientRect().top;
    if (top < -150) {
      selector.classList.add('sticky');
    } else {
      selector.classList.remove('sticky');
    }
  };
  window.addEventListener('scroll', scrollListener, { passive: true });
  scrollListener();
};

document.addEventListener('DOMContentLoaded', ready);
