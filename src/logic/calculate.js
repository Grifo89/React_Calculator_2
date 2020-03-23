import operate from './operate';

const calculate = (dataObj, button) => {
  let { total, next, operation } = dataObj;
  const operations = ['*', '-', '/', '+'];

  switch (button) {
    case '%':
      next = 0.01 * total;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= (-1);
      next *= (-1);
      break;
    case '=':
      if (total !== null && next !== null) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
  }

  if (operations.includes(button)) {
    operation = button;
  } else if (operation) {
    total = total ? total + button : button
  } else if(Array.from(Array(10).keys()).toString().split(',')
    .concat(['.']).includes(button) || operations.includes(button)){
    next = next ? next + button :  button
  }

  return {
    total,
    next,
    operation,
  };

};

export default calculate;
