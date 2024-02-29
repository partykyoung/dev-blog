import React from 'react';
import { QueryClientProvider } from './src/app/providers/query-client-provider';

import './static/css/prism-one-dark.css';
import './src/app/styles/var.css';
import './src/app/styles/global.css';

export function wrapRootElement({ element }) {
  return <QueryClientProvider>{element}</QueryClientProvider>;
}
