export type Option={
  optionName:string,
  isRight:boolean
}

export type Question={
  question:string
  points:number,
  option:Option[]
}

export type Quiz={
  quizName:string,
  questions:Question[]

}

const quizData:Quiz = {
  quizName: "My QUIZ",

  questions: [
    {
      question: "What is your name?",
      points:5,
      option: [
        {
          optionName: "Suyash",
          isRight: true,
        },
        {
          optionName: "Soham",
          isRight: false,
        },
      ],
    },{
      question: "What is my age",
      points:15,
      option: [
        {
          optionName: "24",
          isRight: true,
        },
        {
          optionName:"28",
          isRight: false,
        },
      ],
    },
  ],
};

export default quizData

