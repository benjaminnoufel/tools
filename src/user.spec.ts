/* eslint-disable @typescript-eslint/ban-ts-comment, no-undefined */
// @ts-nocheck
import {emailIsValid, passwordIsValid, phoneNumberIsValid} from "./user";

const randomize = (input: string): string => {
    const characters: string[] = input.split("");
    const length: number = characters.length;

    for (let index = 0; index < length; index++) {
        const indexRandom = Math.floor(Math.random() % length);

        [characters[indexRandom], characters[index]] = [characters[index], characters[indexRandom]];
    }

    return characters.join("");
};

describe("test user", (): void => {
    it("should be throw password must be a string", (): void => {
        expect.assertions(3);

        expect(() => passwordIsValid(12)).toThrow(new TypeError("The password param must be a string."));
        expect(() => passwordIsValid(null)).toThrow(new TypeError("The password param must be a string."));
        expect(() => passwordIsValid(undefined)).toThrow(new TypeError("The password param must be a string."));
    });
    it("should be a valid password", (): void => {
        expect.assertions(40);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123!@#"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC123"))).toStrictEqual(true);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
        expect(passwordIsValid(randomize("abcABC1"))).toStrictEqual(false);
    });

    it("should be throw email must be a string", (): void => {
        expect.assertions(3);

        expect(() => emailIsValid(12)).toThrow(new TypeError("The email param must be a string."));
        expect(() => emailIsValid(null)).toThrow(new TypeError("The email param must be a string."));
        expect(() => emailIsValid(undefined)).toThrow(new TypeError("The email param must be a string."));
    });
    it("should be test if email is valid", (): void => {
        expect.assertions(10);
        expect(emailIsValid("john.doe@gmail.com")).toStrictEqual(true);
        expect(emailIsValid("johndoe@gmail.com")).toStrictEqual(true);
        expect(emailIsValid("john@gmail.com")).toStrictEqual(true);
        expect(emailIsValid("j@gmail.com")).toStrictEqual(true);
        expect(emailIsValid("@mail.com")).toStrictEqual(false);

        expect(emailIsValid("john.doe@ail.com")).toStrictEqual(true);
        expect(emailIsValid("johndoe@l.com")).toStrictEqual(true);
        expect(emailIsValid("john@.com")).toStrictEqual(false);
        expect(emailIsValid("j@gmail.co")).toStrictEqual(true);
        expect(emailIsValid("john.doe@com")).toStrictEqual(false);
    });

    it("should be throw phone must be a string", (): void => {
        expect.assertions(3);

        expect(() => phoneNumberIsValid(12)).toThrow(new TypeError("The phone param must be a string."));
        expect(() => phoneNumberIsValid(null)).toThrow(new TypeError("The phone param must be a string."));
        expect(() => phoneNumberIsValid(undefined)).toThrow(new TypeError("The phone param must be a string."));
    });
    it("should be test if number is valid", (): void => {
        expect.assertions(6);
        expect(phoneNumberIsValid("0607080910")).toStrictEqual(true);
        expect(phoneNumberIsValid("+33607080910")).toStrictEqual(true);
        expect(phoneNumberIsValid("0102030405")).toStrictEqual(true);
        expect(phoneNumberIsValid("+33102030405")).toStrictEqual(true);
        expect(phoneNumberIsValid("060708091")).toStrictEqual(false);
        expect(phoneNumberIsValid("010203040")).toStrictEqual(false);
    });
});
