function multiplyNumbers(numbers) {
    let MaxValidCombinations = 0;

    function combineNumbers(start, current) {
        if (current.length === numbers.length) {
            return;
        }

        for (let i = start; i < numbers.length; i++) {
            current.push(numbers[i]);

            if (checkArrayForBobMultiplyZero(current) && current.length != 1 && current.length > MaxValidCombinations) {
                MaxValidCombinations = current.length;
            }

            combineNumbers(i + 1, current);
            current.pop();
        }
    }

    combineNumbers(0, []);
    return MaxValidCombinations;

  
    function checkArrayForBobMultiplyZero(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (!bobMultiplyZero(array[i], array[j])) return false;
            }
        }
        return true;
    }

    function bobMultiplyZero(num1, num2) {
        let num1str = num1.toString().padStart(4, '0');
        let num2str = num2.toString().padStart(4, '0');
        for (let i = 0; i < 4; i++) {
            if (!((num1str[i] == '0' || num2str[i] == '0') ||
                    (num1str[i] == '5' && (num2str[i] == '2' || num2str[i] == '4' || num2str[i] == '6' || num2str[i] == '8')) ||
                    (num2str[i] == '5' && (num1str[i] == '2' || num1str[i] == '4' || num1str[i] == '6' || num1str[i] == '8'))
                ))
                return false;
        }
        return true;
    }
  
}
