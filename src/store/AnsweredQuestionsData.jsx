import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../db/db.json";

const AnsweredQuestionsContext = createContext();

export const AnsweredQuestionsProvider = ({ children }) => {
  const [checkedAnswers, setCheckedAnswers] = useState({
    1: {
      answers: {
        0: {
          questionId: "1",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    2: {
      answers: {
        0: {
          questionId: "2",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    3: {
      answers: {
        0: {
          questionId: "3",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    4: {
      answers: {
        0: {
          questionId: "4",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    5: {
      answers: {
        0: {
          questionId: "5",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    6: {
      answers: {
        0: {
          questionId: "6",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    7: {
      answers: {
        0: {
          questionId: "7",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    8: {
      answers: {
        0: {
          questionId: "8",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    9: {
      answers: {
        0: {
          questionId: "9",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    10: {
      answers: {
        0: {
          questionId: "10",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    11: {
      answers: {
        0: {
          questionId: "11",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    12: {
      answers: {
        0: {
          questionId: "12",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    13: {
      answers: {
        0: {
          questionId: "13",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    14: {
      answers: {
        0: {
          questionId: "14",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    15: {
      answers: {
        0: {
          questionId: "15",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    16: {
      answers: {
        0: {
          questionId: "16",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    17: {
      answers: {
        0: {
          questionId: "17",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    18: {
      answers: {
        0: {
          questionId: "18",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    19: {
      answers: {
        0: {
          questionId: "19",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    20: {
      answers: {
        0: {
          questionId: "20",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    21: {
      answers: {
        0: {
          questionId: "21",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    22: {
      answers: {
        0: {
          questionId: "22",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    23: {
      answers: {
        0: {
          questionId: "23",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    24: {
      answers: {
        0: {
          questionId: "24",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    25: {
      answers: {
        0: {
          questionId: "25",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    26: {
      answers: {
        0: {
          questionId: "26",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    27: {
      answers: {
        0: {
          questionId: "27",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    28: {
      answers: {
        0: {
          questionId: "28",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    29: {
      answers: {
        0: {
          questionId: "29",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    30: {
      answers: {
        0: {
          questionId: "30",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    31: {
      answers: {
        0: {
          questionId: "31",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    32: {
      answers: {
        0: {
          questionId: "32",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    33: {
      answers: {
        0: {
          questionId: "33",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    34: {
      answers: {
        0: {
          questionId: "34",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    35: {
      answers: {
        0: {
          questionId: "35",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    36: {
      answers: {
        0: {
          questionId: "36",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    37: {
      answers: {
        0: {
          questionId: "37",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    38: {
      answers: {
        0: {
          questionId: "38",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    39: {
      answers: {
        0: {
          questionId: "39",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    40: {
      answers: {
        0: {
          questionId: "40",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    41: {
      answers: {
        0: {
          questionId: "41",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    42: {
      answers: {
        0: {
          questionId: "42",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    43: {
      answers: {
        0: {
          questionId: "43",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    44: {
      answers: {
        0: {
          questionId: "44",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    45: {
      answers: {
        0: {
          questionId: "45",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    46: {
      answers: {
        0: {
          questionId: "46",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    47: {
      answers: {
        0: {
          questionId: "47",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    48: {
      answers: {
        0: {
          questionId: "48",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    49: {
      answers: {
        0: {
          questionId: "49",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    50: {
      answers: {
        0: {
          questionId: "50",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    51: {
      answers: {
        0: {
          questionId: "51",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    52: {
      answers: {
        0: {
          questionId: "52",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    53: {
      answers: {
        0: {
          questionId: "53",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    54: {
      answers: {
        0: {
          questionId: "54",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    55: {
      answers: {
        0: {
          questionId: "55",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    56: {
      answers: {
        0: {
          questionId: "56",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    57: {
      answers: {
        0: {
          questionId: "57",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    58: {
      answers: {
        0: {
          questionId: "58",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    59: {
      answers: {
        0: {
          questionId: "59",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    60: {
      answers: {
        0: {
          questionId: "60",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    61: {
      answers: {
        0: {
          questionId: "61",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    62: {
      answers: {
        0: {
          questionId: "62",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    63: {
      answers: {
        0: {
          questionId: "63",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    64: {
      answers: {
        0: {
          questionId: "64",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    65: {
      answers: {
        0: {
          questionId: "65",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    66: {
      answers: {
        0: {
          questionId: "66",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    67: {
      answers: {
        0: {
          questionId: "67",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    68: {
      answers: {
        0: {
          questionId: "68",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    69: {
      answers: {
        0: {
          questionId: "69",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    70: {
      answers: {
        0: {
          questionId: "70",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    71: {
      answers: {
        0: {
          questionId: "71",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    72: {
      answers: {
        0: {
          questionId: "72",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    73: {
      answers: {
        0: {
          questionId: "73",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    74: {
      answers: {
        0: {
          questionId: "74",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    75: {
      answers: {
        0: {
          questionId: "75",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    76: {
      answers: {
        0: {
          questionId: "76",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    77: {
      answers: {
        0: {
          questionId: "77",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    78: {
      answers: {
        0: {
          questionId: "78",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    79: {
      answers: {
        0: {
          questionId: "79",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    80: {
      answers: {
        0: {
          questionId: "80",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    81: {
      answers: {
        0: {
          questionId: "81",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    82: {
      answers: {
        0: {
          questionId: "82",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    83: {
      answers: {
        0: {
          questionId: "83",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    84: {
      answers: {
        0: {
          questionId: "84",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    85: {
      answers: {
        0: {
          questionId: "85",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    86: {
      answers: {
        0: {
          questionId: "86",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    87: {
      answers: {
        0: {
          questionId: "87",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    88: {
      answers: {
        0: {
          questionId: "88",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    89: {
      answers: {
        0: {
          questionId: "89",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    90: {
      answers: {
        0: {
          questionId: "90",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    91: {
      answers: {
        0: {
          questionId: "91",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    92: {
      answers: {
        0: {
          questionId: "92",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    93: {
      answers: {
        0: {
          questionId: "93",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    94: {
      answers: {
        0: {
          questionId: "94",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    95: {
      answers: {
        0: {
          questionId: "95",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    96: {
      answers: {
        0: {
          questionId: "96",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
    97: {
      answers: {
        0: {
          questionId: "97",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    98: {
      answers: {
        0: {
          questionId: "98",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    99: {
      answers: {
        0: {
          questionId: "99",
          answerIndex: 0,
          isCorrect: false,
        },
      },
      correct: false,
    },
    100: {
      answers: {
        0: {
          questionId: "100",
          answerIndex: 0,
          isCorrect: true,
        },
      },
      correct: false,
    },
  });
  const handleChange = (questionId, answerIndex, isCorrect, checked) => {
    setCheckedAnswers((prevCheckedAnswers) => {
      let newCheckedAnswers = { ...prevCheckedAnswers };

      if (!newCheckedAnswers[questionId]) {
        newCheckedAnswers[questionId] = {
          answers: {},
          correct: false,
        };
      }

      if (checked) {
        newCheckedAnswers[questionId].answers[answerIndex] = {
          questionId,
          answerIndex,
          isCorrect,
        };
      } else {
        if (newCheckedAnswers[questionId].answers) {
          delete newCheckedAnswers[questionId].answers[answerIndex];
        }
        if (Object.keys(newCheckedAnswers[questionId].answers).length === 0) {
          delete newCheckedAnswers[questionId];
        }
      }

      return newCheckedAnswers;
    });
  };

  const verifyAnswers = (questionId, exam, year) => {
    const examData = db.find((item) => item.exam === exam);
    const yearData = examData.data.find((item) => item.year === year);
    const questionsData = yearData.data.find((item) => {
      const questionsList = item.data;
      return questionsList.find((question) => question.id === questionId);
    });
    const question = questionsData.data.find((item) => item.id === questionId);
    if (question) {
      const answers = question.answers;
      const totalCorrectAnswers = answers.filter(
        (item) => item.isCorrect === true
      ).length;

      if (checkedAnswers[questionId]) {
        const correctAnswersCount = Object.values(
          checkedAnswers[questionId].answers
        ).filter((item) => item.isCorrect === true).length;
        if (
          totalCorrectAnswers ===
            Object.values(checkedAnswers[questionId].answers).length &&
          correctAnswersCount === totalCorrectAnswers
        ) {
          checkedAnswers[questionId].correct = true;
        } else {
          checkedAnswers[questionId].correct = false;
        }
      }
    }
  };

  const contextValue = {
    checkedAnswers,
    verifyAnswers,
    handleChange,
    setCheckedAnswers,
  };

  useEffect(() => {
    console.log(checkedAnswers);
  }, [checkedAnswers]);

  return (
    <AnsweredQuestionsContext.Provider value={contextValue}>
      {children}
    </AnsweredQuestionsContext.Provider>
  );
};

export const useAnsweredQuestionsData = () => {
  const context = useContext(AnsweredQuestionsContext);
  if (!context) {
    throw new Error(
      "useAnsweredQuestionsData must be used inside of an AnsweredQuestionsProvider"
    );
  }
  return context;
};
