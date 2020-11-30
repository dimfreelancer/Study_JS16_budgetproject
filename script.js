'use strict';
/**
 * Урок 5
 * проект Budget GLO Academy
 */ 

//функция проверки на число
const isNumber = function(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
};
        
//функция показывает тип данных
// const showTypeOf = function(data) {
//     console.log(data, typeof data);
// };

let money = '',
    start = function() {
    //функция ввода и проверки данных
        do {
            money = prompt('Введите ваш месячный доход');
        } while (isNaN(money) || money.trim === '' || money === null);
    },
    period = 12; //число месяцев

start();


//объявление рабочего объекта приложения
let appData = {   
    budget: money, 
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},  //создаем пустой массив для обязательных расходов в месяц
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    accumulatedMonth: 0,
    // expensesAmount,    // expensesAmount1, expensesAmount2;     //их стоимость общая
    asking: function() { //методы 
        let addExpenses = prompt('Перечислите возможные дополнительные расходы');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
};
    


// showTypeOf(appData.money);
// showTypeOf(appData.income);
// showTypeOf(appData.deposit);

//вывести строку возможных расходов в виде массива
// console.log('Возможные расходы:', addExpenses.toLowerCase().split(', '));

const getExpensesMonth = function () {
    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    let expenses = [];
    for (let i = 0; i < 3; i++) {
    
        expenses[i] = prompt('Введите обязательную статью расходов', 'Детский садик'); 
        let answer;
        do {
            answer = prompt('Во сколько это обойдется?');
        } while (!isNumber(answer));
        sum += +answer;
    }
    return sum;
}    

const getAccumulatedMonth = function () {
    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    return (appData.budget - appData.expensesMonth);
}    

const getTargetMonth = function () {
    //Возвращает число месяцев за какой период будет достигнута цель, зная результат месячного накопления
    return Math.ceil(appData.mission / appData.accumulatedMonth);   
}

const getStatusIncome = function () {
    //оформить чать кода в функцию оценить уровень дохода
    if (appData.budgetDay > 1200) {
        return 'У вас высокий уровень дохода';
    } else if (appData.budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (appData.budgetDay >= 0) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
        return 'Что-то пошло не так';
    }    
}    


console.log(`Период равен ${appData.period} месяца`);
console.log(`Цель заработать ${appData.mission} рублей/долларов/гривен/юанив`);

appData.expensesMonth = getExpensesMonth();
console.log('Расходы за месяц', appData.expensesMonth);

appData.accumulatedMonth = getAccumulatedMonth(); //расчет накоплений за месяц
console.log('Бюджет на месяц accumulatedMonth: ',  appData.accumulatedMonth);

appData.budgetDay = Math.floor(appData.accumulatedMonth / 30); //расчёт бюджет на день
console.log('Бюджет на день budgetDay: ', appData.budgetDay);


period = getTargetMonth();
if (appData.period < 0) {
    console.log('К сожалению, цель не будет достигнута');
} else {
    console.log('Цель будет достигнута в течении ' + appData.period + ' месяцев');
}

console.log(getStatusIncome());
