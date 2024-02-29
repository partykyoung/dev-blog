<<<<<<< HEAD
import React from 'react';
import { QueryClientProvider } from './src/app/providers/query-client-provider';

import './static/css/prism-one-dark.css';
import './src/app/styles/var.css';
import './src/app/styles/global.css';
=======
import React from "react";
import { QueryClientProvider } from "./src/app/providers/query-client-provider";

import "./static/css/prism-one-dark.css";
import "./src/app/styles/var.css";
import "./src/app/styles/global.css";
>>>>>>> 0bd1ab0 (feat: react-query 설정)

export function wrapRootElement({ element }) {
  return <QueryClientProvider>{element}</QueryClientProvider>;
}
