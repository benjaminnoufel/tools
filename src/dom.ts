import {logger} from "./utils";

interface AppendScriptAttributes extends Partial<HTMLScriptElement> {
    src: string;
    async: boolean;
}

interface AppendStylesheetAttributes extends Partial<HTMLLinkElement> {
    href: string;
    rel: string;
}

/**
 * Append a style on DOM
 * @param {AppendStylesheetAttributes} attr
 * @returns {Promise<string | void>}
 */
export const appendStylesheet = (attr: AppendStylesheetAttributes): Promise<string | void> => new Promise((resolve: (value: void) => void): void => {
    if (!attr.href) {
        throw new Error("href is required");
    }
    if ("string" !== typeof attr.href) {
        throw new TypeError("href must be a string");
    }
    if (document.querySelector(`link[rel="${attr.rel}"][href="${attr.href}"]`)) {
        resolve();
        return;
    }
    const stylesheet: HTMLElement = document.createElement("link");
    const attributes = Object.entries(attr);
    attributes.forEach(attribute => {
        stylesheet.setAttribute(attribute[0], attribute[1]);
    });
    stylesheet.addEventListener("load", () => {
        logger(`Loaded stylesheet: ${attr.href}`);
        resolve();
    });
    document.head.appendChild(stylesheet);
});

/**
 * Append a script to the dom
 * @param {HTMLScriptElement} attr
 * @returns {Promise<void | string>}
 */
export const appendScript = (attr: AppendScriptAttributes): Promise<void | string> => new Promise((resolve: (value: void) => void): void => {
    if (!attr.src) {
        throw new Error("src is required");
    }
    if ("string" !== typeof attr.src) {
        throw new TypeError("src must be a string");
    }

    if (document.querySelector(`script[src="${attr.src}"]`)) {
        logger(`Loaded script: ${attr.src}`);

        resolve();
        return;
    }

    const script: HTMLScriptElement = document.createElement("script");
    const attributes = Object.entries(attr);
    attributes.forEach(attribute => {
        script.setAttribute(attribute[0], attribute[1]);
    });

    document.head.appendChild(script);

    script.addEventListener("load", (): void => {
        logger(`Loaded script: ${attr.src}`);
        resolve();
    });
});
