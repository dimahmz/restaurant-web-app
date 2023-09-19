export default function getResponseMessage(response) {
    if (typeof response.payload === "object") {
        let errors = response.payload;
        let errorMsg = "";
        errors = errors.hasOwnProperty("errors") ? errors.errors : errors;
        Object.keys(errors).forEach((error) => {
            errorMsg = errors[error][0];
            return;
        });
        return errorMsg;
    }
    return response.payload;
}
