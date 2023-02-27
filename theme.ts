import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#202031",
  "--jayson-brand": "#1a1a1a",
  "--my-grey": "#202031",
  "--my-lightgrey": "#82828c",
  "--my-yellow": "#e9ca79",
  "--my-green": "#85c285",
  "--my-red": "#ed4227",
};

/* Base Theme Colours */
export const myTheme = buildLegacyTheme({
  "--black": props["--jayson-brand"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  //   Brand
  "--brand-primary": props["--my-yellow"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-yellow"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  // State
  "--state-info-color": props["--my-yellow"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  //   Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-yellow"],
});
