import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import axios from "axios";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";

import Home from "../components/home";
import { useRouter } from "next/router";
import { loadUser } from "../actions/userAction";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  console.log(user, isAuthenticated, "pirat");
  return <Home />;
}
