import { useNavigate } from 'react-router-dom';
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
      className={s.error}>
      <img className={cn(s.error_img, className)} src={image} alt={cn('Error', code)} />
      <p className={s.error_text}>{message}</p>
      <Button onClick={() => navigate('/')} arrow outlined>Go to Main</Button>
    </div>
  );
};

export default ErrorMessage;