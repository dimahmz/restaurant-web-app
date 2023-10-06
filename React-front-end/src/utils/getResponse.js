/* eslint-disable no-prototype-builtins */
// write functional tests to this function
export default function getResponseMessage(response) {
  if (typeof response.payload === "object") {
    let errors = response.payload;
    let errorMsg = response.message;
    errors = errors?.hasOwnProperty("errors") ? errors.errors : null;
    if (errors)
      Object.keys(errors)?.forEach((error) => {
        errorMsg = errors[error][0];
        return;
      });
    return errorMsg;
  }
  return response.message;
}
