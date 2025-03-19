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
// Либо строка, либо массив чисел
var mixedValues1 = [1, 3, 5];
// Либо массив чисел, либо массив строк
var mixedValues2 = ["two", "four", "six"];
// Массив булевых значений
var toggles = [true, false, false, true, true];
// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS
// Типизация Объекта
var product = {
    name: "Laptop",
    price: 1499.99,
    inStock: true,
};
var person = {
    age: 38,
    name: "Vra"
};
var product1 = {
    name: "Laptop",
    price: 1499.99,
    inStock: true,
};
var direction = 'left';
direction = 'right';
direction = 'up';
direction = 'right';
direction = 'down';
// direction = 'eight'; Ошибка типизаций значения переменой
// Типизация функций
var sum = function (a, b) {
    return (
    // Условие (тернарный оператор):
    a + b > 100 ?
        a + b :
        a + b + ""
    // условия ? если_правда : если_неправда
    );
};
console.log(sum(200, 5));
// В JavaScript (и TypeScript) оператор typeof используется для получения типа переменной или выражения. Он возвращает тип значения, которое вы проверяете, в виде строки.
// function calculateDiscount(price: number, discount: number): number {
//     return price - price * (discount / 100);
//   }
//   console.log(calculateDiscount(1000, 10)); // 900
