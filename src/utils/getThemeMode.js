export const getThemeMode =(theme) => {
  const mode = theme.pallete.mode;
  return mode;
}

export const isDarkMode = (theme) => {
  return theme.palette.mode === "dark";
}
export const isDarkSystem = (mode) =>{
  return theme === "dark"
}

export const getPalette =(theme,color) =>{
  // const {theme} = prop;
  return theme.palette[color];
  // return(color)=>{
  //   return theme.palette[color]
  // }
}