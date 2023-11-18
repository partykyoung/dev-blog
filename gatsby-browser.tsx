import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./static/styles/prism-one-dark.css";

const queryClient = new QueryClient();

export function wrapRootElement({ element }) {
  return <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>;
};
