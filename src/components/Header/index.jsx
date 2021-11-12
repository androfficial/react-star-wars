import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import HeaderNavLink from '@components/HeaderNavLink';
import { SpaceStation, Droid, Lightsaber } from '@assets/images/Header';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import s from '@styles/style.module.scss';

const Header = () => {
  const [icon, setIcon] = React.useState(SpaceStation);
  const { theme, change } = useTheme();
  const count = useSelector(({ favorites }) => favorites.items.length);

  const getFavoritesCount = () => (String(count).length >= 2 ? '9+' : count);
  const activeNavLink = ({ isActive }) =>
    cn(s.link, {
      [s.link_active]: isActive,
    });

  React.useEffect(() => {
    switch (theme) {
      case THEME_LIGHT:
        setIcon(Lightsaber);
        break;
      case THEME_DARK:
        setIcon(Droid);
        break;
      case THEME_NEITRAL:
        setIcon(SpaceStation);
        break;
      default:
        setIcon(SpaceStation);
    }
  }, [theme, change]);

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <HeaderNavLink path="/" className={s.logo_link} image={icon} alt="Star Wars Logo" />
      </div>
      <div className={s.menu}>
        <ul className={s.list}>
          <li className={s.item}>
            <HeaderNavLink path="/" className={activeNavLink} text="Home" />
          </li>
          <li className={s.item}>
            <HeaderNavLink path="/people" className={activeNavLink} text="People" />
          </li>
          <li className={s.item}>
            <HeaderNavLink path="/search" className={activeNavLink} text="Search" />
          </li>
          <li className={s.item}>
            <HeaderNavLink path="/not-found" className={activeNavLink} text="Not Found" />
          </li>
          <li className={s.item}>
            <HeaderNavLink path="/fail" className={activeNavLink} text="Fail" />
          </li>
        </ul>
      </div>
      <div className={s.favorites}>
        <Link to="/favorites" className={s.go_to_favorites}>
          <span className={s.counter}>{getFavoritesCount()}</span>
          <svg viewBox="0 0 212.045 212.045">
            <path
              d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
                c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
                c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;