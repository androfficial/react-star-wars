import React from 'react';
import Logo from '@assets/images/Header/space-station.svg';

import s from '@styles/style.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <a href="/#" className={s.logo_link}>
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className={s.menu}>
        <ul className={s.list}>
          <li className={s.item}>
            <a href="/#" className={s.link}>
              Home
            </a>
          </li>
          <li className={s.item}>
            <a href="/#" className={s.link}>
              People
            </a>
          </li>
          <li className={s.item}>
            <a href="/#" className={s.link}>
              Search
            </a>
          </li>
          <li className={s.item}>
            <a href="/#" className={s.link}>
              Not Found
            </a>
          </li>
          <li className={s.item}>
            <a href="/#" className={s.link}>
              Fail
            </a>
          </li>
        </ul>
      </div>
      <div className={s.favorites}>
        <a href="/#" className={s.go_to_favorites}>
          <span className={s.counter}>0</span>
          <svg viewBox="0 0 212.045 212.045">
            <path
              d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
                c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
                c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;