import "../styles/globals.css";
import { useDispatch } from "react-redux";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import createEmotionCache from "../styles/createemotionCache";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp, { debug: true });
