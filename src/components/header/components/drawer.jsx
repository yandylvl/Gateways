import {
  Assignment,
  Diamond,
  ExpandLess,
  ExpandMore,
  Router,
  ManageAccounts,
  Menu,
  Settings,
  DevicesOther,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";

const DrawerMenu = () => {
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const closeDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsMenuOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const openDrawer = () => {
    setIsMenuOpen(true);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List onClick={closeDrawer} onKeyDown={closeDrawer}>
        <ListItem button>
          <ListItemIcon>
            <Router color="primary" />
          </ListItemIcon>
          <ListItemText primary="Gateways" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DevicesOther color="primary" />
          </ListItemIcon>
          <ListItemText primary="Peripherals" />
        </ListItem>
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
