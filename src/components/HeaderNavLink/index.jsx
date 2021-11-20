import { NavLink } from 'react-router-dom';
import { isMobile } from '@services/mobileDetect';

const HeaderNavLink = ({ setShowMenu, path, className, text, image = false, alt = false }) => {
  const closeMenu = () => {
    if (isMobile.any() && window.innerWidth < 700) {
      setShowMenu(false);
    }
  };

  return (
    <NavLink onClick={closeMenu} to={path} className={className}>
      {image && <img src={image} alt={alt} />}
      {text}
    </NavLink>
  );
};

export default HeaderNavLink;