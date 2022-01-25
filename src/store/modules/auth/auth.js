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
  },
  reducers: {
    authChanged: (
      auth,
      { payload: { isSignedIn, userId, profileName, profilePicUrl } }
    ) => {
      console.log(`entro al authChanged`);

      auth.isSignedIn = isSignedIn;
      auth.userId = userId;
      auth.profileName = profileName;
      auth.profilePicUrl = profilePicUrl;
    },
  },
});

const { authChanged } = slice.actions;
export default slice.reducer;

//
// Action Creators
//

export const initGoogleAuth = () => (dispatch) => {
  googleAuth
    .init()
    .then((googleAuth) => {
      dispatch(updateSignInStatus());
      googleAuth.signInListen(() => dispatch(updateSignInStatus()));
    })
    .catch((error) => console.error(error));
};

const updateSignInStatus = () => (dispatch) => {
  console.log(`entro al status`);
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
