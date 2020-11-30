'use strict';
/**
 * Урок 8
 * проект Budget GLO Academy
 */ 

//функция проверки на число
const isNumber = function(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
};

let money = '',
    start = function() {
    //функция ввода и проверки данных
        do {
            money = prompt('Введите ваш месячный доход');
        } 
        while (isNaN(money) || money.trim === '' || money === null);
    };

start();


//объявление рабочего объекта приложения
let appData = {   

    budget: money, 
    budgetDay: 0,
    budgetMonth: 0,

    income: {},
    addIncome: [],

    expenses: {},  
    addExpenses: [],
    expensesMonth: 0,

    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() { 
        let addExpenses = prompt('Перечислите возможные дополнительные расходы через запятую:');
        appData.addExpenses = addExpenses.toLowerCase().split(', '); //сплитим и сохраняем строку в массив
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let key = prompt('Введите обязательную статью расходов');
            let value;
            do {
                value = prompt('Во сколько это обойдется?', 2500);
            }
            while (!isNumber(value));

            appData.expenses[key] = value; //сохраняем в объект
        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
        }
        //сохраняем сумму обязательных расходов за месяц
        appData.expensesMonth = sum;
        return sum;
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },   
    getTargetMonth: function () {
        return Math.ceil(appData.mission / appData.budgetMonth);   
    },    
    getStatusIncome: function () {
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
};
    

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

///Расходы за месяц
console.log('Расходы за месяц', appData.expensesMonth);

//За какой период будет достигнута цель (в месяцах)
appData.period = appData.getTargetMonth();
if (appData.period < 0) {
    console.log('К сожалению, цель не будет достигнута');
} else {
    console.log('Цель будет достигнута в течении ' + appData.period + ' месяцев');
}

//вывести уровень доходов
console.log(appData.getStatusIncome());

//вывести в консоль весь объект
for (let key in appData) {
    console.log(`Наша программа включает в себя дарнные: ${key} - ${appData[key]}`);
}
