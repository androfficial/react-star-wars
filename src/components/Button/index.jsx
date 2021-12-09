import cn from 'classnames';
import PropTypes from 'prop-types';

import s from '@styles/style.module.scss';

const Button = ({ onClick, children, arrow, init, outlined }) => {
  return (
    <div className={s.go_back_top}>
      <button onClick={onClick} className={cn(s.go_back_link, {
        [s.go_back_link_init]: init,
        [s.go_back_link_outlined]: outlined,
      })}>
        {arrow && (
          <svg viewBox="0 0 443.52 443.52">
            <path
              d="M143.492,221.863L336.226,29.129c6.663-6.664, 6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                L143.492,221.863z"
            />
          </svg>
        )}
        <span>{children}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  arrow: PropTypes.bool,
  init: PropTypes.bool,
  outlined: PropTypes.bool,
};

export default Button;