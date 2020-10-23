import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  console.log('MyApp -> pageProps', pageProps);

  return <Component {...pageProps} />;
};

export default MyApp;
