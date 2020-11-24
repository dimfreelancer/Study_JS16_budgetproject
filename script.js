'use strict';
/**
 * Урок 3
 * проект Budget GLO Academy
 */

let money = prompt('Ваш месячный доход', 57000),
    income = 'Фриланс',  //дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, Такси, Коммуналка'),  //дополнительные расходы
    deposit = confirm('Есть ли у вас депозит в банке?', true),
    mission = 30000,
    period = 12; //число месяцев

let expenses1, expenses2;
let amount1, amount2;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');
console.dir(addExpenses.toLowerCase().split(', ')); //разбить строку на элементы массива и вывести в консоль


let budgetDay = Math.floor(money / 30);  // расчёт бюджет на день
console.log('budgetDay: ', budgetDay);

