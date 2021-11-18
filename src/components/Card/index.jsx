import { useTheme } from '@context/ThemeProvider';

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

export default Card;