'use strict';
/**
 * Урок 2
 * проект Budget GLO Academy
 */

let money = 57000,  //Доход за месяц
	income = 'Фриланс',  //дополнительный доход
	addExpenses = 'Интернет, Такси, Коммуналка',  //дополнительные расходы
	deposit = true,
	mission = 30000,
    period = 12; //число месяцев

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');

console.dir(addExpenses.toLowerCase().split(', ')); //разбить строку на элементы массива и вывести в консоль


let budgetDay = Math.floor(money / 30);  // расчёт бюджет на день
console.log('budgetDay: ', budgetDay);
