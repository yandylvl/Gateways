import * as actions from "../actions/api";
import http from "../services/httpService";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await http.request({
        baseURL: process.env.REACT_APP_API_URL,
        url,
        method,
        data,
      });
      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));

      if (onError) {
        dispatch({
          type: onError,
          payload: { message: error.message, status: error.response?.status },
        });
      }
    }
  };

export default api;
