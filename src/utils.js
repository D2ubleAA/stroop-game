const AVAILABLE_COLORS = ['blue', 'red', 'green', 'brown', 'black', 'gray'];

export const getRandomColor = () => AVAILABLE_COLORS[getRandomInt(0, AVAILABLE_COLORS.length - 1)];
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const millisecondsToSeconds = milliseconds => ((milliseconds % 60000) / 1000);
export const getRandomColorNotIn = color => {
  let newColor = color;
  while (newColor === color) {
    newColor = getRandomColor();
  }

  return newColor;
};