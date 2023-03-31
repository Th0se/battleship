const Ship = (number) => {
    // A factory function to make a ship object.
    let state = `afloat`;
    let length = number;
    const hit = function() {
        this.length == this.length--;
    };
    const isSunk = function() {
        if (this.length === 0) {
            this.state = `sunk`;
        } else {
            this.state = `afloat`;
        };
    };

    return {
        state,
        length,
        hit,
        isSunk,
    }
};

export {
    Ship,
}