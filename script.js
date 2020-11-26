'use strict';
/**
 * Урок 4
 * проект Budget GLO Academy
 */

let money = +prompt('Ваш месячный доход', 57000),
    income = 'Фриланс',  //дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, Проездной, Кредит, Интернет, Такси, Коммуналка'),  //дополнительные расходы
    deposit = confirm('Есть ли у вас депозит в банке?', true),
    mission = 30000,
    period = 12; //число месяцев

let expenses1, expenses2;
let amount1, amount2;

expenses1 = prompt('Введите обязательную статью расходов', 'Детский садик');
amount1 = +prompt('Во сколько это обойдется?', 2500);

expenses2 = prompt('Введите обязательную статью расходов', 'Курсы повышения');
amount2 = +prompt('Во сколько это обойдется?', 13000);


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');
console.dir(addExpenses.toLowerCase().split(', ')); //разбить строку на элементы массива и вывести в консоль


let budgetMonth = money - amount1 - amount2;  //бюджет на месяц = доходы минус расходы
console.log('Бюджет на месяц budgetMonth: ',  budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30); //расчёт бюджет на день
console.log('Бюджет на день budgetDay: ', budgetDay);


period = Math.ceil(mission / budgetMonth);    //период достижения цели
console.log('Цель ... будет достигнута за период', period, 'месяцев');



if (budgetDay < 0) {
    console.log('Что-то пошло не так');
} else if (budgetDay < 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 1200) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
}
