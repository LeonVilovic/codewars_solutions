function nextBigger(n) {
    let nArr = n.toString()
                .split('')
                .map(element => Number(element));
    for (let i = nArr.length - 1; i > 0; i--) {
        if (nArr[i] > nArr[i - 1]) {
            let compareNumber = nArr[i - 1];
            let selectedPart = nArr.slice(i - 1, nArr.length);
            selectedPart.sort();
            for (let j = i - 1; j < nArr.length; j++) {
                nArr[j] = selectedPart[j - (i - 1)];
            }
            let i2 = i - 1;
            let phase1 = true;
            let compareNumber2;
            while (true) {
                if (nArr[i2] > compareNumber && phase1) {
                    compareNumber2 = nArr[i2];
                    phase1 = false;
                }
                if (phase1) {
                    i2++;
                } else {
                    nArr[i2] = nArr[i2 - 1];
                    i2--;
                }
                if (!phase1 && i2 == i - 1) {
                    nArr[i2] = compareNumber2;
                    break;
                }
            }
            return Number(nArr.join(''));
        }
    }
    return -1;

}
