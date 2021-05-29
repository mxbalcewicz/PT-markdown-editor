import { refreshTimeoutOffset } from '../constants/jwt';

export const getExpireTimeWithOffset = (expireInSeconds: number) => {
  const expireInMilliseconds = expireInSeconds * 1000;

  if (expireInMilliseconds < refreshTimeoutOffset)
    return expireInMilliseconds * 0.5;

  return expireInMilliseconds - refreshTimeoutOffset;
};
