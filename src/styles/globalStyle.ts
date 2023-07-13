import { css } from '@emotion/react';

function globalStyle() {
  return css`
    html,
    body {
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

    #___gatsby {
      min-width: 280px;
      width: 100%;
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
      --base-blue: 202, 100%;
      --base-gray: 211, 19%;
      --base-danger: 358, 67%;
      --base-warning: 1, 100%;
      --base-success: 168, 100%;

      --palette-blue-10: var(--base-blue), 92%;
      --palette-blue-50: var(--base-blue), 59%;
      --palette-blue-100: var(--base-blue), 27%;

      --palette-gray-10: var(--base-gray), 91%;
      --palette-gray-20: var(--base-gray), 84%;
      --palette-gray-40: var(--base-gray), 76%;
      --palette-gray-60: var(--base-gray), 68%;
      --palette-gray-80: var(--base-gray), 53%;
      --palette-gray-100: var(--base-gray), 33%;

      --primary-color: hsla(var(--palette-blue-50), 100%);
      --secondary-color: hsla(var(--palette-blue-10), 100%);

      --danger-color: hsla(var(--base-danger), 55%);
      --warning-color: hsla(var(--base-warning), 71%);
      --success-color: hsla(var(--base-success), 38%);

      --header-height: 64px;
    }
  `;
}

export default globalStyle;
