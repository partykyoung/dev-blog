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
import "./src/app/styles/var.css";
>>>>>>> eb5b876 (feat: media query base 작성)
import "./src/app/styles/global.css";
<<<<<<< HEAD
>>>>>>> cf5b257 (feat: global css 적용)
=======

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

export function wrapRootElement({ element }) {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
}
>>>>>>> d8737b0 (refactor: fsd 아키텍쳐에 맞춰 posts 컴포넌트 리팩토링)
