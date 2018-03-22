  export const Constants = {
    HUMAN_WIN_TEXT_PART_1: '¡Wow! ¡Has conseguido ',
    HUMAN_WIN_TEXT_PART_2: ' puntos! ¡Qué crack!',
    HUMAN_LOOSE_TEXT: 'Vuelve a intentarlo...',
    ROBOT_WIN_TEXT_PART_1: 'Ha conseguido ',
    ROBOT_WIN_TEXT_PART_2: '... Vaya abusón...',
    SECONDS_SUFFIX: ' seg',
    DEFAULT_BORDER: '2px solid ',
    DEFAULT_BUTTON_TEXT: '- - -',
    COLORS: {
      BLACK: 'black',
      GREENYELLOW: 'greenyellow',
      ORANGE: 'orange',
      RED: 'red',
      TRANSPARENT_BLACK: 'rgba(0, 0, 0, 0.4)',
      WHITE: 'white'
    },
    ID: {
      NEW_BUTTON: 'new-button',
      NEW_BUTTON_ROBOT: 'new-button-robot',
      OPTION_BUTTON: 'option-button',
      OPTION2_BUTTON: 'option2-button',
      LEVEL_TEXT: 'level-text',
      SCORE_TEXT: 'score-text',
      TIME_TEXT: 'time-text',
      CURRENT_WORD: 'current-word',
      PROGRESS_BAR: 'progress-bar',
      PROGRESS_FILL: 'progress-fill'
    },
    EVENTS: {
      CLICK: 'click',
      KEYDOWN: 'keydown',
      KEYS: {
        LEFT: '37',
        RIGHT: '39'
      }
    },
    GAME: {
      INITIAL_SCORE: 0,
      INITIAL_LEVEL: 0,
      MAX_LEVEL: 10,
      ROBOT_TIME_PER_MOVE: 600,
      SCORE_PER_LEVEL: 100,
      PROGRESS_BAR_THRESHOLDS: {
        ORANGE_ZONE: 60,
        RED_ZONE: 25
      },
      WITH_ROBOT: true,
      WITHOUT_ROBOT: false
    }
  };