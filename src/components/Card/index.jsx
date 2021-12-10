/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from '@context/ThemeProvider';
import PropTypes from 'prop-types';

import s from '@styles/style.module.scss';

const Card = ({ theme, image, text }) => {
  const { change } = useTheme();

  return (
    <li className={s.home_card} onClick={() => change(theme)}>
      <img src={image} alt={text} />
      <p className={s.home_text}>{text}</p>
    </li>
  );
};

Card.propTypes = {
  theme: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
