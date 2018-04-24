import React from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

const Answer = props => {
  return (
    <div className={props.showAnswer ? "answer shown" : "answer hidden"}>
      <Typography variant="display3" gutterBottom>
        {props.correct ? "Correct!" : "Wrong!"}
      </Typography>
      {props.correct ? null : (
        <Typography variant="display1" gutterBottom>
          The correct answer is: {props.correctAnswer}
        </Typography>
      )}
      <Button
        variant="raised"
        color="secondary"
        size="large"
        onClick={props.newQuestion}
      >
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
