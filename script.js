'use strict';
//*********************левая часть панели*************** 
//месячный доход
let salaryAmount = document.querySelector('.salary-amount');
console.log(document.querySelector('.salary-amount'));

//Дополнительный доход
let incomeTitle = document.querySelector('.income-title');
console.log(document.querySelector('.income-title'));
let incomeAmount = document.querySelector('.income-amount');
console.log(document.querySelector('.income-amount'));

//icon +
let tagBtn0 = document.getElementsByTagName('button');
console.log(document.getElementsByTagName('button')[0]);
let tagBtn1 = document.getElementsByTagName('button');
console.log(document.getElementsByTagName('button')[1]);

//Возможный доход
let inpuIncomeitem = document.querySelectorAll('.additional_income-item');
console.log(document.querySelectorAll('.additional_income-item'));

//Обязательные расходы
let expensesTitle = document.querySelector('.expenses-title');
console.log(document.querySelector('.expenses-title'));
let expensesAmount = document.querySelector('.expenses-amount');
console.log(document.querySelector('.expenses-amount'));

//Возможные расходы (перечислите через запятую)
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(document.querySelector('.additional_expenses-item'));

//Депозит
let deposit = document.querySelector('#deposit-check');
console.log(document.querySelector('#deposit-check'));

//Цель
let targetAmount = document.querySelector('.target-amount');
console.log(document.querySelector('.target-amount'));

//Период расчета
let periodSelect = document.querySelector('[type = "range"]');
console.log(document.querySelector('[type = "range"]'));


//*****************************Правая часть******************* 
//Доход за месяц
let budgetMonthValue = document.querySelector('.budget_month-value');
console.log(document.querySelector('.budget_month-value'));

//Дневной бюджет
let budgetDayValue = document.querySelector('.budget_day-value');
console.log(document.querySelector('.budget_day-value'));

//Расход за месяц
let expensesMonthVvalue = document.querySelector('.expenses_month-value');
console.log(document.querySelector('.expenses_month-value'));

//Возможные доходы
let additionalIincomeValue = document.querySelector('.additional_income-value');
console.log(document.querySelector('.additional_income-value'));

//Возможные расходы
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
console.log(document.querySelector('.additional_expenses-value'));

//Накопления за период
let incomePeriodValue = document.querySelector('.income_period-value');
console.log(document.querySelector('.income_period-value'));

//Срок достижения цели в месяцах
let targetMonthValue = document.querySelector('.target_month-value');
console.log(document.querySelector('.target_month-value'));


//Рассчитать
let start = document.getElementById('start');
console.log(start);