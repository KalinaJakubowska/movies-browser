const unchangeableColors = {
  black: "#000000",
  cornsilk: "#E4E6F0",
  darkWoodsmoke: "#111113",
  frenchGray: "#B9BBC1",
  mineShaft: "#333333",
  pattensBlue: "#d6e4ff",
  scienceBlue: "#0044CC",
  shark: "#212327",
  stormGray: "#74788B",
  waterloo: "#7E839A",
  whisper: "#F5F5FA",
  white: "#FFFFFF",
  woodsmoke: "#18181B",
};

const breakpoints = {
  mobile: "480",
  bigMobile: "767",
  screenSmall: "1368",
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
    shadow: unchangeableColors.darkWoodsmoke,
    subtitle: unchangeableColors.waterloo,
    text: unchangeableColors.frenchGray,
    tileBackground: unchangeableColors.black,
    typeBox: unchangeableColors.woodsmoke,
  },
  unchangeableColors,
  breakpoints,
};