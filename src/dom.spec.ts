import {appendScript, appendStylesheet} from "./dom";

describe("test dom", (): void => {
    describe("test appendStylesheet", (): void => {
        it("should be throw an error with an empty href", async (): Promise<void> => {
            expect.assertions(1);

            try {
                await appendStylesheet("");
            } catch (err) {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(err.message).toStrictEqual("href is required");
            }
        });

        it("should be throw an TypeError with a bad href", async (): Promise<void> => {
            expect.assertions(1);

            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                await appendStylesheet(1212);
            } catch (err) {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(err.message).toStrictEqual("href must be a string");
            }
        });

        it("should be test if appendStylesheet is instanceOf Promise", (): void => {
            expect.assertions(1);

            // eslint-disable-next-line jest/valid-expect-in-promise
            const result = appendStylesheet("https://fonts.googleapis.com/css2?family=Nerko+One&display=swap");
            expect(result).toBeInstanceOf(Promise);
        });


        it("should be test if have a stylesheet on the dom", (): void => {
            expect.assertions(1);

            const link = document.querySelectorAll("link[href=\"https://fonts.googleapis.com/css2?family=Nerko+One&display=swap\"]");
            expect(link).toHaveLength(1);
        });


        it("should be test if appendStylesheet do not append again", (): void => {
            expect.assertions(1);

            // eslint-disable-next-line jest/valid-expect-in-promise
            const result = appendStylesheet("https://fonts.googleapis.com/css2?family=Nerko+One&display=swap");
            expect(result).toBeInstanceOf(Promise);
        });


        it("should be test if have a one stylesheet on the dom", (): void => {
            expect.assertions(1);

            // eslint-disable-next-line no-undef
            const link = document.querySelectorAll("link[href=\"https://fonts.googleapis.com/css2?family=Nerko+One&display=swap\"]");
            expect(link).toHaveLength(1);
        });
    });
    describe("test appendScript", (): void => {
        it("should be throw an error with an empty src", async (): Promise<void> => {
            expect.assertions(1);

            try {
                await appendScript("");
            } catch (err) {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(err.message).toStrictEqual("src is required");
            }
        });

        it("should be throw an TypeError with a bad src", async (): Promise<void> => {
            expect.assertions(1);

            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                await appendScript(1212);
            } catch (err) {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(err.message).toStrictEqual("src must be a string");
            }
        });

        it("should be test if appendScript is instanceOf Promise", (): void => {
            expect.assertions(1);

            // eslint-disable-next-line jest/valid-expect-in-promise
            const result = appendScript("https://apis.google.com/js/platform.js");
            expect(result).toBeInstanceOf(Promise);
        });


        it("should be test if have a script on the dom", async (): Promise<void> => {
            expect.assertions(1);

            try {
                await appendScript("https://apis.google.com/js/platform.js");

                const script = document.querySelectorAll("script[src=\"https://apis.google.com/js/platform.js\"]");

                expect(script).toHaveLength(1);
                // eslint-disable-next-line no-empty
            } finally {}
        });


        it("should be test if appendScript do not append again", async (): Promise<void> => {
            expect.assertions(1);

            try {
                await appendScript("https://apis.google.com/js/platform.js");

                const script = document.querySelectorAll("script[src=\"https://apis.google.com/js/platform.js\"]");

                expect(script).toHaveLength(1);
                // eslint-disable-next-line no-empty
            } finally {}
        });


        it("should be test if have a one script on the dom", (): void => {
            expect.assertions(1);

            const script = document.querySelectorAll("script[src=\"https://apis.google.com/js/platform.js\"]");
            expect(script).toHaveLength(1);
        });
    });
});
