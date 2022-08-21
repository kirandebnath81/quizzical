const answerStyle = (isSelect, ans, correctAns, isSubmit) => {
  if (isSubmit) {
    if (ans === correctAns) {
      return { background: "#41f579" };
    }

    if (isSelect) {
      if (ans !== correctAns) {
        return { background: "#ff5f5f", color: "white" };
      }
    }
  } else if (isSelect) {
    return { background: "#777c7b", color: "white" };
  }
};

export default answerStyle;
