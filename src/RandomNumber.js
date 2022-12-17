// random numbers for game
function getRandomInt(min, max = 30) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default getRandomInt;
