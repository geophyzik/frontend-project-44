const GetRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  return operatorArray[index];
};

export default GetRandomOperator;
