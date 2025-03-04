function binomials(target) {
    let pairs = [];
    if (target === 2) return [
        [2, 1]
    ];

    pairs.push([target, 1]);
    pairs.push([target, target - 1]);

    if (isPrime(target) && target % 2 == 1) return pairs; //all odd prime numbers appear two times;

    let i = Math.floor(target * 0.2) + 3;
    let z = 2;
    while (true) {
        let result = 1;
        let j = z;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            result = (result * (i - j + 1)) / j;
            if (result > target) break;
            if (result === target) {
                pairs.push([i, j]);
                if (i / 2 != j) pairs.push([i, i - j])
                break;
            }
        }
        i > 195 ? i = Math.floor(i * 0.6) : i--;
        if (j > Math.floor(i / 2)) break;
        if (i < 4) break;
    }
    return pairs.sort((a, b) => a[1] - b[1]);

    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        const limit = Math.sqrt(num);
        for (let i = 3; i <= limit; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

}
