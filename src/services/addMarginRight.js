import isMobile from './mobileDetect';

const addMarginRight = () => {
  if (!isMobile.any()) {
    document.documentElement.classList.add('_pc');
  }
};

export default addMarginRight;
