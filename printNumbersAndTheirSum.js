const allNumbers = [1, 2, 3, 4];

function printNumbersAndSum(numbers) {
    numbers.forEach(function (number) {
        console.log(number)
    })
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber);
        })
    })
}

printNumbersAndSum(allNumbers)


// the big 0 notation for this function is  O(n + n^ 2)
// but following rule 4 of big 0 notation we drop n and have O(n^2)
