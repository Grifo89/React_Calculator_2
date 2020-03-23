import operate from './operate';

const calculate = (dataObj, button) => {
  let { total, next, operation } = dataObj;
  const operations = ['*', '-', '/', '+'];
  if (operations.includes(button)) {
    operation = button;
  } else if (operation) {
    total += button;
  } else {
    next += button;
  }
  switch (button) {
    case '%':
      next = 0.01 * total;
      break;
    case 'A/C':
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

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
