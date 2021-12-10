import PreloaderImg from '@assets/images/Preloader/preloader.svg';

import s from '@styles/style.module.scss';

const Preloader = () => (
  <div className={s.preloader}>
    <img src={PreloaderImg} alt='Прелоадер' />
    <span className={s.preloader_text}>Loading...</span>
  </div>
);

export default Preloader;
