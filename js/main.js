// Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).

console.log("Ответ на задачу № 1");
let minute = 17;
if (minute > 0 && minute <= 15) {
  console.log(`Число ${minute} попадает в первую четверь часа`);
} else if (minute > 15 && minute <= 30) {
  console.log(`Число ${minute} попадает во вторую четверь часа`);
} else if (minute > 30 && minute <= 45) {
  console.log(`Число ${minute} попадает в третью четверь часа`);
} else if (minute > 45 && minute <= 60) {
  console.log(`Число ${minute} попадает в четвертую четверь часа`);
} else {
  console.log(`Число ${minute} не попадает ни в одну из четвертей часа`);
}

// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Если она имеет значение 'ru', то в переменную arr
// запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском.
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

console.log("Ответ на задачу № 2");
let lang = "ru",
  arr = [];
if (lang == "ru") {
  arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  console.log(arr);
} else if (lang == "en") {
  arr = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
  console.log(arr);
} else {
  console.log(`Такого значения ${lang} для переменной lang не сущетсвует `);
}
// Пример 3
// Напишите код, который предлагает пользователю ввести целое
// число. Нужно вывести на экран сколько в этом числе цифр,
// а также положительное оно или отрицательное. Например,
// "Число " + num + " однозначное положительное".
// Достаточно будет определить, является ли число однозначным,
// двузначным или трехзначным и более.
console.log("Ответ на задачу № 3");
let num = +prompt("Введите целое число", "");
while (num === 0 || num % 1 != 0) {
  num = +prompt("Пожалуйста, введите именно целое число", "");
}

if (num > 0 && num <= 9) {
  console.log("Число " + num + " однозначное положительное");
} else if (num > 9 && num <= 99) {
  console.log("Число " + num + " двузначное положительное");
} else if (num > 99 && num <= 999) {
  console.log("Число " + num + " трехзначное положительное");
}

if (num < 0 && num >= -9) {
  console.log("Число " + num + " однозначное отрицательное");
} else if (num < -9 && num >= -99) {
  console.log("Число " + num + " двузначное отрицательное");
} else if (num < -99 && num >= -999) {
  console.log("Число " + num + " трехзначное отрицательное");
}
// Пример 4
// Создаются переменные red и yellow для красного и
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены
// значения "нет", горит зелёный сигнал светофора и
// выводиться сообщение, разрешающее переходить дорогу.
console.log("Ответ на задачу № 4");
let red = "нет",
  yellow = "нет";
if (red == "нет" && yellow == "нет") {
  console.log(
    "Загорелся зеленый сигнал сфетофора, вам разрешено перейти дорогу"
  );
} else {
  console.log("Дождитесь зеленого света светофора");
}
// Циклы
// Пример 5
// Выведите столбец чисел от 1 до 12.
console.log("Ответ на задачу № 5");
let number = 1;
while (number <= 12) {
  console.log(number);
  number++;
}
// Пример 6
// Выведите столбец чисел от 5 до 13.
console.log("Ответ на задачу № 6");
number = 5;
do {
  console.log(number);
  number++;
} while (number <= 13);
// Пример 7
// Выведите столбец четных чисел в промежутке от 0 до 16.
console.log("Ответ на задачу № 7");
for (let i = 0; i <= 16; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Пример 8
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]
console.log("Ответ на задачу № 8");
let sum = 0;
arr = [2, 5, 8, 3, 6];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
