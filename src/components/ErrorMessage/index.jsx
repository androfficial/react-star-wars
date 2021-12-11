import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Button } from '@components';

import s from '@styles/style.module.scss';

const ErrorMessage = ({ customHeight, code, message, className, image }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: customHeight,
      }}
      className={s.error}
    >
      <img
        className={cn(s.error_img, className)}
        src={image}
        alt={cn('Error', code)}
      />
      <p className={s.error_text}>{message}</p>
      <Button onClick={() => navigate('/')} arrow outlined>
        Go to Main
      </Button>
    </div>
  );
};

ErrorMessage.propTypes = {
  customHeight: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  code: PropTypes.number,
};

ErrorMessage.defaultProps = {
  code: 500,
};

export default ErrorMessage;
