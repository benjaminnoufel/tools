/**
 * Check if it's an email valid
 * @param {string} email
 * @returns {boolean}
 */
export const emailIsValid = (email: string): boolean => {
    if ("string" !== typeof email) {
        throw new TypeError("The email param must be a string.");
    }
    // eslint-disable-next-line prefer-named-capture-group
    return Boolean(email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gu));
};

/**
 * Check if it's a password valid for the CNIL
 * Minimum :
 * One lowercase
 * One uppercase
 * One number
 * Eight character
 * @param {string} password
 * @returns {boolean}
 */
export const passwordIsValid = (password: string): boolean => {
    if ("string" !== typeof password) {
        throw new TypeError("The password param must be a string.");
    }
    if (8 > password.length) {
        return false;
    }
    return Boolean(password.match(/[a-z]+/gu)) && Boolean(password.match(/[A-Z]+/gu)) && Boolean(password.match(/[0-9]+/gu));
};

/**
 * Check if it's a number valid
 * Can be :
 * +33607080910
 * 06007080910
 * @param {string} phone
 * @returns {boolean}
 */
export const phoneNumberIsValid = (phone: string): boolean => {
    if ("string" !== typeof phone) {
        throw new TypeError("The phone param must be a string.");
    }
    return Boolean(phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{9,}$/gu));
};
