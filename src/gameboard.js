const Expanse = (number) => {
    /* A function to generate an array containing whole numbers from 1 through
        the specified number.
    */
    let result = [];
    let length = 1;
    while (length <= number) {
        result.push(length);
        length++;
    };

    return result;
};

const Coordinates = (x, y) => {
    /* A function to generate an array containing all whole number coordinates
        within the given range.
    */
    let a = 1;
    let result = [];

    while (a <= x) {
        let b = 1;
        while (b <= y) {
            const coordinate = [];
            coordinate.push(a, b);
            result.push(coordinate);
            b++;
        };
        a++;
    };

    const verticalLength = x;
    const horizontalLength = y;
    
    return {
        coordinates: result,
        verticalAxisLength: verticalLength,
        horizontalAxisLength: horizontalLength,
    };
};


const Ship = (shipLength, x, y) => {
    // A factory to make a ship.
    let axis;
    let maximumStartingCoordinate;
    let startingPoint = [];
    let hull = [];
    let xIncrement, yIncrement;

    if (Math.floor(Math.random() * 10) > 5) {
        axis = `x`;
    } else {
        axis = `y`;
    };

    if (axis === `x`) {
        maximumStartingCoordinate = x - shipLength;
    } else if (axis === `y`) {
        maximumStartingCoordinate = y - shipLength;
    };

    if (axis === `x`) {
        let horizontal = Math.floor(Math.random() * maximumStartingCoordinate);
        let vertical = Math.floor(Math.random() * y);

        if (horizontal <= 1) {
            horizontal = 1;
        };

        if (vertical <= 1) {
            vertical = 1;
        };

        startingPoint.push(horizontal, vertical);
        xIncrement = horizontal;
        yIncrement = vertical;
    } else if (axis === `y`) {
        let horizontal = Math.floor(Math.random() * x);
        let vertical = Math.floor(Math.random() * maximumStartingCoordinate);

        if (horizontal <= 1) {
            horizontal = 1;
        };

        if (vertical <= 1) {
            vertical = 1;
        };

        startingPoint.push(horizontal, vertical);
        xIncrement = horizontal;
        yIncrement = vertical;
    };

    hull.push(startingPoint);

    while (hull.length < shipLength) {
        if (axis === `x`) {
            xIncrement++;
        } else if (axis === `y`) {
            yIncrement++;
        };
        
        hull.push([xIncrement, yIncrement]);
    };

    return {
        axis: axis,
        hull: hull
    };
};

const gameboard = () => {
    let playerField = Coordinates(10, 10);
    let enemyField = Coordinates(10, 10);
    let occupiedPlayerField = [];
    let occupiedEnemyField = [];
    let playerShip = [];
    let enemyShip = [];
};

export {
    Expanse,
    Coordinates,
    Ship,
}