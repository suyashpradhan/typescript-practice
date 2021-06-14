import { Quiz } from "./quiz.types";

export const quiz: Quiz = {
  quizName: "Marvel Cinematic Universe",
  questions: [
    {
      id: 1,
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      options: [
        {
          id: 1,
          text: "22",
          isRight: false,
        },
        {
          id: 2,
          text: "6",
          isRight: true,
        },
      ],
    },
    {
      id: 2,
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      options: [
        {
          id: 1,
          text: "getting trained as master of the mystic arts",
          isRight: false,
        },
        {
          id: 2,
          text: "performing surgery as a real doctor",
          isRight: true,
        },
      ],
    },
  ],
};
