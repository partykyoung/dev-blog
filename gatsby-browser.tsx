import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./src/app/styles/var.css";
import "./src/app/styles/global.css";

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
