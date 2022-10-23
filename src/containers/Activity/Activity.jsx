import { Box } from "@mui/material";
import FilterHead from "~components/Filter/Head/collction/FilterHead";
import FilterItems from "~components/FilterItems/FilterItems";
import FilterLayout from "~containers/Layouts/FilterLayout";
import Sidebar from "./Sidebar";

const sideBarContent = [
    {
        head: "Event Type"
    },
    {
        head: "Collections"
    },
    {
        head: "Chains"
    },
]

const Activity = () => {
    return (
        <Box>
            <FilterLayout head={<FilterHead filterIcon={true} shadow={true} sideOnly={true} />} sidebar={<Sidebar />} >
                <FilterItems />
            </FilterLayout>
        </Box>
    )
}

export default Activity