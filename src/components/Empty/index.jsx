import PropTypes from 'prop-types';

import s from '@styles/style.module.scss';

const Empty = ({ text }) => (
  <div className={s.empty}>
    <h3 className={s.empty_title}>{text}</h3>
  </div>
);

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;
