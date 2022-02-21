import {setOnClickBlur} from './utils/blur.js';
import {slider} from './modules/slider.js';

const sliderRoots = document.querySelectorAll(`.slider`);

sliderRoots.forEach((root) => {
  slider(root);
});


setOnClickBlur();
