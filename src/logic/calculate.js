import operate from './operate';

const calculate = (dataObj, button) => {
  let { total, next, operation } = dataObj;
  const operations = ['*', '-', '/', '+'];
  const numbers = Array.from(Array(10).keys()).toString().split(',').concat(['.'])

  switch (button) {
    case '%':
      if (total === null && next === null) {
        total = null
        operation = null
      } else {
        total = (0.01 * next).toString();
        operation = '%'
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = (total * (-1)).toString() ;
      next = (next * (-1)).toString();
      break;
    case '=':
      if (total !== null && next !== null) {
        total = operate(next, total, operation);
        next = null;
        operation = null;
      }
      break;
    default:
  }

  if (operations.includes(button)) {
    operation = button;
  } else if (operations.includes(operation)) {
    total = total ? total + button : button
  } else if(numbers.includes(button) || operations.includes(button)){
    next = next ? next + button :  button
  }

  return {
    total,
    next,
    operation,
  };

};

export default calculate;
