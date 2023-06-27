// Функция сложения
function add(x, y) {
  return x + y;
}

// Функция вычитания
function subtract(x, y) {
  return x - y;
}

// Функция умножения
function multiply(x, y) {
  return x * y;
}

// Функция деления
function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    console.log("Ошибка: деление на ноль");
    return null;
  }
}

// Получение ввода от пользователя
var choice = prompt("Выберите операцию:\n1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление");

var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));

var result;

// Выполнение выбранной операции
switch (choice) {
  case "1":
    result = add(num1, num2);
    break;
  case "2":
    result = subtract(num1, num2);
    break;
  case "3":
    result = multiply(num1, num2);
    break;
  case "4":
    result = divide(num1, num2);
    break;
  default:
    console.log("Неправильный выбор операции");
    break;
}

// Вывод результата
if (result !== null) {
  console.log("Результат:", result);
}
