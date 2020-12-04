'use strict';

/**
 * Урок 9
 * этот скрипт для работы с элементами страницы из Урока 9
 */

 console.log('Урок 9 получим элементы страницы');

//  Задание по проекту, получить каждый элемент в отдельную переменную:

// Кнопку "Рассчитать" через id
const buttonStart = document.querySelector('#start');
console.log('buttonStart: ', buttonStart);

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const buttonIncomeAdd = document.querySelector('.income_add');
const buttonExpensesAdd = document.querySelector('.expenses_add');
console.log('buttonIncomeAdd: ', buttonIncomeAdd);
console.log('buttonExpensesAdd: ', buttonExpensesAdd);

// Чекбокс по id через querySelector
const depositCheck = document.querySelector('#deposit-check');
console.log('depositCheck: ', depositCheck);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const additionalIncomeItems = document.querySelectorAll('.additional_income-item');
console.log('additionalIncomeItems: ', additionalIncomeItems);

// Каждый элемент в правой части программы через класс(не через querySelector), 
//которые имеют в имени класса "-value", начиная с class="budget_day-value" 
//и заканчивая class="target_month-value">


// Оставшиеся поля через querySelector каждый в отдельную переменную:
const salaryAmount = document.querySelector('.salary-amount');

const targetAmount = document.querySelector('.target-amount');

// поля ввода (input) с левой стороны и не забудьте про range.
