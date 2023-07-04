const mq = {
  sss: 320,
  xxs: 360,
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xlst: 1920,
} as const;

type BreakPoint = keyof typeof mq;

/**
 * @param breakPoint xxs: 360px, xs: 480px, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1600px, xlst: 1920px
 */
export function mqMax(breakPoint: BreakPoint) {
  return `@media screen and (max-width: ${mq[breakPoint] - 0.02}px)`;
}

/**
 * @param breakPoint xss: 320 ss: 360px, xs: 480px, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1600px, xlst: 1920px
 */
export function mqMin(breakPoint: BreakPoint) {
  return `@media screen and (min-width: ${mq[breakPoint]}px)`;
}
