/**
 * Create an ellipsis with a custom length
 * @param {number} length
 * @param {string} text
 * @returns {string}
 */
export const ellipsis = (length: number, text: string): string => {
    if ("number" !== typeof length) {
        throw new TypeError("The length param must be a number.");
    }
    if (Infinity === length || isNaN(length)) {
        throw new TypeError("The length param must be a valid number.");
    }
    if ("string" !== typeof text) {
        throw new TypeError("The text param must be a string.");
    }
    const wantedLength = Number(length) || 0;
    const wantedText = String(text);

    if (wantedText.length > wantedLength) {
        return `${wantedText.slice(0, wantedLength)}...`;
    }

    return wantedText;
};

/**
 * Use a console.log with a console.group for production only
 * @param {string} groupName
 * @param args
 */
export const logger = (groupName: string, ...args: unknown[]): void => {
    if ("string" !== typeof groupName) {
        throw new TypeError("The groupName param must be a string.");
    }
    if ("production" !== process.env.NODE_ENV) {
        console.group(groupName);
        if (args.length) {
            console.log(...args);
        }
        console.groupEnd();
    }
};

/**
 * Check if environment is set
 * Throw an error if one of isn't set
 * Return all environment variable on array
 * @param {string[]} names
 * @param {boolean} toObject
 * @returns {string[]}
 */
export const getEnvsOrThrow = (names: string[], toObject: boolean = false): string[] | Record<string, string> => {
    const environmentVariables: string[] = [];
    let environmentVariablesObject: Record<string, string> = {};

    const checkEnvNames = names.map(name => "string" === typeof name);

    if (!checkEnvNames.every(Boolean)) {
        throw new TypeError("All env name must be a string.");
    }

    for (const name of names) {
        const environmentVariable: string | undefined = process.env[name];

        if ("undefined" === typeof environmentVariable) {
            throw new ReferenceError(`Please, set the ${name} variable in the .env file.`);
        }
        if (toObject) {
            environmentVariablesObject = {
                ...environmentVariablesObject,
                [name]: environmentVariable
            };
        } else {
            environmentVariables.push(environmentVariable);
        }
    }

    if (toObject) {
        return environmentVariablesObject;
    }
    return environmentVariables;
};

/**
 * Adding second to a date
 * @param {Date} oldDate
 * @param {number} seconds
 * @returns {Date}
 */
export const addingSecondsToADate = (oldDate: Date, seconds: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof seconds) {
        throw new TypeError("Seconds parameter must be a number");
    }
    return new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds() + seconds);
};

/**
 * Adding minutes to a date
 * @param {Date} oldDate
 * @param {number} minutes
 * @returns {Date}
 */
export const addingMinutesToADate = (oldDate: Date, minutes: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof minutes) {
        throw new TypeError("Minutes parameter must be a number");
    }
    return new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), oldDate.getHours(), oldDate.getMinutes() + minutes, oldDate.getSeconds());
};

/**
 * Adding Hours to a date
 * @param {Date} oldDate
 * @param {number} hours
 * @returns {Date}
 */
export const addingHoursToADate = (oldDate: Date, hours: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof hours) {
        throw new TypeError("Hours parameter must be a number");
    }
    return new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), oldDate.getHours() + hours, oldDate.getMinutes(), oldDate.getSeconds());
};

/**
 * Adding days to a date
 * @param {Date} oldDate
 * @param {number} days
 * @returns {Date}
 */
export const addingDaysToADate = (oldDate: Date, days: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof days) {
        throw new TypeError("Days parameter must be a number");
    }
    return new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate() + days, oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds());
};

/**
 * Adding months to a date
 * @param {Date} oldDate
 * @param {number} months
 * @returns {Date}
 */
export const addingMonthsToADate = (oldDate: Date, months: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof months) {
        throw new TypeError("Months parameter must be a number");
    }
    return new Date(oldDate.getFullYear(), oldDate.getMonth() + months, oldDate.getDate(), oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds());
};

/**
 * Adding years to a date
 * @param {Date} oldDate
 * @param {number} years
 * @returns {Date}
 */
export const addingYearsToADate = (oldDate: Date, years: number): Date => {
    if (!(oldDate instanceof Date)) {
        throw new TypeError("oldDate must be instanceof DateConstructor");
    }
    if ("number" !== typeof years) {
        throw new TypeError("Years parameter must be a number");
    }
    return new Date(oldDate.getFullYear() + years, oldDate.getMonth(), oldDate.getDate(), oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds());
};
