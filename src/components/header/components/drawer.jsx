import {
  Assignment,
  DevicesOther,
  Diamond,
  ExpandLess,
  ExpandMore,
  ManageAccounts,
  Menu,
  Router,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { drawerToggled } from "../../../store/modules/ui/drawer";

const DrawerMenu = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.drawer.isDrawerOpen);

  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const closeDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(drawerToggled({ isOpen: false }));
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const openDrawer = () => {
    dispatch(drawerToggled({ isOpen: true }));
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List onClick={closeDrawer} onKeyDown={closeDrawer}>
        <Link component={RouterLink} to="/gateways">
          <ListItem button>
            <ListItemIcon>
              <Router color="primary" />
            </ListItemIcon>
            <ListItemText primary="Gateways" />
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/peripherals">
          <ListItem button>
            <ListItemIcon>
              <DevicesOther color="primary" />
            </ListItemIcon>
            <ListItemText primary="Peripherals" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <Assignment color="primary" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>

      <Divider sx={{ borderBottomColor: "rgba(255, 171, 0, 0.12)" }} />

      <List>
        <ListItem button onClick={toggleSettings}>
          <ListItemIcon>
            <Settings color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {isSettingsOpen ? (
            <ExpandLess color="primary" />
          ) : (
            <ExpandMore color="primary" />
          )}
        </ListItem>
        <Collapse in={isSettingsOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon>
                <ManageAccounts color="primary" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Diamond color="primary" />
          </ListItemIcon>
          <ListItemText primary="Other" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openDrawer}
        color="primary"
        sx={{ flexGrow: 0, mt: 0.35, mr: { xs: 0, md: 0.5 } }}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={closeDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.primary.main,
            mt: { xs: "56px", sm: "64px" },
            bgcolor: theme.palette.background.dark,
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

// not using React.memo() becuase I want the Drawer re-render when auhtorization componet re-render (auth state change)
export default DrawerMenu;
