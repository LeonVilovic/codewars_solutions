function bulk(arr) {
    //put all input items in an array
    let arrItems = []
    for (let i = 0; i < arr.length; i++) {
        arrRow = arr[i].split(',');
        for (let j = 0; j < arrRow.length; j++) {
            arrItems.push(arrRow[j].trim());
        }
    }
    //iterate arrItems, calculate calories and protein
    let sumProtein = 0;
    let sumCalories = 0;
    let currentFood;
    let currentFoodGrams;
    for (let i = 0; i < arrItems.length; i++) {
        currentFood = food[arrItems[i].slice(arrItems[i].indexOf(' ') + 1)];
        currentFoodGrams = Number(arrItems[i].slice(0, arrItems[i].indexOf('g')));
        sumCalories += (currentFood[0] * 4 * currentFoodGrams) / 100 + (currentFood[1] * 4 * currentFoodGrams) / 100 + (currentFood[2] * 9 * currentFoodGrams) / 100;
        sumProtein += (currentFood[0] / 100) * currentFoodGrams;
    }
    return "Total proteins: " + sumProtein + " grams, Total calories: " + sumCalories;
}
