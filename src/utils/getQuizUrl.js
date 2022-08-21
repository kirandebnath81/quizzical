export const getQuizUrl = (difficulty, category) => {
  if (difficulty === "" && category === "") {
    return "https://opentdb.com/api.php?amount=10&type=multiple";
  } else if (difficulty === "") {
    return `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;
  } else if (category === "") {
    return `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`;
  } else {
    return `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
  }
};
