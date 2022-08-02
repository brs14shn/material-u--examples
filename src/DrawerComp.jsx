import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const DrawerComp = () => {
  return (
    <React.Fragment>
      <Drawer open={true}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComp;
