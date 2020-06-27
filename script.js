'use strict';
//*********************левая часть панели*************** 
//месячный доход
let salaryAmount = document.querySelector('.salary-amount');


//Дополнительный доход
let itemIncome = document.querySelector('.income-title');
let incomeItems = document.querySelectorAll('.income-items');


//icon +
let tagBtn = document.getElementsByTagName('button'),
  incomeBtn = tagBtn[0],
  expensesBtn = tagBtn[1];

//Возможный доход
let inpuIncomeitem = document.querySelectorAll('.additional_income-item');


//Обязательные расходы
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');

//Возможные расходы (перечислите через запятую)
let additionalExpensesItem = document.querySelector('.additional_expenses-item');

//Депозит
let deposit = document.querySelector('#deposit-check');

//Цель
let targetAmount = document.querySelector('.target-amount');

//Период расчета
let periodSelect = document.querySelector('[type = "range"]');
let periodAmount = document.querySelector('.period-amount');

//*****************************Правая часть******************* 
//Доход за месяц
let budgetMonthValue = document.querySelector('.budget_month-value');

//Дневной бюджет
let budgetDayValue = document.querySelector('.budget_day-value');

//Расход за месяц
let expensesMonthVvalue = document.querySelector('.expenses_month-value');

//Возможные доходы
let additionalIincomeValue = document.querySelector('.additional_income-value');

//Возможные расходы
let additionalExpensesValue = document.querySelector('.additional_expenses-value');

//Накопления за период
let incomePeriodValue = document.querySelector('.income_period-value');

//Срок достижения цели в месяцах
let targetMonthValue = document.querySelector('.target_month-value');


//Рассчитать
let start = document.getElementById('start');


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let isString = function (a) {
  return !isNaN(a) && isFinite(a);
}
//start();

let appData = {
  budget: 0,
  income: {},
  addIncome: [],
  incomeMonth: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  expensesAmount: {},
  accumulatedMonth: {},
  budgetDay: {},
  targetMonth: {},
  start: function () {
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getImcome();
    //appData.asking();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.accumulatedMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthVvalue.value = appData.expensesAmount;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIincomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();
    periodSelect.oninput = function () {
      incomePeriodValue.value = appData.accumulatedMonth * periodSelect.value;
      periodAmount.innerHTML = periodSelect.value;
    };

  },
  getStart: function () {
    if (salaryAmount.value === '') {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
      start.style.backgroundColor = 'red';
      return;
    } else {
      start.style.backgroundColor = '#353a43';
      appData.start();

    }
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesBtn);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesBtn.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeBtn);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomeBtn.style.display = 'none';
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getImcome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });
    let sum = 0;
    for (let key in appData.income) {
      sum += parseInt(appData.income[key]);
    }
    appData.incomeMonth = sum;

  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    inpuIncomeitem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (item !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  asking: function () {
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },

  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += parseInt(appData.expenses[key]);
    }
    appData.expensesAmount = sum;
  },
  getBudget: function () {
    appData.accumulatedMonth = appData.budget + appData.incomeMonth - appData.expensesAmount;
    appData.budgetDay = Math.ceil(appData.accumulatedMonth / 30);
    return;
  },
  getTargetMonth: function () {
    return targetAmount.value / appData.accumulatedMonth;
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
      }
      while (!isNumber(appData.moneyDeposit));

    }
  },
  calcSavedMoney: function () {
    return appData.accumulatedMonth * periodSelect.value;
  }
};
start.addEventListener('click', appData.getStart);
expensesBtn.addEventListener('click', appData.addExpensesBlock);
incomeBtn.addEventListener('click', appData.addIncomeBlock);
periodSelect.oninput = function () {
  periodAmount.innerHTML = periodSelect.value;
};