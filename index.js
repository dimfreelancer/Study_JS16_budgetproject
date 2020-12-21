'use strict';
/**
 * Урок 9
 * этот скрипт для работы с элементами страницы из Урока 9
 * временно пишем в этот файл потом объединим с оновным
 */

console.log('Урок 9 получим элементы страницы');
//  Задание по проекту, получить каждый элемент в отдельную переменную:

const start = document.getElementById('start'); //+
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];

const additionalIncomeItems = document.querySelectorAll('.additional_income-item');// => []

const depositCheck = document.querySelector('#deposit-check');//////CC

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];//
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




//const buttonStart = document.querySelector('#start');

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
// Чекбокс по id через querySelector
// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
// Каждый элемент в правой части программы через класс(не через querySelector), 
//которые имеют в имени класса "-value", начиная с class="budget_day-value" 
//и заканчивая class="target_month-value">
// Оставшиеся поля через querySelector каждый в отдельную переменную:
// const targetAmount = document.querySelector('.target-amount');
// поля ввода (input) с левой стороны и не забудьте про range.

