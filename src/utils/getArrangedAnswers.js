import { v4 } from "uuid";

const getRandomList = () => {
  const randomList = [];

  for (let i = 0; i < 30; i++) {
    const random = Math.floor(Math.random() * 4);

    if (randomList.length === 0) {
      randomList.push(random);
    } else if (randomList.length < 4) {
      if (randomList.every((e) => e !== random)) {
        randomList.push(random);
      }
    }
  }

  return randomList;
};

const getArrangedAnswers = (data) => {
  const answers = [...data.incorrect_answers, data.correct_answer];
  const newAnswers = [];

  getRandomList()?.forEach((e) =>
    newAnswers.push({
      ans: answers[e],
      isSelect: false,
      id: v4(),
    })
  );

  return newAnswers;
};

export default getArrangedAnswers;
