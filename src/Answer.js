import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";

const Answer = props => {
  return (
    <div className={props.showAnswer ? "answer shown" : "answer hidden"}>
      <div>{props.correct ? "Correct!" : "Wrong!"}</div>
      {props.correct ? null : (
        <div>The correct answer is: {props.correctAnswer}</div>
      )}
      <Button variant="raised" onClick={props.newQuestion}>
        Next Question
      </Button>
    </div>
  );
};

Answer.propTypes = {
  showAnswer: PropTypes.bool.isRequired,
  correct: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string,
  newQuestion: PropTypes.func.isRequired
};

export default Answer;
