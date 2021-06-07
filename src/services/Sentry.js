import RemoteScript from './RemoteScript';

export const getSentryDsn = () => {
  if (process.env.REACT_APP_SENTRY_DSN) {
    return process.env.REACT_APP_SENTRY_DSN;
  }
  return "";
};

export const addSentry = () => {
  if (getSentryDsn()) {
    RemoteScript(["https://cdn.ravenjs.com/3.19.1/raven.min.js"]).then(() => {
      window.Raven.config(getSentryDsn(), { release: '1.3.0' }).install();
    });
  }
};

export const throwMessage = (message) => {
  if (typeof window.Raven === 'object') {
    throw new Error(message);
  }
};

export default {
  getSentryDsn,
  addSentry,
  throwMessage
};
