import { Toolbar } from "@mui/material"
import Header from "~components/Header"
import Activity from "~containers/Activity"

const ActivityPage = () => {
  return (
    <>
      <Header bg={true} />
      <Toolbar />
      <Activity />
    </>
  )
}

export default ActivityPage