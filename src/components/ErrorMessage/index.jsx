import { VideoWebM, VideoMp4 } from '@assets/images/ErrorMessage';

import s from '@styles/style.module.scss';

const ErrorMessage = ({ customHeight }) => {
  return (
    <div
      className={s.error}
      style={{
        height: customHeight,
      }}>
      <p className={s.error_text}>
        The dark side of the force has won. <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <video autoPlay muted loop preload="auto" className={s.error_video}>
        <source type="video/webm" src={VideoWebM} />
        <source type="video/mp4" src={VideoMp4} />
      </video>
    </div>
  );
};

export default ErrorMessage;