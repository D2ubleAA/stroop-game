require('./app.scss');

import { Constants } from './constants';
import * as Utils from './utils';
import * as ProgressBar from './progressBar';

window.onload = StroopGame;

function StroopGame() {
  // GAME VARIABLES
  const time = 0;
  const currentWordLabelModel = {
    word: '',
    color: ''
  };
  const optionButtonModel = {
    word: '',
    color: ''
  };
  const optionButtonModel2 = {
    word: '',
    color: ''
  };
  let level = Constants.GAME.INITIAL_LEVEL;
  let score = Constants.GAME.INITIAL_SCORE;
  let isRobotPlaying = false;
  let robotTimeout = null;

  // HTML BUTTON ELEMENTS
  let newButton = document.getElementById(Constants.ID.NEW_BUTTON);
  let newButtonRobot = document.getElementById(Constants.ID.NEW_BUTTON_ROBOT);
  let optionButton = document.getElementById(Constants.ID.OPTION_BUTTON);
  let optionButton2 = document.getElementById(Constants.ID.OPTION2_BUTTON);

  // HTML LABEL ELEMENTS
  let levelLabel = document.getElementById(Constants.ID.LEVEL_TEXT);
  let scoreLabel = document.getElementById(Constants.ID.SCORE_TEXT);
  let currentWordLabel = document.getElementById(Constants.ID.CURRENT_WORD);

  const _initGame = () => {
    document.addEventListener(Constants.EVENTS.KEYDOWN, checkKey);
    newButton.addEventListener(Constants.EVENTS.CLICK, newGame);
    newButtonRobot.addEventListener(Constants.EVENTS.CLICK, newGameWithRobot);
    optionButton.addEventListener(Constants.EVENTS.CLICK, checkAnswer);
    optionButton2.addEventListener(Constants.EVENTS.CLICK, checkAnswer);

    disableOptionButtons();
  };

  const newGame = () => {
    score = Constants.GAME.INITIAL_SCORE;
    level = Constants.GAME.INITIAL_LEVEL;
    clearTimeout(robotTimeout);
    ProgressBar.stopProgressBar();
    enableOptionButtons();
    nextLevel();
  };

  const newGameWithRobot = () => {
    isRobotPlaying = Constants.GAME.WITH_ROBOT;
    newGame();
  };

  const nextLevel = () => {
    level++;

    if (level === (Constants.GAME.MAX_LEVEL + 1)) {
      level--;
      updateValues();
      endGame();
    } else {
      setGameButtonsValues();
      updateValues();
      ProgressBar.startProgressBar(nextLevel);

      if (isRobotPlaying) {
        robotMove();
      }
    }
  };

  const endGame = loosing => {
    let loosesMessage = Constants.HUMAN_LOOSE_TEXT;
    let winsMessage = isRobotPlaying ? Constants.ROBOT_WIN_TEXT_PART_1 : Constants.HUMAN_WIN_TEXT_PART_1;
    let winsMessage2 = isRobotPlaying ? Constants.ROBOT_WIN_TEXT_PART_2 : Constants.HUMAN_WIN_TEXT_PART_2;
    currentWordLabel.style.color = Constants.COLORS.BLACK;
    currentWordLabel.innerText = loosing ? loosesMessage : (winsMessage + score + winsMessage2);

    level = Constants.GAME.INITIAL_LEVEL;
    score = Constants.GAME.INITIAL_SCORE;
    isRobotPlaying = Constants.GAME.WITHOUT_ROBOT;
    clearTimeout(robotTimeout);
    disableOptionButtons();
  };

  const setGameButtonsValues = () => {
    currentWordLabelModel.word = Utils.getRandomColor();
    currentWordLabelModel.color = Utils.getRandomColorNotIn(currentWordLabelModel.word);

    if (Utils.getRandomInt(0, 1)) {
      optionButtonModel.word = currentWordLabelModel.word;
      optionButtonModel2.word = currentWordLabelModel.color;
    } else {
      optionButtonModel.word = currentWordLabelModel.color;
      optionButtonModel2.word = currentWordLabelModel.word;
    }

    optionButtonModel.color = Utils.getRandomColorNotIn(optionButtonModel.word);
    optionButtonModel2.color = Utils.getRandomColorNotIn(optionButtonModel2.word);
  };

  const updateValues = () => {
    scoreLabel.innerText = score;
    levelLabel.innerText = level;

    optionButton.innerText = optionButtonModel.word.toUpperCase();
    optionButton.style.color = optionButtonModel.color;
    optionButton.style.border = Constants.DEFAULT_BORDER + optionButtonModel.color;

    optionButton2.innerText = optionButtonModel2.word.toUpperCase();
    optionButton2.style.color = optionButtonModel2.color;
    optionButton2.style.border = Constants.DEFAULT_BORDER + optionButtonModel2.color;

    currentWordLabel.innerText = currentWordLabelModel.word.toUpperCase();
    currentWordLabel.style.color = currentWordLabelModel.color;
  };

  const enableOptionButtons = () => {
    optionButton.disabled = false;
    optionButton2.disabled = false;
    optionButton.style.backgroundColor = Constants.COLORS.WHITE;
    optionButton2.style.backgroundColor = Constants.COLORS.WHITE;
  };

  const disableOptionButtons = () => {
    optionButton.disabled = true;
    optionButton.innerText = Constants.DEFAULT_BUTTON_TEXT;
    optionButton.style.border = Constants.DEFAULT_BORDER + Constants.COLORS.BLACK;
    optionButton.style.backgroundColor = Constants.COLORS.TRANSPARENT_BLACK;
    optionButton.style.color = Constants.COLORS.BLACK;

    optionButton2.disabled = true;
    optionButton2.innerText = Constants.DEFAULT_BUTTON_TEXT;
    optionButton2.style.border = Constants.DEFAULT_BORDER + Constants.COLORS.BLACK;
    optionButton2.style.backgroundColor = Constants.COLORS.TRANSPARENT_BLACK;
    optionButton2.style.color = Constants.COLORS.BLACK;
  };

  const robotMove = () => {
    let goalColor = currentWordLabel.style.color;
    robotTimeout = setTimeout(() => {
      if (optionButton.innerText.toLowerCase() === goalColor) {
        optionButton.click();
      } else {
        optionButton2.click();
      }
    }, Constants.GAME.ROBOT_TIME_PER_MOVE);
  };

  const checkAnswer = e => {
    let timeLeft = 0;
    if (e.target.innerText.toLowerCase() === currentWordLabel.style.color) {
      timeLeft = ProgressBar.stopProgressBar();
      score = score + timeLeft * Constants.GAME.SCORE_PER_LEVEL;
    }
    if (!e.isTrusted) {
      e.target.focus();
    }

    setTimeout(() => {
      e.target.blur();
    }, 400);
    ProgressBar.stopProgressBar();
    nextLevel();
  };

  const checkKey = e => {
    let optionButtonsEnabled = (!optionButton.disabled && !optionButton2.disabled);
    if (e.keyCode == Constants.EVENTS.KEYS.LEFT) {
      if (optionButtonsEnabled) {
        optionButton.click();
      } else {
        newGame();
      }
    } else if (e.keyCode == Constants.EVENTS.KEYS.RIGHT) {
      if (optionButtonsEnabled) {
        optionButton2.click();
      } else {
        newGameWithRobot();
      }
    }
  };

  _initGame();
}