import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from '@styles/style.module.scss';

const Navigation = ({ currentPage, prevPage, nextPage }) => (
  <div className={s.nav_links}>
    <Link
      to={`/people/?page=${currentPage - 1}`}
      className={cn(s.nav_link, {
        [s.nav_link_disabled]: !prevPage,
      })}
    >
      Prev
    </Link>
    <Link
      to={`/people/?page=${currentPage + 1}`}
      className={cn(s.nav_link, {
        [s.nav_link_disabled]: !nextPage,
      })}
    >
      Next
    </Link>
  </div>
);

Navigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

Navigation.defaultProps = {
  prevPage: null,
  nextPage: null,
};

export default Navigation;
