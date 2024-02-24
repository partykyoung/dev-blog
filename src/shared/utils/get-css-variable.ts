type BreakPointType =
  | "compact"
  | "xxSmall"
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge"
  | "ultraWide";

export function getCssVariable(variableKey: string) {
  if (!window || !document.documentElement) return null;

  const { getComputedStyle } = window;
  const { documentElement: rootElement } = document;

  const cssVariable =
    getComputedStyle(rootElement).getPropertyValue(variableKey);

  return cssVariable || null;
}

export function getBreakpointsVariable(device?: BreakPointType) {
  function parseIntVariable(variableKey: string) {
    return Number.parseInt(getCssVariable(variableKey) ?? "0");
  }

  const breakpoints = {
    compact: parseIntVariable("--base-compact-device"),
    xxSmall: parseIntVariable("--base-xx-small-device"),
    xSmall: parseIntVariable("--base-x-small-device"),
    small: parseIntVariable("--base-small-device"),
    medium: parseIntVariable("--base-medium-device"),
    large: parseIntVariable("--base-large-device"),
    xLarge: parseIntVariable("--base-extra-large-device"),
    xxLarge: parseIntVariable("--base-extra-extra-large-device"),
    ultraWide: parseIntVariable("--base-ultra-wide-device"),
  };

  return device ? breakpoints[device] : breakpoints;
}
