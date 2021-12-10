import ErrorMessage from '@components/ErrorMessage';
import { Error500 } from '@assets/images/ErrorMessage';

import s from '@styles/style.module.scss';

const Fail = () => (
  <ErrorMessage
    customHeight='calc(100vh - 170px)'
    message='Internal server error'
    className={s.error_img_500}
    image={Error500}
  />
);

export default Fail;
