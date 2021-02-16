/* eslint-disable @typescript-eslint/ban-ts-comment, no-undefined */
// @ts-nocheck
import {normalizePath} from "./index";

describe("test path", (): void => {
    it("should be throw path must be a string", (): void => {
        expect.assertions(3);

        expect(() => normalizePath(12)).toThrow(new TypeError("The path param must be a string."));
        expect(() => normalizePath(null)).toThrow(new TypeError("The path param must be a string."));
        expect(() => normalizePath(undefined)).toThrow(new TypeError("The path param must be a string."));
    });
    it("should be test normalize path", (): void => {
        expect.assertions(9);
        expect(normalizePath("")).toStrictEqual("");
        expect(normalizePath("path/to/my/folder")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("path/to/my/folder/")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("/path/to/my/folder")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("path/to/my///folder")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("path/to/my///folder/")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("//path/to/my///folder/")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("//path///to///my///folder//")).toStrictEqual("path/to/my/folder");
        expect(normalizePath("///path/////////to///////////my/////folder////////")).toStrictEqual("path/to/my/folder");
    });
});
