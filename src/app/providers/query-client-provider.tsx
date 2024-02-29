import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../../shared/libs/react-query/query-client";

import type { PropsWithChildren } from "react";

function QueryClientProvider(props: PropsWithChildren) {
  const { children } = props;
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
}

export { QueryClientProvider };
