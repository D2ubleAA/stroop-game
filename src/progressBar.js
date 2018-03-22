import { Constants } from './constants';
import * as Utils from './utils';

const timeInSeconds = 5;
let timeLeft = 0;
let progressBarIntervalId = 0;

export const startProgressBar = stopCallback => {
  let actualTime = 0;
  let fillWidthPercent = 100;
  let progressFill = document.getElementById(Constants.ID.PROGRESS_FILL);
  progressFill.style.width = fillWidthPercent + '%';

  setProgressBarVisibility(true);
  progressBarIntervalId = setInterval(() => {
    actualTime = actualTime + 250;
    timeLeft = timeInSeconds - Utils.millisecondsToSeconds(actualTime);
    fillWidthPercent = fillWidthPercent - (250 / 50);
    setProgressBarThresholds(fillWidthPercent);
    progressFill.style.width = fillWidthPercent + '%';

    if (Utils.millisecondsToSeconds(actualTime) === timeInSeconds) {
      clearInterval(progressBarIntervalId);
      setProgressBarColor(Constants.COLORS.GREENYELLOW);
      stopCallback();
    }
  }, 250);
};

export const stopProgressBar = () => {
  setProgressBarColor(Constants.COLORS.GREENYELLOW);
  setProgressBarVisibility(false);
  clearInterval(progressBarIntervalId);

  return timeLeft;
};

const setProgressBarColor = color => {
  let progressFill = document.getElementById(Constants.ID.PROGRESS_FILL);
  progressFill.style.backgroundColor = color;
};

const setProgressBarThresholds = fillWidth => {
  if (fillWidth < Constants.GAME.PROGRESS_BAR_THRESHOLDS.ORANGE_ZONE) {
    setProgressBarColor(Constants.COLORS.ORANGE);
  }
  if (fillWidth < Constants.GAME.PROGRESS_BAR_THRESHOLDS.RED_ZONE) {
    setProgressBarColor(Constants.COLORS.RED);
  }
};

const setProgressBarVisibility = visibility => {
  let progressBar = document.getElementById(Constants.ID.PROGRESS_BAR);
  progressBar.style.visibility = visibility ? 'visible' : 'hidden';
};