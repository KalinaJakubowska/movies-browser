const unchangeableColors = {
  black: "#000000",
  cornsilk: "#E4E6F0",
  darkWoodsmoke: "#111113",
  frenchGray: "#B9BBC1",
  mineShaft: "#333333",
  pattensBlue: "#d6e4ff",
  scienceBlue: "#0044CC",
  shark: "#212327",
  waterloo: "#7E839A",
  whisper: "#F5F5FA",
  white: "#FFFFFF",
  woodsmoke: "#18181B",
};

const breakpoints = {
  mobile: "450",
  bigMobile: "710",
  screenSmall: "1399",
};

export const theme = {
  colors: {
    activeNavButton: unchangeableColors.pattensBlue,
    backButton: unchangeableColors.scienceBlue,
    background: unchangeableColors.whisper,
    detailName: unchangeableColors.stormGray,
    disabledNavButton: unchangeableColors.cornsilk,
    subtitle: unchangeableColors.waterloo,
    text: unchangeableColors.woodsmoke,
    tileBackground: unchangeableColors.white,
    typeBox: unchangeableColors.cornsilk,
  },
  unchangeableColors,
  breakpoints,
};

export const darkTheme = {
  colors: {
    activeNavButton: unchangeableColors.shark,
    backButton: unchangeableColors.scienceBlue,
    background: unchangeableColors.woodsmoke,
    detailName: unchangeableColors.stormGray,
    disabledNavButton: unchangeableColors.darkWoodsmoke,
    shadow: unchangeableColors.shark,
    subtitle: unchangeableColors.waterloo,
    text: unchangeableColors.frenchGray,
    tileBackground: unchangeableColors.black,
    typeBox: unchangeableColors.woodsmoke,
  },
  unchangeableColors,
  breakpoints,
};