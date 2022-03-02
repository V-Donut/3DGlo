const slider = (selectors) => {
  const {
    slider,
    slide,
    dotsList,
    dot,
    arrows,
    prev,
    next,
    slideActive = '.slide-active',
    dotActive = '.dot-active'
  } = selectors;

  const sliderBlock = document.querySelector(slider);
  const slides = document.querySelectorAll(slide);
  const portfolioDots = document.querySelector(dotsList);
  const timeInterval = 2000;

  if (!sliderBlock || !slides.length) {
    return;
  }

  let dots;
  let currentSlide = 0;
  let interval;

  const addDots = (dotsCount) => {
    const dotClass = dot.replace('.', '');
    for (let i = 0; i < dotsCount; i++) {
      let newElem = document.createElement('li');
      newElem.className = (i === 0) ? (dotClass + ' ' + dotActive) : dotClass;
      portfolioDots.append(newElem);
    }
    dots = document.querySelectorAll(dot);
  };

  addDots(slides.length);

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass.replace('.', ''));
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass.replace('.', ''));
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(dot + ', ' + arrows)) {
      return;
    }

    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches(next)) {
      currentSlide++;
    } else if (e.target.matches(prev)) {
      currentSlide--;
    } else if (e.target.classList.contains(dot.replace('.', ''))) {
      dots.forEach((item, index) => {
        if (e.target === item) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches(dot + ', ' + arrows)) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches(dot + ', ' + arrows)) {
      startSlide(timeInterval);
    }
  }, true);

  startSlide(timeInterval);
};

export default slider;
