import React from 'react';
import { Global, css } from "@emotion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import type { ReactNode } from "react";
import globalStyle from '../styles/globalStyle';

type Props = {
  children: ReactNode;
}

function DefaultTemplate({ children }: Props) {
  return (
    <>
      <Global styles={globalStyle()} />
      <Header />
      <div css={cssProps.root}>
        {children}
      </div>
      <Footer />
    </>
  )
}

const cssProps = {
  root: css({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1200px'
  })
}

export default DefaultTemplate;
