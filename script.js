'use strict';
/**
 * Урок 4
 * проект Budget GLO Academy
 */

let money = +prompt('Ваш месячный доход', 60000),
    income = 'Фриланс, подработка, частные проекты',  //дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, Проездной, Кредит, Интернет, Такси, Коммуналка'),  //дополнительные расходы
    deposit = confirm('Есть ли у вас депозит в банке?', true),
    mission = 30000,
    period = 12; //число месяцев

let expenses, expenses1, expenses2; //обязательные расходы
let amount, amount1, amount2;     //их стоимость

let accumulatedMonth,
    budgetDay,
    budgetMonth;



    //функция показывает тип данных
function showTypeOf(data) {
    console.log(data, typeof data);
}

function getExpensesMonth() {
    //Функция возвращает сумму всех обязательных расходов за месяц
    expenses1 = prompt('Введите обязательную статью расходов', 'Детский садик');
    amount1 = +prompt('Во сколько это обойдется?', 22500);
    expenses2 = prompt('Введите обязательную статью расходов', 'Курсы повышения');
    amount2 = +prompt('Во сколько это обойдется?', 13000);

    amount = amount1 + amount2;
    return amount;
}

function getAccumulatedMonth() {
    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    return money - (amount1 + amount2);
}


function getTargetMonth() {
    //Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления
    period = Math.ceil(mission / accumulatedMonth);   
    return period;
}

function getStatusIncome() {
    
    //оформить чать кода в функцию
    if (budgetDay < 0) {
        console.log('Что-то пошло не так');
    } else if (budgetDay <= 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 1200) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    }
}


showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');

console.log('Расходы за месяц', getExpensesMonth());
console.log('Возможные расходы:', addExpenses.toLowerCase().split(', ')); //разбиваем строку на элементы массива
// console.log(addExpenses.length);

accumulatedMonth = getAccumulatedMonth();
console.log('accumulatedMonth: ', accumulatedMonth);

budgetDay = Math.floor(accumulatedMonth / 30); //расчёт бюджет на день
console.log('Бюджет на месяц budgetMonth accumulatedMonth: ',  accumulatedMonth);
console.log('Бюджет на день budgetDay: ', budgetDay);
console.log('Срок достижения цели равен', getTargetMonth(), 'месяцев');
// console.log('Цель ... будет достигнута за период', period, 'месяцев');
//period = Math.ceil(mission / budgetMonth);    //период достижения цели
// console.log('Срок достижения цели равен', period, 'месяцев');
//let budgetMonth = money - amount1 - amount2;  //бюджет на месяц = доходы минус расходы



getStatusIncome();
