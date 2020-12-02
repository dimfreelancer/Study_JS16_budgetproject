'use strict';
/**
 * Урок 8
 * проект Budget GLO Academy
 */ 

const isNumber = function(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
};

let money = '';
    
const start = function() {
    //функция ввода и проверки данных
        do {
            money = prompt('Введите ваш месячный доход');
        } 
        while (!isNumber(money));
};

start();


//объявление рабочего объекта приложения
let appData = {

    budget: money,
    budgetDay: 0,
    budgetMonth: 0,

    income: {}, //обкт статей заработка
    addIncome: [], //массив дополнительного заработка

    expenses: {}, //обкт статей расходов
    addExpenses: [], //массив дополнительных расходов
    expensesMonth: 0,

    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,

    mission: 50000,
    period: 3,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome = prompt('Какой у вас есть заработок', 'Таксист');
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы зарабатываете на этом', 10000);
            }
            while(!isNumber(cashIncome));
            //
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные дополнительные расходы через запятую:');
        appData.addExpenses = addExpenses.toLowerCase().split(', '); //сплитим и сохраняем строку в массив
        
        /**TODO
         */
        console.log('appData.addExpenses: ', appData.addExpenses);
        for (let key in appData.addExpenses) {
            console.log('key = ' + key + ' => val = ' + appData.addExpenses[key]);
        }



        
        for (let i = 0; i < 2; i++) {
            let key = prompt('Введите обязательную статью расходов');
            let value;
            do {
                value = prompt('Во сколько это обойдется?', 2500);
            }
            while (!isNumber(value));

            appData.expenses[key] = value; //сохраняем в объект
        };
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
        }
        //сохраняем сумму обязательных расходов за месяц
        appData.expensesMonth = sum;
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
    },
    getInfoDeposit: function() {
        if(appData.deposit){
            // проверяем правильность ввода цифры на процент депозита
            do {
                appData.percentDeposit = prompt('Каков процент депозита?', 10);
            } 
            while (!isNumber(appData.percentDeposit));

            // проверяем правильность ввода цифры на сумму залога
            do {
                appData.moneyDeposit = prompt('Какую сумму залога вы вложили?', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
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
/**
for (let key in appData) {
    console.log(`Наша программа включает в себя дарнные: ${key} = ${appData[key]}`);
}
*/

console.log('addExpenses', appData.addExpenses);

////////////////////////////////
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

