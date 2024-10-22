import express from "express"
const router = express.Router()

const questions = [
    {
        id: "q1",
        text: "Vem kom på termen 'björfärs'?",
        answers: ["Herman","En förvirrad copilot","Puckscar","Justin Bieber"],
        correctAnswer: "En förvirrad copilot"
    },
    {
        id: "q2",
        text: "Varför började snacket om klegg?",
        answers: ["Fem grabbar tittade på Alien: Romulus på bio","Olle halkade på en slemmig substans","Sam snackade skit om skolmaten","Herman spydde utanför MAX"],
        correctAnswer: "Fem grabbar tittade på Alien: Romulus på bio"
    },
    {
        id: "q3",
        text: "Hur många achievements har spelet 'Barony', även känt som 'BERNY'?",
        answers: [21,89,231,164],
        correctAnswer: 231
    },
    {
        id: "q4",
        text: "Vem är Steve?",
        answers: ["Keanu Reeves","Henrik","Kalle Anka","Jack Black"],
        correctAnswer: "Jack Black"
    },
    {
        id: "q5",
        text: "Hur många bossar finns det i spelet 'Terraria'? (Event bossar inkluderade)",
        answers: [33,22,48,19],
        correctAnswer: 33
    },
    {
        id: "q6",
        text: "Vem är Josua egentligen?",
        answers: ["Henry Bowers", "Sabrina Carpenter", "Gavrilo Princip", "Jon Henrik Fjällgren"],
        correctAnswer: "Gavrilo Princip"
    },
    {
        id: "q7",
        text: "Vilken är den sista bossen i silent hill 2?",
        answers: ["Mary/Maria", "Pyramid Head", "Abstract Daddy", "Eddie"],
        correctAnswer: "Mary/Maria"
    },
    {
        id: "q8",
        text: "Vilken av dessa kända personer är en rappare?",
        answers: ["Beyoncé", "Mikael Persbrandt", "Matthew Lillard", "Henry Bowers"],
        correctAnswer: "Henry Bowers"
    },
    {
        id: "q9",
        text: "Hur många perks finns det i skräckspelet 'Dead By Daylight' (Survivor + Killer)(Oktober 2024)?",
        answers: [270, 179, 93, 341],
        correctAnswer: 270
    },
    {
        id: "q10",
        text: "Vilken av dessa var en idé på ett gymnasiearbete?",
        answers: ["Hoppa fallskärm från Utopia", "Stor korv, kan man?", "Dynamit Harry vs Jokern", "Burgrik vs Eggrik"],
        correctAnswer: "Stor korv, kan man?"
    },
    {
        id: "q11",
        text: "Finns verkligen spelet 'Minecraft'?",
        answers: ["Ja", "Nej"],
        correctAnswer: "Ja"
    },
    {
        id: "q12",
        text: "Vilken av dessa är en riktig manga?",
        answers: ["Bersekr", "RomajiDesu", "Frying pan Man", "Uzumaki"],
        correctAnswer: "Uzumaki"
    },
    {
        id: "q13",
        text: "Vem är klassens Orvar?",
        answers: ["Puckscar", "Puckolle", "Puckrik", "Sam"],
        correctAnswer: "Puckscar"
    },
]

router.get("/", (req,res) => {
    res.render("quiz.njk", {
        message: "Quiz"
    })

})

router.get('/questions', (req,res) => {
    res.render("questions.njk", {
        message: "Frågor",
        questions
    })
})

router.post('/end', (req,res) => {
    const answers = req.body
    console.log(answers)
    const result = questions.map(question => {
      const answer = answers[question.id]
      return {
        question: question.text,
        answer,
        correct: question.correctAnswer
      }
    })
  // questions.forEach(question => {
  //   const answer = answers[question.id]
  //   if (answer == question.correctAnswer) {
  //     console.log("Du har svarat rätt på fråga : ", question.id)
  //   }
  // })
  res.render("result.njk", {
    message: "Ditt resultat",
    result
  })
})

export default router