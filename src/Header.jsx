import {
  AppBar,
  IconButton,
  Tabs,
  Toolbar,
  Typography,
  Tab,
  Stack,
} from "@mui/material";
import Button from "@mui/material/Button";

import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";

const Header = () => {
  const [value, setValue] = React.useState("two");
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0845e4" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          <Tabs
            textColor="white"
            value={value}
            indicatorColor="secondary"
            onChange={(e, value) => setValue(value)}
          >
            <Tab label="PRODUCTS" />
            <Tab label="SERVİCES" />
            <Tab label="CONTACT" />
            <Tab label="ABOUT" />
          </Tabs>
          <Stack spacing={2} direction="row" sx={{ marginLeft: "auto" }}>
            <Button variant="contained">Login</Button>
            <Button variant="contained">Sign-Up</Button>
          </Stack>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
