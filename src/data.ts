export type Quiz = {
  quizName: string;
  questions: Questions[];
};

export type Questions = {
  id: number;
  question: string;
  points: number;
  negativePoints: number;
  options: Options[];
};

export type Options = {
  answer: string;
  isRight: boolean;
};

const quizData: Quiz = {
  quizName: "Breaking Bad Quiz",

  questions: [
    {
      id: 1,
      question: "What was the street name of Walter White's crystal meth?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          answer: "Blue Sky",
          isRight: true,
        },
        {
          answer: "Blue Diamond",
          isRight: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who said this dialogue: - 'I know a guy who knows a guy'.",
      points: 5,
      negativePoints: 2,
      options: [
        {
          answer: "Mike Ehramntraut",
          isRight: false,
        },
        {
          answer: "Saul Goodman",
          isRight: true,
        },
      ],
    },
    {
      id: 3,
      question: "What primitive weapon do Tuco’s murderous cousins favor?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          answer: "Axe",
          isRight: true,
        },
        {
          answer: "Hammer",
          isRight: false,
        },
      ],
    },
    {
      id: 4,
      question: "What was the hidden lab made by Gustavo Fring built over?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          answer: "A Warehouse",
          isRight: false,
        },
        {
          answer: "A Laundry",
          isRight: true,
        },
      ],
    },
    {
      id: Date.now(),
      question: "They’re not rocks, Marie! They’re ----",
      points: 10,
      negativePoints: 2,
      options: [
        {
          answer: "Minerals",
          isRight: true,
        },
        {
          answer: "Gems",
          isRight: false,
        },
      ],
    },
  ],
};

export { quizData };
