import React from "react";
import PropTypes from "prop-types";

const Answer = props => {
  return (
    <div className={props.showAnswer ? "answer shown" : "answer hidden"}>
      <div>{props.correct ? "Correct!" : "Wrong!"}</div>
      {props.correct ? null : (
        <div>The correct answer is: {props.correctAnswer}</div>
      )}
      <button onClick={props.newQuestion}>Next Question</button>
    </div>
  );
};

Answer.propTypes = {};

export default Answer;
