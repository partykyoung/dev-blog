import type { PropsWithChildren } from "react";

import { basicLayoutRoot } from "./basic-layout.module.css";

function BasicLayout({ children }: PropsWithChildren) {
  return <div className={basicLayoutRoot}>{children}</div>;
}

export { BasicLayout };
