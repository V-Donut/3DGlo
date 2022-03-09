import timer from './modules/timer';
import toggleMenu from './modules/toggleMenu';
import modal from './modules/modal';
import calc from './modules/calc';
import replace from './modules/replace';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('16 april 2022');
toggleMenu();
modal();
calc(100);
replace();
tabs();
slider({
  slider: '.portfolio-content',
  slide: '.portfolio-item',
  dotsList: '.portfolio-dots',
  dot: '.dot',
  arrows: '.portfolio-btn',
  prev: '.prev',
  next: '.next',
  slideActive: '.portfolio-item-active',
  dotActive: '.dot-active'
});
sendForm({ 
  formId: 'form1', 
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
});
sendForm({ 
  formId: 'form2', 
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
});
sendForm({ 
  formId: 'form3', 
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
});