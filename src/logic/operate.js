import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [fb, sb] = [Big(numberOne), Big(numberTwo)];
  switch (operation) {
    case '-':
      return fb.minus(sb).toString();
    case '*':
      return fb.times(sb).toString();
    case '+':
      return fb.plus(sb).toString();
    case '/':
      if (Number(sb) === 0 ) {return '0'}
      else {return fb.div(sb).toString()}
    default:
      return '0';
  }
};

export default operate;
