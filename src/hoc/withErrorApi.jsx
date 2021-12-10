/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { ErrorMessage, NotFound } from '@components';
import { Error500, Oops } from '@assets/images/ErrorMessage';

import s from '@styles/style.module.scss';

const withErrorApi = (Component) => {
  const AppWrapper = (props) => {
    const { error, code } = useSelector(({ people }) => people.errorApi);

    if (error) {
      switch (code) {
        case 404:
          return <NotFound />;
        case 500:
          return (
            <ErrorMessage
              code={code}
              message='Internal server error'
              className={s.error_img_500}
              image={Error500}
            />
          );

        default:
          return (
            <ErrorMessage
              code={code}
              message='Oops, something went wrong'
              className={s.error_img_oops}
              image={Oops}
            />
          );
      }
    }

    return <Component {...props} />;
  };
  return AppWrapper;
};

export default withErrorApi;
