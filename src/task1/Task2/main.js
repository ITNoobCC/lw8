var cashbox = {
  amount: 0,
  isOperationValid: function (operation) {
    if (!operation && !operation.amount && !operation.info &&
      (typeof (operation.amount) === 'number') && (typeof (operation.info) === 'string')) {
      return false;
    } else {
      return true;
    }
  },
  addPayment: function (payment) {
    if (this.isOperationValid(payment)) {
      if (payment.amount > 0) {
        this.amount = this.amount + payment.amount;
        console.log('Зачисление на счёт. Платеж: "' + payment.info + '" на сумму: ' + payment.amount + ' уе произведён.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      } else {
        console.log('ОШИБКА. Не удаётся совершить платёж "' + payment.info + '"');
      }
    } else {
      console.log('ОШИБКА. Введите правильные данные');
    }
  },
  refundPayment: function (refund) {
    if (this.isOperationValid(refund)) {
      if (this.amount > 0 && this.amount - refund.amount >= 0 && refund.amount > 0) {
        this.amount = this.amount - refund.amount;
        console.log('Снятие со счёта. "' + refund.info + '" на сумму: ' + refund.amount + ' уе.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');

      } else if (this.amount >= 0 && this.amount - refund.amount < 0) {
        console.log('ОШИБКА. Недостаточно средств для снятия со счёта ');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      } else {
        console.log('ОШИБКА. Не удаётся совершить снятие.');
      }
    } else {
      console.log('ОШИБКА. Введите правильные данные');
    }
  }
};
// cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' });
// cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });
// cashbox.addPayment({ amount: 1000, info: 'Оплата ЖКХ' });

// cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
// cashbox.refundPayment({ amount: 100, info: 'Налоги' });
// cashbox.refundPayment({ amount: -100, info: 'Возврат клиенту' }); 