export function predict(room) {
    let roomArr = room.split("\n");
    let creepCoordinates = [];
    let creep0Coordinates = [];

    for (let i = 0; i < roomArr.length; i++) {
        for (let j = 0; j < roomArr[0].length; j++) {
            if (/^[1-9]$/.test(roomArr[i][j])) creepCoordinates.push({ y: i, x: j });
            if (roomArr[i][j] == '0') creep0Coordinates.push({ y: i, x: j });
        }
    }
    for (const coordinate of creepCoordinates) {
        roomArr[coordinate.y] = roomArr[coordinate.y] = roomArr[coordinate.y].slice(0, coordinate.x) + (Number(roomArr[coordinate.y][coordinate.x]) - 1) + roomArr[coordinate.y].slice(coordinate.x + 1);
        creepSpreadUpdate(coordinate.y - 1, coordinate.x, Number(roomArr[coordinate.y][coordinate.x]));
        creepSpreadUpdate(coordinate.y + 1, coordinate.x, Number(roomArr[coordinate.y][coordinate.x]));
        creepSpreadUpdate(coordinate.y, coordinate.x - 1, Number(roomArr[coordinate.y][coordinate.x]));
        creepSpreadUpdate(coordinate.y, coordinate.x + 1, Number(roomArr[coordinate.y][coordinate.x]));
    }

    for (const coordinate of creep0Coordinates) {
        roomArr[coordinate.y] = roomArr[coordinate.y].slice(0, coordinate.x) + '.' + roomArr[coordinate.y].slice(coordinate.x + 1);
    }

    function creepSpreadUpdate(y, x, numberToAdd) {
        if (typeof (roomArr[y]) != 'undefined') {
            if (typeof (roomArr[y][x]) != 'undefined') {
                if (/^[0-9.]$/.test(roomArr[y][x]) && !creepCoordinates.some(coordinate => coordinate.x === x && coordinate.y === y)&& !creep0Coordinates.some(coordinate => coordinate.x === x && coordinate.y === y)) {
                    if (roomArr[y][x] == '.') { roomArr[y] = roomArr[y].slice(0, x) + '0' + roomArr[y].slice(x + 1); }
                    if (Number(roomArr[y][x]) + numberToAdd > 9) { roomArr[y] = roomArr[y].slice(0, x) + '9' + roomArr[y].slice(x + 1); }
                    else { roomArr[y] = roomArr[y].slice(0, x) + (Number(roomArr[y][x]) + numberToAdd) + roomArr[y].slice(x + 1); }
                }
            }
        }
    }
    return roomArr.join("\n");
}


