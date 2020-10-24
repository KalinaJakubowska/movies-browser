const unchangeableColors = {
  black: "#000000",
  cornsilk: "#E4E6F0",
  mineShaft: "#333333",
  pattensBlue: "#d6e4ff",
  scienceBlue: "#0044CC",
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
    subtitle: unchangeableColors.waterloo,
    text: unchangeableColors.woodsmoke,
    typeBox: unchangeableColors.cornsilk,
  },
  unchangeableColors,
  breakpoints,
};