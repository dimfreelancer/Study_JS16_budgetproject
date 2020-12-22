'use strict';
/**
 * Урок 9
 * этот скрипт для работы с элементами страницы из Урока 9
 * временно пишем в этот файл потом объединим с оновным
 */

console.log('Урок 9 получим элементы страницы');
//  Задание по проекту, получить каждый элемент в отдельную переменную:

const start = document.getElementById('start'); //+
const cancel = document.getElementById('cancel'); //

const btnPlus = document.getElementsByTagName('button'); //++
const incomePlus = btnPlus[0];//income_add
const expensesPlus = btnPlus[1];//expenses_add

const additionalIncomeItems = document.querySelectorAll('.additional_income-item');// NodeList => []
console.log('additionalIncomeItems: ', additionalIncomeItems);

const depositCheck = document.querySelector('#deposit-check');////// CC

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];// HTMLCollection[]
console.log('budgetMonthValue: ', budgetMonthValue);
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];//
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];//

//const accumulatedMonthValue = document.getElementsByClassName('acc_month-value')[0];

const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];

const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];






const salaryAmount = document.querySelector('.salary-amount');////
const incomeTitle = document.querySelector('.income-title');////
const incomeAmount = document.querySelector('.income-amount');////

const expensesTitle = document.querySelector('.expenses-title');////
const expensesAmount = document.querySelector('.expenses-amount');////

const additionalExpenses = document.querySelector('.additional_expenses');//?
const periodSelect = document.querySelector('.period-select'); //range



const buttonIncomeAdd = document.querySelector('.income_add');//
const buttonExpensesAdd = document.querySelector('.expenses_add');//



/*** */


/**
 * Урок 9
 * проект Budget GLO Academy
 */ 

const isNumber = function(item) {
    return (!isNaN(parseFloat(item)) && isFinite(item));
};

let money = '';
    
const _start = function() {
    //функция ввода и проверки данных
        do {
            money = prompt('Введите ваш месячный доход');
        } 
        while (!isNumber(money));
};
_start();


//объявление рабочего объекта приложения appData
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
        //функция опроса пользователя

        /** ДОХОДЫ */
        if (confirm('Есть ли у вас дополнительный заработок?')) {
            // если у пользователя есть дополнительный заработок
            
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt('Какой у вас есть дополнительный заработок', 'Таксист'); //key string
                // console.log('debug itemIncome: ', itemIncome);
            }
            while(!isNaN(itemIncome)); //такая проверка на правильность ввода строки здесь работет

            do {
                cashIncome = prompt('Сколько в месяц вы зарабатываете на этом', 10000); //value number
                // console.log('debug cashIncome: ', cashIncome);
            }
            while(!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные дополнительные расходы через запятую:');
        appData.addExpenses = addExpenses.toLowerCase().split(','); //сплитим и сохраняем строку в массив через запятую ',' //пробелы уберем резез trim() потом
        // appData.addExpenses = addExpenses.toLowerCase().split(', '); //сплитим и сохраняем строку в массив
        
        /** TODO перебор массива избавимся от лишних пробелов, возможно здесь лучше использовать Map()*/
        for (let key in appData.addExpenses) {

            //входные данные 
            let tmp = appData.addExpenses[key];
            // console.log('tmp: ', tmp);
            tmp = tmp.trim();
            // console.log('tmp: trim', tmp);
            //уберем пробелы внутри предложения между словами
            let array = tmp.split(' ');

            tmp = '';
            console.log('array words: ',  array);
            array.forEach( elem => {
                if (elem !== '') {
                    tmp += ' ' + elem;
                };
            });
            tmp = tmp.trim();
            // console.log('tmp:', tmp);
            
            //= appData.addExpenses[key].trim(); /// уберем пробелы в начале и в конце предложения
            //выходные данные
            //выгружаем туда же
            appData.addExpenses[key] = tmp.trim();
        }


        /** РАСХОДЫ  expenses itemExpenses: cashExpenses*/
        for (let i = 0; i < 2; i++) {
            /** TODO потом перебрать весь массив на ввод совпадающего ключа */
            /** TODO проверка ввода строки */
            let key; //itemExpenses
            do {
                key = prompt('Введите обязательную статью расходов'); //itemExpenses
                key = key.trim();
                // console.log('debug key: ', key);
            }
            while (!isNaN(key)); //проверка ключем не должно быть число 
            
            let value; //cashExpenses
            do {
                value = prompt('Во сколько это обойдется?', 2500);  //cashExpenses
            }
            while (!isNumber(value));

            let itemExpenses = key,
                cashExpenses = value;
            // appData.expenses[key] = value; //сохраняем в объект
            appData.expenses[itemExpenses] = cashExpenses;
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
                appData.percentDeposit = prompt('Какой годовой процент депозита?', 10);
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
/** TODO */
for (let key in appData) {
    console.log(`Наша программа включает в себя дарнные: ${key} = ${appData[key]}`);
}


/** TODO */
appData.getInfoDeposit();

//2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы
// слова разделены запятой и пробелом
let result = '';
for (let key in appData.addExpenses) {

    let value = appData.addExpenses[key].trim();
    result += value.slice(0, 1).toUpperCase() + value.slice(1) + ', ';
    
    //собираем из массива обратно в строку
    // result += value[0].toUpperCase() + value.slice(1) + ', ';
    // result += appData.addExpenses[key][0].toUpperCase() + appData.addExpenses[key].slice(1) + ', ';
};


console.log('result: ', result);


