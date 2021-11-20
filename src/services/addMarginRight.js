import { isMobile } from './mobileDetect';

export const addMarginRight = () => {
  if (!isMobile.any()) {
    document.documentElement.classList.add('_pc');
  }
};