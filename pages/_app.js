import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import createEmotionCache from "../styles/createemotionCache";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadUser } from "../actions/userAction";
import wrapper from "../store";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    console.log(user, "raveena");
    if (user.username) {
      console.log("crazystaag");
      router.push("/");
    } 
  }, [user]);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp, { debug: true });
