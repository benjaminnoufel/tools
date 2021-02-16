import {logger} from "./utils";

/**
 * Append a style on DOM
 * @param {string} href
 * @returns {Promise<string | void>}
 */
export const appendStylesheet = (href: string): Promise<string | void> => new Promise((resolve: (value: void) => void): void => {
    if (!href) {
        throw new Error("href is required");
    }
    if ("string" !== typeof href) {
        throw new TypeError("href must be a string");
    }
    if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
        resolve();
        return;
    }
    const stylesheet: HTMLElement = document.createElement("link");

    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", href);
    stylesheet.addEventListener("load", () => {
        logger(`Loaded stylesheet: ${href}`);
        resolve();
    });
    document.head.appendChild(stylesheet);
});

/**
 * Append a script on DOM
 * @param {string} src
 * @returns {Promise<void>}
 */
export const appendScript = (src: string): Promise<void> => new Promise((resolve: (value: void) => void): void => {
    if (!src) {
        throw new Error("src is required");
    }
    if ("string" !== typeof src) {
        throw new TypeError("src must be a string");
    }

    if (document.querySelector(`script[src="${src}"]`)) {
        logger(`Loaded script: ${src}`);

        resolve();
        return;
    }

    const script: HTMLScriptElement = document.createElement("script");

    script.setAttribute("src", src);
    script.setAttribute("async", "");

    document.head.appendChild(script);

    script.addEventListener("load", (): void => {
        resolve();
    });
});
