//@flow

export default () => {
  if (__DEV__) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [logger];
  }
  return [];
};
