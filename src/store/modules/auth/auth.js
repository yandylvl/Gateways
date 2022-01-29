import { createSlice } from "@reduxjs/toolkit";

import GoogleAuth from "../../apis/googleAuth";

const googleAuth = new GoogleAuth();
let authChangedCallback;

const loginData = JSON.parse(localStorage.getItem("loginData"));

const slice = createSlice({
  name: "auth",
  initialState: {
    isSignedIn: loginData?.isSignedIn,
    userId: loginData?.userId,
    profileName: loginData?.profileName,
    profilePicUrl: loginData?.profilePicUrl,
    errors: [],
  },
  reducers: {
    authChanged: (
      auth,
      { payload: { isSignedIn, userId, profileName, profilePicUrl } }
    ) => {
      auth.isSignedIn = isSignedIn;
      auth.userId = userId;
      auth.profileName = profileName;
      auth.profilePicUrl = profilePicUrl;
      auth.errors.length = 0;
    },
    authError: (auth, action) => {
      auth.errors.push(action.payload);
    },
  },
});

const { authChanged, authError } = slice.actions;
export default slice.reducer;

//
// Action Creators
//

export const initGoogleAuth = () => (dispatch, getState) => {
  googleAuth
    .init()
    .then((googleAuth) => {
      if (!getState().auth?.isSignedIn) dispatch(updateSignInStatus());
      googleAuth.signInListen(() => dispatch(updateSignInStatus()));
    })
    .catch((error) => console.error(error));
};

const updateSignInStatus = () => (dispatch) => {
  const isSignedIn = googleAuth.isSignedIn();

  const userInfo = {
    isSignedIn,
    userId: isSignedIn ? googleAuth.userId() : null,
    profileName: isSignedIn ? googleAuth.userName() : "",
    profilePicUrl: isSignedIn ? googleAuth.userImageUrl() : "",
  };

  dispatch(authChanged(userInfo));

  if (authChangedCallback) authChangedCallback();

  isSignedIn
    ? localStorage.setItem("loginData", JSON.stringify(userInfo))
    : localStorage.removeItem("loginData");
};

export const tryLoginWithGoogle = (callback) => () => {
  authChangedCallback = callback;
  googleAuth.signIn();
};

export const tryLogoutFormGoogle = (callback) => () => {
  authChangedCallback = callback;
  googleAuth.signOut();
};

//FIXME: improve using api middleware, right now is like this in order to gain in time

export const tryManualLogin = (dataInfo) => (dispatch) => {
  fetch("https://gateways-json-server.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: dataInfo.email,
      password: dataInfo.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const userInfo = {
        isSignedIn: true,
        userId: data.user.id,
        profileName: data.user.firstName,
        profilePicUrl: "",
      };

      dispatch(authChanged(userInfo));

      localStorage.setItem("loginData", JSON.stringify(userInfo));
    })
    .catch((error) => {
      dispatch(authError("Invalid login credentials"));
    });
};

export const trySignup = (dataInfo) => (dispatch) => {
  fetch("https://gateways-json-server.herokuapp.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: dataInfo.email,
      password: dataInfo.password,
      firstName: dataInfo.firstName,
      lastName: dataInfo.lastName,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const userInfo = {
        isSignedIn: true,
        userId: data.user.id,
        profileName: data.user.firstName,
        profileLastName: data.user.lastName,
        profilePicUrl: "",
      };

      dispatch(authChanged(userInfo));

      localStorage.setItem("loginData", JSON.stringify(userInfo));
    })
    .catch((error) => {
      dispatch(authError("This email already exist"));
    });
};

export const tryManualLogout = () => (dispatch) => {
  localStorage.removeItem("loginData");
  dispatch(
    authChanged({
      isSignedIn: false,
      userId: "",
      profileName: "",
      profilePicUrl: "",
    })
  );
};
