import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavLink = ({ path, className, text, image = false, alt = false }) => {
  return (
    <NavLink to={path} className={className}>
      {image && <img src={image} alt={alt} />}
      {text}
    </NavLink>
  );
};

export default HeaderNavLink;