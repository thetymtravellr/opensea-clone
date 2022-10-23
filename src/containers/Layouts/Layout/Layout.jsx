import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import theme from "~theme";
import getDesignTokens from "~theme/utils";
import { GlobalContext } from "../../../context/GlobalContext";
export default function Layout({ children }) {
    const { mode } = useContext(GlobalContext);
    const color = getDesignTokens(mode)
    const customTheme = createTheme({ ...color, ...theme })
    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ background: ({ palette }) => palette.background.default}}>
                {/* <Header /> */}
                {children}
            </Box>
        </ThemeProvider>
    )
}