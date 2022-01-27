import { createSelector, createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "../../actions/api";

const slice = createSlice({
  name: "gateways",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    errors: "",
    // lastFetch: null,
  },
  reducers: {
    gatewaysRequested: (gateways, action) => {
      gateways.loading = true;
    },
    gatewaysReceived: (gateways, action) => {
      gateways.list = action.payload;
      gateways.loading = false;
      gateways.errors = "";
    },
    gatewaysRequestFailed: (gateways, action) => {
      gateways.loading = false;
      gateways.errors = action.payload.message;
    },
    getGatewayRequested: (gateways, action) => {
      gateways.loading = true;
    },
    getGatewayReceived: (gateways, action) => {
      gateways.selected = action.payload;
      gateways.loading = false;
    },
    getGatewayRequestFailed: (gateways, action) => {
      gateways.loading = false;
      let msg = action.payload.message;
      if (action.payload.status === 404)
        msg = "The requested gateway could not be found";
      gateways.errors = msg;
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
      gateways.errors = msg;
    },
    gatewayDeleted: (gateways, action) => {
      gateways.list = gateways.list.filter((g) => g.id !== action.payload);
      gateways.selected = null;
    },
    gatewayDeleteFailed: (gateways, action) => {
      gateways.loading = false;
      //TODO: improve handling type of error
      let msg = action.payload.message;
      if (action.payload.status === 404)
        msg = "This gateway has already been deleted";
      gateways.errors = msg;
    },
    gatewayEdited: (gateways, action) => {
      const index = gateways.list.findIndex((g) => g.id === action.payload.id);
      gateways.list[index] = action.payload;
      gateways.selected = null;
    },
    gatewayEditFailed: (gateways, action) => {
      //TODO: improve handling type of error
      gateways.errors = action.payload.message;
    },
  },
});

const {
  gatewaysReceived,
  gatewaysRequested,
  gatewaysRequestFailed,
  getGatewayReceived,
  getGatewayRequested,
  getGatewayRequestFailed,
  gatewayAdded,
  gatewayAddFailed,
  gatewayDeleted,
  gatewayDeleteFailed,
  gatewayEdited,
  gatewayEditFailed,
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
    onStart: getGatewayRequested.type,
    onSuccess: getGatewayReceived.type,
    onError: getGatewayRequestFailed.type,
  });

export const addGateway = (gateway) =>
  apiCallBegan({
    url,
    method: "post",
    data: gateway,
    onSuccess: gatewayAdded.type,
    onError: gatewayAddFailed.type,
  });

export const deleteGateway = (gatewayId) =>
  apiCallBegan({
    url: `${url}/${gatewayId}`,
    method: "delete",
    data: gatewayId,
    onSuccess: gatewayDeleted.type,
    onError: gatewayDeleteFailed.type,
  });

//TODO: improve using patch
export const editGateway = (gateway) =>
  apiCallBegan({
    url: `${url}/${gateway.id}`,
    method: "put",
    data: gateway,
    onSuccess: gatewayEdited.type,
    onError: gatewayEditFailed.type,
  });

//
// Selector
//

export const getGatewaysByPeripheralsCount = (filterCount) =>
  createSelector(
    (state) => state.entities.gateways.list,
    (list) =>
      filterCount === ""
        ? list
        : list.filter((g) => g.peripherals.length === filterCount)
  );
