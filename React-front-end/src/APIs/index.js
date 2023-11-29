import axios from "../utils/axios";
import { ambigiousError, internetError } from "../content/error.json";
import store from "../stores/index";
import { appSlice } from "../stores/app";

export default async function makeRequest(endpoint, method, data) {
  try {
    const config = {
      method,
      url: endpoint,
      data,
    };
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (!error?.response || !error?.response?.data) {
      // internet error
      if (!window.navigator.onLine) {
        store.dispatch(appSlice.actions.open_error(internetError));
        return internetError;
      }
      store.dispatch(appSlice.actions.open_error(ambigiousError));
      return ambigiousError;
    }

    // server  error
    if (error.response.data.errorLevel == 3) {
      store.dispatch(appSlice.actions.open_error(ambigiousError));
      return ambigiousError;
    }
    // normal error
    return error.response.data;
  }
}
