import timer from './modules/timer';
import toggleMenu from './modules/toggleMenu';
import modal from './modules/modal';
import calc from './modules/calc';
import questions from './modules/questions';
import request from './modules/request';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('16 april 2022');
toggleMenu();
modal();
calc();
questions();
request();
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
