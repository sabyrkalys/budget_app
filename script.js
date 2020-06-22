'use strict';
//Кнопку "Рассчитать" через id
let start = document.getElementById('start');
console.log(start);

//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let tagBtn0 = document.getElementsByTagName('button');
console.log(document.getElementsByTagName('button')[0]);
let tagBtn1 = document.getElementsByTagName('button');
console.log(document.getElementsByTagName('button')[1]);

//Чекбокс по id через querySelector
let deposit = document.querySelector('#deposit-check');
console.log(document.querySelector('#deposit-check'));

//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let inpuIncomeitem = document.querySelectorAll('.additional_income-item');
console.log(document.querySelectorAll('.additional_income-item'));

//класс, которые имеют в имени класса "-value", начиная с class="budget_day-value"
let budgetDayValue = document.querySelector('.budget_day-value');
console.log(document.querySelector('.budget_day-value'));
let expensesMonthVvalue = document.querySelector('.expenses_month-value');
console.log(document.querySelector('.expenses_month-value'));
let additionalIincomeValue = document.querySelector('.additional_income-value');
console.log(document.querySelector('.additional_income-value'));
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
console.log(document.querySelector('.additional_expenses-value'));
let incomePeriodValue = document.querySelector('.income_period-value');
console.log(document.querySelector('.income_period-value'));
let targetMonthValue = document.querySelector('.target_month-value');
console.log(document.querySelector('.target_month-value'));

//Оставшиеся поля через querySelector каждый в отдельную переменную
let salaryAmount = document.querySelector('.salary-amount');
console.log(document.querySelector('.salary-amount'));
let incomeTitle = document.querySelector('.income-title');
console.log(document.querySelector('.income-title'));
let incomeAmount = document.querySelector('.income-amount');
console.log(document.querySelector('.income-amount'));

let expensesTitle = document.querySelector('.expenses-title');
console.log(document.querySelector('.expenses-title'));
let expensesAmount = document.querySelector('.expenses-amount');
console.log(document.querySelector('.expenses-amount'));

let additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(document.querySelector('.additional_expenses-item'));
let depositAmount = document.querySelector('.deposit-amount');
console.log(document.querySelector('.deposit-amount'));
let depositPercent = document.querySelector('.deposit-percent');
console.log(document.querySelector('.deposit-percent'));
let targetAmount = document.querySelector('.target-amount');
console.log(document.querySelector('.target-amount'));

let budgetMonthValue = document.querySelector('.budget_month-value');
console.log(document.querySelector('.budget_month-value'));

//не забудьте про range.
let periodSelect = document.querySelector('[type = "range"]');
console.log(document.querySelector('[type = "range"]'));