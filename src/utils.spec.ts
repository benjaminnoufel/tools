/* eslint-disable @typescript-eslint/ban-ts-comment, no-undefined */
// @ts-nocheck
import {
    addingDaysToADate,
    addingHoursToADate,
    addingMinutesToADate, addingMonthsToADate,
    addingSecondsToADate, addingYearsToADate,
    ellipsis,
    getEnvsOrThrow,
    logger
} from "./utils";

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

describe("update date function", (): void => {
    const testingDate = new Date(2021, 1, 1, 0, 0, 0);
    describe("adding second to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingSecondsToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingSecondsToADate(testingDate, "12")).toThrow(new TypeError("Seconds parameter must be a number"));
        });

        it("should be adding 30 seconds", (): void => {
            expect.assertions(1);
            expect(addingSecondsToADate(testingDate, 30)).toStrictEqual(new Date(2021, 1, 1, 0, 0, 30));
        });
    });

    describe("adding minutes to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingMinutesToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingMinutesToADate(testingDate, "12")).toThrow(new TypeError("Minutes parameter must be a number"));
        });

        it("should be adding 30 minutes", (): void => {
            expect.assertions(1);
            expect(addingMinutesToADate(testingDate, 30)).toStrictEqual(new Date(2021, 1, 1, 0, 30, 0));
        });
    });

    describe("adding hours to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingHoursToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingHoursToADate(testingDate, "12")).toThrow(new TypeError("Hours parameter must be a number"));
        });

        it("should be adding 3 hours", (): void => {
            expect.assertions(1);
            expect(addingHoursToADate(testingDate, 3)).toStrictEqual(new Date(2021, 1, 1, 3, 0, 0));
        });
    });

    describe("adding days to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingDaysToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingDaysToADate(testingDate, "12")).toThrow(new TypeError("Days parameter must be a number"));
        });

        it("should be adding 3 days", (): void => {
            expect.assertions(1);
            expect(addingDaysToADate(testingDate, 3)).toStrictEqual(new Date(2021, 1, 4, 0, 0, 0));
        });
    });

    describe("adding months to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingMonthsToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingMonthsToADate(testingDate, "12")).toThrow(new TypeError("Months parameter must be a number"));
        });

        it("should be adding 3 months", (): void => {
            expect.assertions(1);
            expect(addingMonthsToADate(testingDate, 3)).toStrictEqual(new Date(2021, 4, 1, 0, 0, 0));
        });
    });

    describe("adding years to a date", (): void => {
        it("should be throw if don't give a valid date", (): void => {
            expect.assertions(1);

            expect(() => addingYearsToADate("lol", 12)).toThrow(new TypeError("oldDate must be instanceof DateConstructor"));
        });

        it("should be throw if second param is not a number", (): void => {
            expect.assertions(1);

            expect(() => addingYearsToADate(testingDate, "12")).toThrow(new TypeError("Years parameter must be a number"));
        });

        it("should be adding 3 years", (): void => {
            expect.assertions(1);
            expect(addingYearsToADate(testingDate, 3)).toStrictEqual(new Date(2024, 1, 1, 0, 0, 0));
        });
    });
});
