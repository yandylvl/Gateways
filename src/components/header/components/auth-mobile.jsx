import { AppRegistration, Login } from "@mui/icons-material";
import MoreIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthMobile = () => {
  const navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogInClick = () => {
    handleMobileMenuClose();
    navigate("/login");
  };
  const handleSignUpClick = () => {
    handleMobileMenuClose();
    navigate("/signup");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLogInClick}>
        <Login sx={{ mr: 1 }} />
        Log In
      </MenuItem>

      <MenuItem onClick={handleSignUpClick}>
        <AppRegistration sx={{ mr: 1 }} />
        Sign Up
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon color="secondary" />
      </IconButton>

      {renderMobileMenu}
    </React.Fragment>
  );
};

export default React.memo(AuthMobile);
