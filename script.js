'use strict';
/**
 * Урок 5
 * проект Budget GLO Academy
 */ 

let money = '',
    income = 'Фриланс, подработка, частные проекты',  //дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, Проездной, Кредит, Интернет, Такси, Коммуналка'),  //дополнительные расходы
    deposit = confirm('Есть ли у вас депозит в банке?', true),
    mission = 30000,
    period = 12; //число месяцев
    
let expenses, expenses1, expenses2, //обязательные расходы
    amount;    // amount1, amount2;     //их стоимость

let accumulatedMonth,    
    budgetDay,
    budgetMonth;

        
//функция ввода и проверки данных
function start() {
    money = '';
    while (isNaN(money) || isFinite(money)) {
        money = prompt('Введите ваш месячный доход', 60000);
    }
}

//функция показывает тип данных
function showTypeOf(data) {
    console.log(data, typeof data);
}    
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log('Возможные расходы:', addExpenses.toLowerCase().split(', '));



function getExpensesMonth() {
    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        //TODO переделать на ввод данных в массив expenses[]
        if ( i === 0 ) {
            expenses1 = prompt('Введите обязательную статью расходов', 'Детский садик');
            sum += +prompt('Во сколько это обойдется?', 22500);
        } else if ( i === 1 ) {
            expenses2 = prompt('Введите обязательную статью расходов', 'Курсы повышения');
            sum += +prompt('Во сколько это обойдется?', 13000);
        }
    }

    // amoun = amount1 + amount2;
    // expenses1 = prompt('Введите обязательную статью расходов', 'Детский садик');
    // amount1 = +prompt('Во сколько это обойдется?', 22500);
    // expenses2 = prompt('Введите обязательную статью расходов', 'Курсы повышения');
    // amount2 = +prompt('Во сколько это обойдется?', 13000);
    // amount = amount1 + amount2;

    console.log('sum: ', sum);
    return amount = sum;
}    

function getAccumulatedMonth() {
    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    // return money - (amount1 + amount2);
    return money - getExpensesMonth();
}    

function getTargetMonth() {
    //Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления
    period = Math.ceil(mission / accumulatedMonth);   
    return period;
}    

//TODO make it pure clean
// function getStatusIncome() {
//     //оформить чать кода в функцию оценить уровень дохода
//     if (budgetDay > 1200) {
//         console.log('У вас высокий уровень дохода');
//     } else if (budgetDay >= 600) {
//         console.log('У вас средний уровень дохода');
//     } else if (budgetDay >= 0) {
//         console.log('К сожалению у вас уровень дохода ниже среднего');
//     } else {
//         console.log('Что-то пошло не так');
//     }    
// }    

function getStatusIncome() {
    //make it pure clean
    //оформить чать кода в функцию оценить уровень дохода
    if (budgetDay > 1200) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay >= 0) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
        return 'Что-то пошло не так';
    }    
}    


console.log(`Период равен ${period} месяца`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юанив`);
console.log('Расходы за месяц', getExpensesMonth());


accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30); //расчёт бюджет на день

console.log('accumulatedMonth: ', accumulatedMonth);
console.log('Бюджет на месяц budgetMonth accumulatedMonth: ',  accumulatedMonth);
console.log('Бюджет на день budgetDay: ', budgetDay);
console.log('Срок достижения цели равен', getTargetMonth(), 'месяцев');


// getStatusIncome();
console.log(`getStatusIncome, ${getStatusIncome()}`);
