/**
 * Format path for don't have "/" before and after
 * And do not have double "/"
 * @param {string} path
 * @returns {string}
 */
export const normalizePath = (path: string): string => {
    if ("string" !== typeof path) {
        throw new TypeError("The path param must be a string.");
    }
    return path.replace(/\/+/gu, "/").replace(/^\//u, "").replace(/\/$/u, "");
};
