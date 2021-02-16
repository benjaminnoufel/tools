/**
 * Format a number to a currency with locale
 * @param {string} locale
 * @param {string} currency
 * @param {number} value
 * @returns {string}
 */
export const formatCurrency = (locale: string, currency: string, value: number): string => {
    if ("string" !== typeof locale) {
        throw new TypeError("The locale param must be a string.");
    }
    if ("string" !== typeof currency) {
        throw new TypeError("The currency param must be a string.");
    }
    if ("number" !== typeof value) {
        throw new TypeError("The value param must be a number.");
    }
    return new Intl.NumberFormat(locale, {style: "currency", currency}).format(value);
};

/**
 * Format a number a good fractionDigits from choosen local
 * @param {string} locale
 * @param {number} maximumFractionDigits
 * @param {number} value
 * @returns {string}
 */
export const formatNumber = (locale: string, decimals: number, value: number): string => {
    if ("string" !== typeof locale) {
        throw new TypeError("The locale param must be a string.");
    }
    if ("number" !== typeof decimals) {
        throw new TypeError("The decimals param must be a number.");
    }
    if ("number" !== typeof value) {
        throw new TypeError("The value param must be a number.");
    }
    return new Intl.NumberFormat(locale, {maximumFractionDigits: decimals, minimumFractionDigits: decimals}).format(value);
};

/**
 * Format date with chosen locale
 * @param {string} locale
 * @param {string | Date} date
 * @returns {string}
 */
export const formatDate = (locale: string, date: string | Date): string => {
    if ("string" !== typeof locale) {
        throw new TypeError("The locale param must be a string.");
    }
    return new Intl.DateTimeFormat(locale).format(new Date(date));
};

/**
 * Format route
 * Change a slug with a params
 * @param {string} path
 * @param {Record<string, string>} obj
 * @returns {any}
 */
export const formatRoute = (path: string, obj: Record<string, string>): string => {
    if ("string" !== typeof path) {
        throw new TypeError("The path param must be a string.");
    }
    return Object.entries(obj).reduce((text: string, [key, value]: [string, string]) => text.replace(`:${key}`, value), path);
};

