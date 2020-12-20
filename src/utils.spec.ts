/* eslint-disable @typescript-eslint/ban-ts-comment, no-undefined */
// @ts-nocheck
import {ellipsis, getEnvsOrThrow, logger} from "./utils";

describe("test utils function", (): void => {
    describe("test ellipses function", (): void => {
        it("should be throw length must be a number or a valid number", (): void => {
            expect.assertions(5);
            expect(() => ellipsis("0", "Bonjour à tous")).toThrow(new TypeError("The length param must be a number."));
            expect(() => ellipsis(null, "Bonjour à tous")).toThrow(new TypeError("The length param must be a number."));
            expect(() => ellipsis(undefined, "Bonjour à tous")).toThrow(new TypeError("The length param must be a number."));
            expect(() => ellipsis(NaN, "Bonjour à tous")).toThrow(new TypeError("The length param must be a valid number."));
            expect(() => ellipsis(Infinity, "Bonjour à tous")).toThrow(new TypeError("The length param must be a valid number."));
        });
        it("should be throw text must be a string", (): void => {
            expect.assertions(3);
            expect(() => ellipsis(12, 12)).toThrow(new TypeError("The text param must be a string."));
            expect(() => ellipsis(12, null)).toThrow(new TypeError("The text param must be a string."));
            expect(() => ellipsis(12, undefined)).toThrow(new TypeError("The text param must be a string."));
        });
        it("should be return nothing", (): void => {
            expect.assertions(1);
            expect(ellipsis(0, "Bonjour à tous")).toStrictEqual("...");
        });
        it("should be return same string", (): void => {
            expect.assertions(2);
            expect(ellipsis(555, "Bonjour à tous")).toStrictEqual("Bonjour à tous");
            expect(ellipsis(14, "Bonjour à tous")).toStrictEqual("Bonjour à tous");
        });
        it("should be return an ellipses string", (): void => {
            expect.assertions(2);
            expect(ellipsis(1, "Bonjour à tous")).toStrictEqual("B...");
            expect(ellipsis(13, "Bonjour à tous")).toStrictEqual("Bonjour à tou...");
        });
    });

    describe("test logger function", (): void => {
        it("should be throw groupName must be a string", (): void => {
            expect.assertions(3);
            expect(() => logger(12, "")).toThrow(new TypeError("The groupName param must be a string."));
            expect(() => logger(null, "")).toThrow(new TypeError("The groupName param must be a string."));
            expect(() => logger(undefined, "")).toThrow(new TypeError("The groupName param must be a string."));
        });
        it("should be no have log because NODE_ENV is production", (): void => {
            expect.assertions(1);
            process.env.NODE_ENV = "production";
            const orders = [{id: 1, name: "Jewel round"}, {id: 2, name: "Jewel square"}];
            expect(logger("ORDER BUGS ?", orders)).toBeUndefined();
        });

        it("should be have log", (): void => {
            expect.assertions(2);
            process.env.NODE_ENV = "development";
            jest.spyOn(console, "group").mockImplementation();
            jest.spyOn(console, "log").mockImplementation();
            const orders = [{id: 1, name: "Jewel round"}, {id: 2, name: "Jewel square"}];
            logger("ORDER BUGS ?", orders);
            expect(console.group).toHaveBeenCalledWith("ORDER BUGS ?");
            expect(console.log).toHaveBeenCalledWith(orders);
        });

        it("should be have only group", (): void => {
            expect.assertions(2);
            process.env.NODE_ENV = "development";
            jest.spyOn(console, "group").mockImplementation();
            jest.spyOn(console, "log").mockImplementation();
            const orders = [{id: 1, name: "Jewel round"}, {id: 2, name: "Jewel square"}];
            logger("ORDER BUGS ?", orders);
            expect(console.group).toHaveBeenCalledWith("ORDER BUGS ?");
            expect(console.log).toHaveBeenNthCalledWith(1, orders);
        });
    });

    describe("test getEnvsOrThrow function", (): void => {
        it("should be throw one of is not a string", (): void => {
            expect.assertions(6);

            expect(() => getEnvsOrThrow([12, "NODE_ENV"])).toThrow(new TypeError("All env name must be a string."));
            expect(() => getEnvsOrThrow(["NODE_ENV", 12])).toThrow(new TypeError("All env name must be a string."));
            expect(() => getEnvsOrThrow([null, "NODE_ENV"])).toThrow(new TypeError("All env name must be a string."));
            expect(() => getEnvsOrThrow(["NODE_ENV", null])).toThrow(new TypeError("All env name must be a string."));
            expect(() => getEnvsOrThrow([undefined, "NODE_ENV"])).toThrow(new TypeError("All env name must be a string."));
            expect(() => getEnvsOrThrow(["NODE_ENV", undefined])).toThrow(new TypeError("All env name must be a string."));
        });
        it("should be throw env is undefined", (): void => {
            expect.assertions(1);

            expect(() => getEnvsOrThrow(["TEST"])).toThrow(new ReferenceError("Please, set the TEST variable in the .env file."));
        });

        it("should be throw one of is undefined", (): void => {
            expect.assertions(2);

            expect(() => getEnvsOrThrow(["TEST", "NODE_ENV"])).toThrow(new ReferenceError("Please, set the TEST variable in the .env file."));
            expect(() => getEnvsOrThrow(["NODE_ENV", "TEST"])).toThrow(new ReferenceError("Please, set the TEST variable in the .env file."));
        });

        it("should be return all environment", () => {
            expect.assertions(2);

            process.env.TEST = "TEST";

            const [NODE_ENV, TEST] = getEnvsOrThrow(["NODE_ENV", "TEST"]);

            expect(TEST).toStrictEqual("TEST");
            expect(NODE_ENV).toStrictEqual("development");
        });
    });
});
