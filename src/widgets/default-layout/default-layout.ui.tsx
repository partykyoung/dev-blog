import type { PropsWithChildren } from "react";

import { Header } from "../header";
import { Footer } from "../footer";
import { BasicLayout } from "../basic-layout";

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <BasicLayout>{children}</BasicLayout>
      <Footer />
    </>
  );
}

export { DefaultLayout };
