// Функция для работы со строками
function processStrings() {
    // Создание строковых переменных
    let s1 = "Я люблю Беларусь";
    let s2 = "Я учусь в Политехническом колледже";
    
    // Определение длины строки s1
    let lengthS1 = s1.length;

    // Удаление подстроки "учусь" из строки s2
    let modifiedS2 = s2.replace("учусь", "");

    // Замена всех встречающихся букв "ю" на "*"
    let modifiedS1 = s1.replace(/ю/g, "*");

    // Возврат результатов
    return {
        lengthS1: lengthS1,
        modifiedS2: modifiedS2,
        modifiedS1: modifiedS1
    };
}

// Функция для отображения результатов в HTML-документе
function displayStringResults() {
    let results = processStrings();

    let output = "Длина строки 'Я люблю Беларусь': " + results.lengthS1 + "<br>";
    output += "Модифицированная строка s2: " + results.modifiedS2 + "<br>";
    output += "Модифицированная строка s1: " + results.modifiedS1;

    document.getElementById("stringOutput").innerHTML = output;
}
