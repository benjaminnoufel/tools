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
 * @returns {string[]}
 */
export const getEnvsOrThrow = (names: string[]): string[] => {
    const environmentVariables: string[] = [];

    const checkEnvNames = names.map(name => "string" === typeof name);

    if (!checkEnvNames.every(Boolean)) {
        throw new TypeError("All env name must be a string.");
    }

    for (const name of names) {
        const environmentVariable: string | undefined = process.env[name];

        if ("undefined" === typeof environmentVariable) {
            throw new ReferenceError(`Please, set the ${name} variable in the .env file.`);
        }

        environmentVariables.push(environmentVariable);
    }

    return environmentVariables;
};
