import { initializeFirebaseApp } from "./firebase";
import { initializeApp } from "firebase/app";

jest.mock("firebase/app");

describe("Given the Firebase service", () => {
    describe("When it is called", () => {
        test("the firebase service should be called", () => {
            initializeFirebaseApp();
            expect(initializeApp).toHaveBeenCalled();
        });
    });
});
