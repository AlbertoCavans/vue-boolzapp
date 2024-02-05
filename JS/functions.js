//! FUNCTIONS

function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  if (isNaN(min) || isNaN(max)) {
    console.error("I valori inseriti devono essere numerici");
    return;
  }
  if (min >= max) {
    console.error("Il valore massimo deve essere maggiore del valore minimo");
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
