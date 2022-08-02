import {
  AppBar,
  IconButton,
  Tabs,
  Toolbar,
  Typography,
  Tab,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";

import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";

const PAGES = ["PRODUCTS", "SERVİCES", "CONTACT", "ABOUT"];

const Header = () => {
  const [value, setValue] = React.useState("two");

  const theme = useTheme();
  //   console.log(theme);

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0845e4" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                SHOP
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="white"
                value={value}
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
                {/* <Tab label="PRODUCTS" />
                <Tab label="SERVİCES" />
                <Tab label="CONTACT" />
                <Tab label="ABOUT" /> */}
              </Tabs>
              <Stack spacing={2} direction="row" sx={{ marginLeft: "auto" }}>
                <Button variant="contained">Login</Button>
                <Button variant="contained">Sign-Up</Button>
              </Stack>
            </>
          )}
          {/* <Tabs
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
          </Stack> */}
        </Toolbar>
        {/* <DrawerComp /> */}
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
