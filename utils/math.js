/**
 * returns random integer in range
 *
 * @param   min: number
 * @param   max: number
 * @returns number in range from min to max*/

export const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}
