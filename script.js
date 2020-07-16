'use strict';
//*********************левая часть панели*************** 
//месячный доход
let salaryAmount = document.querySelector('.salary-amount');
let dataInput = document.querySelector('.data');
let calc = document.querySelector('.calc');

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
//Сбросить
let cancel = document.getElementById('cancel');

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
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getImcome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();

  },
  showResult: function () {
    budgetMonthValue.value = this.accumulatedMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthVvalue.value = this.expensesAmount;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIincomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.oninput = function () {
      incomePeriodValue.value = budgetMonthValue.value * periodSelect.value;
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
      this.start();

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
        this.expenses[itemExpenses] = cashExpenses;
      }
    }, this);
  },
  getImcome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome;
      }
    }, this);
    let sum = 0;
    for (let key in this.income) {
      sum += parseInt(this.income[key]);
    }
    this.incomeMonth = sum;

  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    }, this);
  },
  getAddIncome: function () {
    inpuIncomeitem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (item !== '') {
        this.addIncome.push(itemValue);
      }
    }, this);
  },

  getExpensesMonth: function () {
    let sum = 0;
    for (let key in this.expenses) {
      sum += parseInt(this.expenses[key]);
    }
    this.expensesAmount = sum;
  },
  getBudget: function () {
    this.accumulatedMonth = this.budget + this.incomeMonth - this.expensesAmount;
    this.budgetDay = Math.ceil(this.accumulatedMonth / 30);
    return;
  },
  getTargetMonth: function () {
    return targetAmount.value / this.accumulatedMonth;
  },
  getInfoDeposit: function () {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt('Какая сумма заложена?', '10000');
      }
      while (!isNumber(this.moneyDeposit));

    }
  },
  calcSavedMoney: function () {
    return this.accumulatedMonth * periodSelect.value;
  },
};
start.addEventListener('click', appData.getStart.bind(appData));
expensesBtn.addEventListener('click', appData.addExpensesBlock);
incomeBtn.addEventListener('click', appData.addIncomeBlock);
periodSelect.oninput = function () {
  periodAmount.innerHTML = periodSelect.value;
};
calc.addEventListener('click', function () {
  const inputs = [...document.querySelectorAll('input[type=text]')];
  const elemsDataInput = [...dataInput.getElementsByTagName('*')].filter(elem => elem.tagName == 'INPUT' && elem.className !== 'deposit-amount' && elem.className !== 'deposit-percent' && elem.type !== 'checkbox');
  const stopInput = elemsDataInput.every(elem => elem.value);
  const target = event.target;
  if (target.closest('#start')) {
    if (stopInput !== false) {
      start.style.display = 'none';
      cancel.style.display = 'block';
      for (let i = 0; i < elemsDataInput.length; i++) {
        elemsDataInput[i].setAttribute('disabled', 'disabled');
      }
    }
  } else if (target.closest('#cancel')) {
    start.style.display = 'block';
    cancel.style.display = 'none';
    //const allInputs = inputs.concat(elemsDataInput);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    for (let i = 0; i < elemsDataInput.length; i++) {
      elemsDataInput[i].removeAttribute('disabled');
    }
  }
});