// class that manages  cookies
export default class ManageCookies {
    // add a new cookie
    static setCookie(name, value, days) {
        const cookieValue =
            encodeURIComponent(value) + "; max-age=" + days * 360 * 24;
        document.cookie = name + "=" + cookieValue + "; path=/; SameSite=Lax";
    }
    // remove a cookie
    static removeCookie(name) {
        if (!this.getCookie(name)) return;

        document.cookie =
            name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // get a cookie based on its name
    static getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [cookieName, cookieValue] = cookies[i].split("=");
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }
}
