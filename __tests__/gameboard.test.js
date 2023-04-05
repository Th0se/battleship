import {
    Expanse,
    Coordinates,
    Ship,
} from '../src/gameboard.js';

describe(`expanse function`, () => {
    test(`Should be 8 units long`, () => {
        expect(Expanse(4).length).toBe(4);
        expect(Expanse(4)).toBe[1, 2, 3, 4];
    });
});

describe(`Coordinates function`, () => {
    test(`Should be [[1,1], [1,2], [1,3], [1,4], [2,1], [2,2], [2,3], [2,4],
            [3, 1], [3, 2], [3, 3], [3, 4], [4,1], [4,2], [4,3], [4,4]]`, () => {
        expect(Coordinates(4, 4)).toEqual({
            coordinates: [[1,1], [1,2], [1,3], [1,4], [2,1], [2,2], [2,3], [2,4], [3, 1], [3, 2], [3, 3], [3, 4], [4,1], [4,2], [4,3], [4,4]],
            verticalAxisLength: 4,
            horizontalAxisLength: 4,
        });
    });
});

describe(`Ship`, () => {
    test(`Should be a hull of the specified length in a correct shape`, () => {
        const a = Ship(4, 5, 5);
        expect(Object.keys(a).length).toBe(2);
        expect(a.axis).toMatch(/[xy]/);
        expect(a.hull.length).toBe(4);
    });
});