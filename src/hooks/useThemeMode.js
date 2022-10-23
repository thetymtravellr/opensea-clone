import { dark } from "@mui/material/styles/createPalette";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "~context/GlobalContext";


const useThemeMode = ()=>{
    const {mode,colorMode} = useContext(GlobalContext);
    const [isDark,setIsDark] = useState(mode === "dark");
    const {toggleMode} = colorMode;
 
    useEffect(()=>{
        setIsDark(mode ==="dark")
    },[mode])
    return{
        mode,
        isDark,
        toggleMode
    }

}

export default useThemeMode;