'use strict';
/**
 * Урок 5
 * проект Budget GLO Academy
 */ 

//функция проверки на число
const isNumber = function(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
};
        
let money = '';
const start = function() {
    //функция ввода и проверки данных
        do {
            money = prompt('Введите ваш месячный доход');
        } while (isNaN(money) || money.trim === '' || money === null);
};

start();


//объявление рабочего объекта приложения
let appData = {   
    budget: money, 
    budgetDay: 0,
    budgetMonth: 0,

    expensesMonth: 0,
    expenses: {},  //создаем пустой массив для обязательных расходов в месяц
    // expenses: {
    //     “ответ на первый вопрос” : “ответ на второй вопрос”,
    //     “ответ на первый вопрос” : “ответ на второй вопрос”
    // }
    addExpenses: [],

    income: {},
    addIncome: [],

    deposit: false,
    mission: 50000,
    period: 3,

    accumulatedMonth: 0,
    asking: function() { 
        //дополнительные расходы addExpenses
        let addExpenses = prompt('Перечислите возможные дополнительные расходы');
        appData.addExpenses = addExpenses.toLowerCase().split(', '); //сохраняем массив
        //депози
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        //обязательные расходы на месяц
        let key = '';
        for (let i = 0; i < 2; i++) {
            key = prompt('Введите обязательную статью расходов'); 
            let value;
            do {
                value = prompt('Во сколько это обойдется?');
            } while (!isNumber(value));

            appData.expenses[key] = value;
        }
    },
    getExpensesMonth: function () {
        let sum = 0;

        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }

        //сохраняем сумму обязательных расходов за месяц
        appData.expensesMonth = sum;

        return sum;
    },
    getBudget: function () {
        return (appData.budget - appData.expensesMonth);
    },   
    getTargetMonth: function () {
        return Math.ceil(appData.mission / appData.accumulatedMonth);   
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
  


console.log(`Период равен ${appData.period} месяца`);
console.log(`Цель заработать ${appData.mission} рублей/долларов/гривен/юанив`);

appData.expensesMonth = appData.getExpensesMonth();
console.log('Расходы за месяц', appData.expensesMonth);

appData.accumulatedMonth = appData.getBudget(); //расчет накоплений за месяц
console.log('Бюджет на месяц accumulatedMonth: ',  appData.accumulatedMonth);

appData.budgetDay = Math.floor(appData.accumulatedMonth / 30); //расчёт бюджет на день
console.log('Бюджет на день budgetDay: ', appData.budgetDay);


appData.period = appData.getTargetMonth();
if (appData.period < 0) {
    console.log('К сожалению, цель не будет достигнута');
} else {
    console.log('Цель будет достигнута в течении ' + appData.period + ' месяцев');
}

console.log(appData.getStatusIncome());



//вывести в консоль весь объект
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(`${key} - ${appData[key]}`);
};
