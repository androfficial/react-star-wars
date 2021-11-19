import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import NotFoundImage from '@assets/images/NotFound/not-found.png';

import s from '@styles/style.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={s.not_found}>
      <img src={NotFoundImage} alt="Not Found" />
      <Button onClick={() => navigate('/')} arrow outlined>Go to Main</Button>
    </div>
  );
};

export default NotFound;