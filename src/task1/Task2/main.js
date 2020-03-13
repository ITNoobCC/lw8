'use strict';
class cashbox  {
  amount = 10;
  addPayment = function(payment) {
    if (
      payment.amount > 0 &&
      typeof payment.amount === 'number' &&
      typeof payment.info === 'string'
    ) {
      this.amount += payment.amount;
      console.log(payment.info + ': ' + payment.amount);
      return (payment.info + ': ' + payment.amount);
    } else {
      console.log('Error enter!');
      return 'Error enter!';
    }
  };
  refundPayment = function(refund) {
    if (
      this.amount > 0 &&
      this.amount - refund.amount >= 0 &&
      typeof refund.amount === 'number' &&
      typeof refund.info === 'string'
    ) {
      this.amount -= refund.amount;
      console.log(refund.info + ': ' + refund.amount);
      return (refund.info + ': ' + refund.amount);
    } else {
      console.log('Error enter!');
      return 'Error enter!';
    }
  };
};
// var test = new cashbox();
// test.addPayment({ amount: 20, info: 'Оплата штрафа' });
// cashbox.addPayment({ amount: -20, info: 'Оплата штрафа' });
// cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });
// cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
// cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });

module.exports = cashbox;
