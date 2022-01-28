import { Logout, ManageAccounts, Person } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  tryLogoutFormGoogle,
  tryManualLogout,
} from "../../../store/modules/auth/auth";

const ProfileSettings = () => {
  const profileImage = useSelector((state) => state.auth.profilePicUrl);
  const profileName = useSelector((state) => state.auth.profileName);

  const navigate = useNavigate();

  const theme = useTheme();

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogoutClick = useCallback(
    (event) => {
      event.preventDefault();
      //FIXME: use the right logout method based on the login method
      dispatch(tryLogoutFormGoogle(navigate("/", { replace: true })));
      dispatch(tryManualLogout(navigate("/", { replace: true })));
    },
    [dispatch, navigate]
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ManageAccounts sx={{ mr: 1 }} /> Profile
      </MenuItem>
      <MenuItem onClick={handleLogoutClick}>
        <Logout sx={{ mr: 1 }} /> Logout
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="secondary"
      >
        <Avatar
          alt={profileName}
          src={profileImage}
          sx={{
            width: 24,
            height: 24,
            bgcolor: "transparent",
            color: theme.palette.secondary.main,
          }}
        >
          <Person />
        </Avatar>
      </IconButton>
      {renderMenu}
    </React.Fragment>
  );
};

export default ProfileSettings;
