/* eslint-disable no-prototype-builtins */
// write functional tests to this function
export default function getResponseMessage(response) {
  if (response.success) return response.message;
  if (typeof response.payload === "object") {
    let errors = response.payload;
    let errorMsg = response.message;
    if (errors)
      Object.keys(errors)?.forEach((error) => {
        errorMsg = errors[error][0];
        return;
      });
    return errorMsg;
  }
  return response.message;
}
