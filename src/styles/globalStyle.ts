import { css } from '@emotion/react';

function globalStyle() {
  return css`
    html,
    body,
    #root {
      height: 100%;
    }

    body {
      position: relative;
      margin: 0;
      padding: 0;
      word-break: keep-all;
      word-wrap: break-word;
      -webkit-text-size-adjust: none;
      -webkit-overflow-scrolling: touch;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: 500;
    }

    ul,
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: none;
    }

    textarea {
      resize: none;
      outline: none;
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 0;
      border: none;
      outline: none;
      text-align: center;
      background-color: transparent;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }

    a {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }

    i,
    p,
    div,
    span,
    li {
      margin: 0;
    }

    em {
      display: inline-block;
      letter-spacing: -0.03em;
    }

    strong {
      font-weight: 700;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    table caption {
      display: none;
    }

    th,
    td {
      padding: 0;
    }

    input,
    select {
      border-radius: 0;
    }

    input:focus {
      outline: none;
    }

    dl,
    dd {
      margin: 0;
    }

    figure {
      margin: 0;
    }

    legend {
      position: absolute !important;
      left: -9999px;
    }

    img {
      width: 100%;
      vertical-align: top;
    }

    img[usemap],
    map area {
      outline: none;
    }

    hr {
      display: none;
    }

    address {
      font-style: normal;
    }

    /* form */
    input,
    select,
    label,
    button,
    textarea {
      vertical-align: middle;
    }

    [type='file'] {
      cursor: pointer;
    }

    * {
      box-sizing: border-box;
    }

    :root {
      --header-height: 50px;
      --header-zindex: 9;
    }

    /* plugin */
    /* react-alert */
    #__react-alert__ div:first-of-type {
      top: 50px !important;
    }
  `;
}

export default globalStyle;
