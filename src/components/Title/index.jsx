import PropTypes from 'prop-types';

import s from '@styles/style.module.scss';

const Title = ({ text }) => (
  <div className={s.top}>
    <h1 className={s.title}>{text}</h1>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
