export function validateBattlefield(field) {

    let ships = { battleship: 0, cruiser: 0, destroyer: 0, submarine: 0 };

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {
            if (field[i][j] == 1) {
                validateSurroundingCordinates(i, j);
            }
        }
    }

    function validateSurroundingCordinates(x, y) {
        let surroundingCordinates = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (typeof field[x - 1 + i] != 'undefined') {
                    if (typeof field[x - 1 + i][y - 1 + j] != 'undefined') {
                        surroundingCordinates[i][j] = field[x - 1 + i][y - 1 + j];
                    }
                }
            }
        }

        if (matrixEqual(surroundingCordinates, [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]])) { ships.submarine += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 1), [
                [0, 0, 0],
                [1, 1, 0],
                [0, 0, 0]])
        ) { ships.destroyer += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 1, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 0, 0]])
        ) { ships.destroyer += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 1), [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 2), [
                [0, 0, 0],
                [1, 1, 0],
                [0, 0, 0]])
        ) { ships.cruiser += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 1, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 2, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 0, 0]])
        ) { ships.cruiser += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 1), [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 2), [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x, y + 3), [
                [0, 0, 0],
                [1, 1, 0],
                [0, 0, 0]])
        ) { ships.battleship += 1; return surroundingCordinates; }

        if (
            matrixEqual(surroundingCordinates, [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 1, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 2, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]])
            &&
            matrixEqual(validateSurroundingCordinates(x + 3, y), [
                [0, 1, 0],
                [0, 1, 0],
                [0, 0, 0]])
        ) { ships.battleship += 1; return surroundingCordinates; }

 //       console.log(surroundingCordinates);
        return surroundingCordinates;
    }

    function matrixEqual(matrix1, matrix2) {
        if (matrix1.length != matrix2.length) { return false; }
        if (matrix1[0].length != matrix2[0].length) { return false; }
        for (let i = 0; i < matrix1.length; i++) {
            for (let j = 0; j < matrix1[0].length; j++) {
                if (matrix1[i][j] != matrix2[i][j]) { return false; }
            }
        }
        return true;
    }
    if (ships.battleship != 1 || ships.cruiser != 2 || ships.destroyer != 3 || ships.submarine != 4) { return false; }
    return true;
}