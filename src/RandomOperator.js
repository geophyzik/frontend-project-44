const GetRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  const operator = operatorArray[index];
  return operator;
};

export default GetRandomOperator;
// console.log(GetRandomOperator());
