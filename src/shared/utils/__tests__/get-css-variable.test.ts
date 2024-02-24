import { getCssVariable, getBreakpointsVariable } from "../get-css-variable";

describe("getCssVariable", () => {
  beforeAll(() => {
    Object.defineProperty(window, "getComputedStyle", {
      value: jest.fn().mockImplementation(() => ({
        getPropertyValue: jest.fn().mockImplementation((variable) => {
          return variable === "--test-variable" ? "test-values" : "";
        }),
      })),
    });
  });

  it("css variable이 있으면 해당 css variable을 반환한다", () => {
    const variableKey = "--test-variable";
    const expectedValue = "test-values";
    const value = getCssVariable(variableKey);

    expect(value).toEqual(expectedValue);
  });

  it("css variable이 없으면 null을 반환한다", () => {
    const variableKey = "--nonexistent-variable";
    const value = getCssVariable(variableKey);

    expect(value).toBeNull();
  });
});

describe("getBreakpointsVariable", () => {
  beforeAll(() => {
    Object.defineProperty(window, "getComputedStyle", {
      value: jest.fn().mockImplementation(() => ({
        getPropertyValue: jest.fn().mockImplementation((variable) => {
          switch (variable) {
            case "--base-compact-device":
              return "320";
            case "--base-xx-small-device":
              return "360";
            case "--base-x-small-device":
              return "480";
            case "--base-small-device":
              return "576";
            case "--base-medium-device":
              return "768";
            case "--base-large-device":
              return "992";
            case "--base-extra-large-device":
              return "1200";
            case "--base-extra-extra-large-device":
              return "1400";
            case "--base-ultra-wide-device":
              return "1920";
            default:
              return "";
          }
        }),
      })),
    });
  });

  it("해당 device에 관련된 css variable이 있으면 해당 css variable을 반환한다", () => {
    const expectedValue = 576;
    const value = getBreakpointsVariable("small");

    expect(value).toEqual(expectedValue);
  });

  it("만약 특정 device가 없다면 breakpoint 객체를 반환한다", () => {
    expect(getBreakpointsVariable()).toEqual({
      compact: 320,
      xxSmall: 360,
      xSmall: 480,
      small: 576,
      medium: 768,
      large: 992,
      xLarge: 1200,
      xxLarge: 1400,
      ultraWide: 1920,
    });
  });
});
