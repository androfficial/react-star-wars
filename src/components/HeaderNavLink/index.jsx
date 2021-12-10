import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import isMobile from '@services/mobileDetect';

const HeaderNavLink = ({ setShowMenu, path, className, text }) => {
  const closeMenu = () => {
    if (isMobile.any() && window.innerWidth < 700) {
      setShowMenu(false);
    }
  };

  return (
    <NavLink onClick={closeMenu} to={path} className={className}>
      {text}
    </NavLink>
  );
};

HeaderNavLink.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderNavLink;
