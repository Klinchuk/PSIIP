// Функция для вычисления значения y по заданной формуле
function calculateY(a, x) {
    let y;

    try {
        if (x >= 2) {
            // Проверка на деление на ноль
            if (x * x - 1.5 === 0) {
                throw new Error("Деление на ноль: x^2 - 1.5 не должно быть равно нулю.");
            }
            y = a / (x * x - 1.5) + Math.sqrt(a + x);
        } else if (x >= 0 && x < 2) {
            y = 2 * Math.sqrt(a) - (x / 4);
        } else {
            y = 0.3 * x;
        }
    } catch (error) {
        alert(error.message);
        return null;
    }

    return y;
}

// Функция для отображения результата в HTML-документе
function displayResult() {
    let a = parseFloat(document.getElementById("inputA").value);
    let x = parseFloat(document.getElementById("inputX").value);
    let result = calculateY(a, x);

    if (result !== null) {
        document.getElementById("result").innerHTML = "Результат: " + result;
    } else {
        document.getElementById("result").innerHTML = "Ошибка в вычислениях.";
    }
}
