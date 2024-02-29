import { clsx } from "clsx";
import { type ButtonHTMLAttributes } from "react";

import { buttonRoot } from "./button.module.css";
import * as styles from "./button-variants.module.css";

type Variants = "fill" | "outline";
type Colors = "primary" | "danger" | "warning" | "success";
type Props = {
  variant?: Variants;
  color?: Colors;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, color, variant, ...props }: Props) {
  return (
    <button
      className={clsx(
        buttonRoot,
        variant && styles[variant],
        color && styles[color],
        className
      )}
      {...props}
    />
  );
}

export { Button };
