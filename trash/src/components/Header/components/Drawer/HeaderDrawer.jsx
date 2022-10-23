
import { Link, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import * as React from 'react';
import WalletItemList from "../../../WalletItems/WalletItemList";
import DrawerHeader from "./Header";
import { DrawerStyled, ListTextStyled } from './style';
export default function HeaderDrawer({ state, onClose }) {

    return (
        <>
            <DrawerStyled
                BackdropProps={{ style: { opacity: .6,background:"#000" } }}
                anchor={'right'}
                open={state}
                onClose={onClose(false)}
                as={Drawer}
            >
                <Toolbar/>
                <DrawerHeader />
                <ListTextStyled as={Typography}>
                    If you {"don't"} have a <Link href="/">wallet</Link> yet, you can select a provider and create one now.
                </ListTextStyled>
                <WalletItemList />
            </DrawerStyled>
        </>
    );
}
