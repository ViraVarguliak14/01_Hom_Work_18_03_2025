// Переменные разных типов
var productName = "Laptop"; // Название товара
var price = 1499.99; // Цена товара
var inStock = true; // Есть ли товар в наличии
var discount = null; // Скидка пока не установлена
var warranty; // Переменная без значения (undefined)
// Переменная, которая может быть числом или строкой
var productCode = 1010;
productCode = "A1010";
// Массив чисел (цены товаров)
var prices = [499, 1299, 799, 2499, 1599];
// prices.push("2000"); // Ошибка должна быть в TS
// Массив строк (названия товаров)
var products = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];
// Массив, содержащий только числа или только строки
var ids1 = ["ID001", "ID002", "ID003"]; // Только строки
var ids2 = [101, 102, 103]; // Только числа
// Массив с числами и строками одновременно
var mixedValues = [1, "two", 3, "four", 5, "six"];
// Массив булевых значений
var toggles = [true, false, false, true, true];
// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS
