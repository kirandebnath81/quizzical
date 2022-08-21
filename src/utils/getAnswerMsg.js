import { FaTimes } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const getAnswerMsg = (data) => {
  if (data.answerType === "correct") {
    return (
      <div className="ans-type correct-ans">
        <MdDone className="icon" />
        Awsome! Your answer is correct, you scored
        <span> 10</span>
      </div>
    );
  } else if (data.answerType === "incorrect") {
    return (
      <div className="ans-type incorrect-ans">
        <FaTimes className="icon" /> Sorry. Your answer is incorrect, you scored
        <span> -3 </span>
      </div>
    );
  } else {
    return (
      <div className="ans-type not-answered">
        Opps! you have not answered , you scored <span>0</span>
      </div>
    );
  }
};

export default getAnswerMsg;
