export function* dithering(width, height) {
    let powerOf2WidthHeight;
    if (width > height) {
        powerOf2WidthHeight = width;
    }
    else {
        powerOf2WidthHeight = height;
    }
    powerOf2WidthHeight = nextPowerOf2(powerOf2WidthHeight);

    if (width == 1 && height == 1) 
        yield [0, 0];
    else
        yield* fillField(0, 0, 0);

    function* fillField(x, y, recursionLevel) {
        if (1 << recursionLevel == powerOf2WidthHeight) { return; }

        yield* fillField(x, y, recursionLevel + 1);
        yield* fillField(x + (1 << recursionLevel), y + (1 << recursionLevel), recursionLevel + 1);
        yield* fillField(x + (1 << recursionLevel), y, recursionLevel + 1);
        yield* fillField(x, y + (1 << recursionLevel), recursionLevel + 1);

        if (1 << (recursionLevel + 1) == powerOf2WidthHeight) {
            if (x < powerOf2WidthHeight && y < powerOf2WidthHeight) {
                if (x < width && y < height) { yield [x, y]; }
            } else { return; }

            if (x + (1 << recursionLevel) < powerOf2WidthHeight && y + (1 << recursionLevel) < powerOf2WidthHeight) {
                if (x + (1 << recursionLevel) < width && y + (1 << recursionLevel) < height) { yield [x + (1 << recursionLevel), y + (1 << recursionLevel)]; }
            } else { return; }

            if (x + (1 << recursionLevel) < powerOf2WidthHeight && y < powerOf2WidthHeight) {
                if (x + (1 << recursionLevel) < width && y < height) { yield [x + (1 << recursionLevel), y]; }
            } else { return; }

            if (x < powerOf2WidthHeight && y + (1 << recursionLevel) < powerOf2WidthHeight) {
                if (x < width && y + (1 << recursionLevel) < height) { yield [x, y + (1 << recursionLevel)]; }
            } else { return; }

        }

    }

    function nextPowerOf2(n) {
        if (n <= 0) return 1;

        n--;
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        n |= n >> 32;
        n++;

        return n;
    }

}