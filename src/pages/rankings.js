import { Toolbar } from "@mui/material";
import Header from "~components/Header";
import Rankings from "~containers/Rankings";

export default function RankingPage() {
    return (
        <>
        <Header bg={true}/>
            <Toolbar />
            <Rankings />
        </>
    )
}
