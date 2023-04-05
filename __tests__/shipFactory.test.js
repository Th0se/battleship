import {
    Ship,
} from '../src/shipFactory.js';

describe(`ship factory`, () => {
    test(`should be afloat`, () => {
        const atlanta = Ship(8);
        expect(atlanta.state).toBe(`afloat`);
    });
    test(`Should be 8 units long`, () => {
        const atlanta = Ship(8);
        expect(atlanta.length).toBe(8);
    });
    test(`Should be 7 units long`, () => {
        const atlanta = Ship(8);
        atlanta.hit();
        expect(atlanta.length).toBe(7)
    });
    test(`Should still be afloat`, () => {
        const atlanta = Ship(8);
        atlanta.isSunk();
        expect(atlanta.state).toBe(`afloat`);
    });
    test(`Should be resting on the bottom`, () => {
        const atlanta = Ship(8);
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.hit();
        atlanta.isSunk();
        expect(atlanta.state).toBe(`sunk`);
    });
});