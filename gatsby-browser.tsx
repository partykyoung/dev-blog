<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { QueryClientProvider } from './src/app/providers/query-client-provider';

import './static/css/prism-one-dark.css';
import './src/app/styles/var.css';
import './src/app/styles/global.css';

export function wrapRootElement({ element }) {
  return <QueryClientProvider>{element}</QueryClientProvider>;
}
=======
=======
=======
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
=======
import React from "react";
import { QueryClientProvider } from "./src/app/providers/query-client-provider";

import "./static/css/prism-one-dark.css";
>>>>>>> 0bd1ab0 (feat: react-query 설정)
import "./src/app/styles/var.css";
>>>>>>> eb5b876 (feat: media query base 작성)
import "./src/app/styles/global.css";
<<<<<<< HEAD
>>>>>>> cf5b257 (feat: global css 적용)
=======

export function wrapRootElement({ element }) {
  return <QueryClientProvider>{element}</QueryClientProvider>;
}
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
