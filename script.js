'use strict';
/**
 * Урок 5
 * проект Budget GLO Academy
 */ 

let money = '',
    income = 'Фриланс, подработка, частные проекты',  //дополнительный доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запяту:',
                        'Квартплата, Проездной, Кредит, Интернет'),  //дополнительные расходы
    deposit = confirm('Есть ли у вас депозит в банке?', true),
    mission = 30000,
    period = 12; //число месяцев
    
let expenses = [],  //создаем пустой массив для обязательных расходов в месяц
    expensesAmount;    // expensesAmount1, expensesAmount2;     //их стоимость общая

let accumulatedMonth,    
    budgetDay,
    budgetMonth,
    expensesMonth;


//функция проверки на число
function isNumber(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
}
        
//функция ввода и проверки данных
function start() {
    do {
        money = prompt('Введите ваш месячный доход');
    } while (isNaN(money) || money.trim === '' || money === null);
}
start();

//функция показывает тип данных
function showTypeOf(data) {
    console.log(data, typeof data);
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//вывести строку возможных расходов в виде массива
console.log('Возможные расходы:', addExpenses.toLowerCase().split(', '));

function getExpensesMonth() {
    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    for (let i = 0; i < 3; i++) {
    
        expenses[i] = prompt('Введите обязательную статью расходов', 'Детский садик'); 
        let answer;
        do {
            answer = prompt('Во сколько это обойдется?');
        } while (!isNumber(answer));
        sum += +answer;
    }
    expensesAmount = sum;
    return expensesAmount;
}    

function getAccumulatedMonth() {
    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    return (money - expensesMonth);
}    

function getTargetMonth() {
    //Возвращает число месяцев за какой период будет достигнута цель, зная результат месячного накопления
    return Math.ceil(mission / accumulatedMonth);   
}

function getStatusIncome() {
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

expensesMonth = getExpensesMonth();
console.log('Расходы за месяц', expensesMonth);

accumulatedMonth = getAccumulatedMonth(); //расчет накоплений за месяц
console.log('Бюджет на месяц accumulatedMonth: ',  accumulatedMonth);

budgetDay = Math.floor(accumulatedMonth / 30); //расчёт бюджет на день
console.log('Бюджет на день budgetDay: ', budgetDay);


period = getTargetMonth();
if (period < 0) {
    console.log('К сожалению, цель не будет достигнута');
} else {
    console.log('Цель будет достигнута в течении ' + period + ' месяцев');
}

console.log(getStatusIncome());
