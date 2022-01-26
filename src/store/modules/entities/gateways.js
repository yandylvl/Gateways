import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "../../actions/api";

const slice = createSlice({
  name: "gateways",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    errors: [],
    // lastFetch: null,
  },
  reducers: {
    gatewaysRequested: (gateways, action) => {
      gateways.loading = true;
    },
    gatewaysReceived: (gateways, action) => {
      gateways.list = action.payload;
      gateways.loading = false;
      gateways.errors.length = 0;
    },
    gatewaysRequestFailed: (gateways, action) => {
      console.log(`entro a gatewaysRequestFailed`);
      gateways.loading = false;
      gateways.errors.push(action.payload.message);
    },
    gatewayReceived: (gateways, action) => {
      gateways.selected = action.payload;
      gateways.loading = false;
    },
    gatewayAdded: (gateways, action) => {
      gateways.list.push(action.payload);
    },
    gatewayAddFailed: (gateways, action) => {
      gateways.loading = false;
      //TODO: improve handling type of error
      let msg = action.payload.message;
      if (action.payload.status === 500)
        msg = "There is already a gateway with the provided Serial Number";
      gateways.errors.push(msg);
    },
  },
});

const {
  gatewaysReceived,
  gatewaysRequested,
  gatewaysRequestFailed,
  gatewayReceived,
  gatewayAdded,
  gatewayAddFailed,
} = slice.actions;
export default slice.reducer;

//
// Action Creators
//

const url = "/gateways";

export const loadGateways = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url,
      onStart: gatewaysRequested.type,
      onSuccess: gatewaysReceived.type,
      onError: gatewaysRequestFailed.type,
    })
  );
};

export const getGateway = (gatewayId) =>
  apiCallBegan({
    url: `${url}/${gatewayId}`,
    onStart: gatewaysRequested.type,
    onSuccess: gatewayReceived.type,
    onError: gatewaysRequestFailed.type,
  });

export const addGateway = (gateway) =>
  apiCallBegan({
    url,
    method: "post",
    data: gateway,
    onSuccess: gatewayAdded.type,
    onError: gatewayAddFailed.type,
  });

//
// Selector
//

//TODO: create Selectors
