import {
    sum
} from '../src/index.js';

test(`Should be 3`, () => {
    expect(sum(1, 2)).toBe(3);
})