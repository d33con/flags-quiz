import React from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

const Answer = ({ showAnswer, correctAnswer, newQuestion, correct }) => {
  return (
    <div className={showAnswer ? "answer shown" : "answer hidden"}>
      <Typography variant="display3" gutterBottom>
        {correct ? "Correct!" : "Wrong!"}
      </Typography>
      {correct ? null : (
        <Typography variant="display1" gutterBottom>
          The correct answer is: {correctAnswer}
        </Typography>
      )}
      <Button
        variant="raised"
        color="secondary"
        size="large"
        onClick={newQuestion}
      >
        Next Flag
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
