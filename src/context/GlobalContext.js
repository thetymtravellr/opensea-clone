import { createTheme, useMediaQuery } from "@mui/material";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const palette = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [filterOn, setFilterOn] = useState(true);
  const [value, setValue] = useState(0);
  const [gridValue, setGridValue] = useState(3);
  const matches = useMediaQuery('(min-width:992px)');
  const [active, setActive] = useState(0);

  return (
    <GlobalContext.Provider value={{
      mode,
      setMode,
      palette,
      colorMode,
      filterOn,
      setFilterOn,
      value,
      setValue,
      gridValue,
      setGridValue,
      matches,
      active,
      setActive,
      menuOpen,
      setMenuOpen
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;