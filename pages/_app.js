import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    console.log('MyApp -> pageProps', pageProps);

    return <Component {...pageProps} />;
}

export default MyApp;
