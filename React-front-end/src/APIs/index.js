export default async function apiPromise(apiFunc) {
  try {
    const response = await apiFunc();
    console.log(apiFunc);
    return response.data;
  } catch (e) {
    let data = e.response?.data;
    if (data) return data;
    return serverError;
  }
}

const serverError = {
  data: null,
  message: "a server error has occurred please try again later",
  success: false,
};
