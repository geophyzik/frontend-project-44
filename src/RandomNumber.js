function getRandomInt(minNum = 0, maxNum = 30) {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min) + min);
}

export default getRandomInt;
