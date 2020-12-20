/* eslint-disable @typescript-eslint/ban-ts-comment, no-undefined */
// @ts-nocheck
import {formatCurrency, formatDate, formatNumber, formatRoute} from "./format";

describe("test format", (): void => {
    describe("test format date", (): void => {
        it("should be throw locale must be a string", (): void => {
            expect.assertions(3);

            expect(() => formatDate(12, "12/12/2020")).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatDate(null, "12/12/2020")).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatDate(undefined, "12/12/2020")).toThrow(new TypeError("The locale param must be a string."));
        });
        it("should be test formatDate with fr-FR locale", (): void => {
            expect.assertions(2);
            expect(formatDate("fr-FR", "01/01/2020")).toStrictEqual("01/01/2020");
            expect(formatDate("fr-FR", "2020/05/05")).toStrictEqual("05/05/2020");
        });

        it("should be test formatDate with en-US locale", (): void => {
            expect.assertions(1);
            expect(formatDate("en-US", "10/20/2020")).toStrictEqual("10/20/2020");
        });
    });
    describe("test formatNumber", (): void => {
        it("should be throw locale must be a string", (): void => {
            expect.assertions(3);

            expect(() => formatNumber(12, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatNumber(null, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatNumber(undefined, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
        });
        it("should be throw decimals must be a number", (): void => {
            expect.assertions(3);

            expect(() => formatNumber("fr-FR", "12", 123.452)).toThrow(new TypeError("The decimals param must be a number."));
            expect(() => formatNumber("fr-FR", null, 123.452)).toThrow(new TypeError("The decimals param must be a number."));
            expect(() => formatNumber("fr-FR", undefined, 123.452)).toThrow(new TypeError("The decimals param must be a number."));
        });
        it("should be throw value must be a number", (): void => {
            expect.assertions(3);

            expect(() => formatNumber("fr-FR", 123.452, "12")).toThrow(new TypeError("The value param must be a number."));
            expect(() => formatNumber("fr-FR", 123.452, null)).toThrow(new TypeError("The value param must be a number."));
            expect(() => formatNumber("fr-FR", 123.452, undefined)).toThrow(new TypeError("The value param must be a number."));
        });
        it("should be format number with fr locale", (): void => {
            expect.assertions(4);
            expect(formatNumber("fr-FR", 2, 125.555555555)).toStrictEqual("125,56");
            expect(formatNumber("fr-FR", 2, 125.55)).toStrictEqual("125,55");
            expect(formatNumber("fr-FR", 2, 125.99999999)).toStrictEqual("126,00");
            expect(formatNumber("fr-FR", 2, 125.5)).toStrictEqual("125,50");
        });

        it("should be format number with en-US locale", (): void => {
            expect.assertions(4);
            expect(formatNumber("en-US", 2, 125.555555555)).toStrictEqual("125.56");
            expect(formatNumber("en-US", 2, 125.55)).toStrictEqual("125.55");
            expect(formatNumber("en-US", 2, 125.99999999)).toStrictEqual("126.00");
            expect(formatNumber("en-US", 2, 125.5)).toStrictEqual("125.50");
        });
    });

    describe("test formatCurrency", (): void => {
        it("should be throw locale must be a string", (): void => {
            expect.assertions(3);

            expect(() => formatCurrency(12, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatCurrency(null, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
            expect(() => formatCurrency(undefined, 2, 123.452)).toThrow(new TypeError("The locale param must be a string."));
        });
        it("should be throw currency must be a string", (): void => {
            expect.assertions(3);

            expect(() => formatCurrency("fr-FR", 12, 123.452)).toThrow(new TypeError("The currency param must be a string."));
            expect(() => formatCurrency("fr-FR", null, 123.452)).toThrow(new TypeError("The currency param must be a string."));
            expect(() => formatCurrency("fr-FR", undefined, 123.452)).toThrow(new TypeError("The currency param must be a string."));
        });
        it("should be throw value must be a number", (): void => {
            expect.assertions(3);

            expect(() => formatCurrency("fr-FR", "EUR", "12")).toThrow(new TypeError("The value param must be a number."));
            expect(() => formatCurrency("fr-FR", "EUR", null)).toThrow(new TypeError("The value param must be a number."));
            expect(() => formatCurrency("fr-FR", "EUR", undefined)).toThrow(new TypeError("The value param must be a number."));
        });
        it("should be format number with fr locale", (): void => {
            expect.assertions(4);
            expect(formatCurrency("fr-FR", "EUR", 125.555555555)).toStrictEqual(new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(125.555555555));
            expect(formatCurrency("fr-FR", "EUR", 125.55)).toStrictEqual(new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(125.55));
            expect(formatCurrency("fr-FR", "EUR", 125.99999999)).toStrictEqual(new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(125.99999999));
            expect(formatCurrency("fr-FR", "EUR", 125.5)).toStrictEqual(new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(125.5));
        });

        it("should be format number with en-US locale and USD", (): void => {
            expect.assertions(4);
            expect(formatCurrency("en-US", "USD", 125.555555555)).toStrictEqual(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(125.555555555));
            expect(formatCurrency("en-US", "USD", 125.55)).toStrictEqual(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(125.55));
            expect(formatCurrency("en-US", "USD", 125.99999999)).toStrictEqual(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(125.99999999));
            expect(formatCurrency("en-US", "USD", 125.5)).toStrictEqual(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(125.5));
        });
    });

    describe("test formatRoute", (): void => {
        it("should be throw path must be a string", (): void => {
            expect.assertions(3);

            expect(() => formatRoute(12, {})).toThrow(new TypeError("The path param must be a string."));
            expect(() => formatRoute(null, {})).toThrow(new TypeError("The path param must be a string."));
            expect(() => formatRoute(undefined, {})).toThrow(new TypeError("The path param must be a string."));
        });
        it("should be not change slug", () => {
            expect.assertions(2);
            expect(formatRoute("/order/:id", {reference: "20200101"})).toStrictEqual("/order/:id");
            expect(formatRoute("/order/:id", {})).toStrictEqual("/order/:id");
        });

        it("should be change slug", () => {
            expect.assertions(2);
            expect(formatRoute("/order/:id", {id: "20200101"})).toStrictEqual("/order/20200101");
            expect(formatRoute("/order/:id/:ref", {id: "20200101", ref: "123"})).toStrictEqual("/order/20200101/123");
        });
    });
});
