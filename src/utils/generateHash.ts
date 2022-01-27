export function getRandomNumber() {
  return Math.floor(Math.random() * 9999);
}

export function generateHash() {
  return `${getRandomNumber()}-${getRandomNumber()}-${getRandomNumber()}`;
}
