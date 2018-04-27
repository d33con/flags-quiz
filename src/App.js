import React, { Component } from "react";
import Button from "material-ui/Button";
import Radio, { RadioGroup } from "material-ui/Radio";
import { FormControl, FormLabel, FormControlLabel } from "material-ui/Form";
import Typography from "material-ui/Typography";
import Answer from "./Answer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      answeredCorrectly: false,
      showAnswer: false
    };
  }

  componentDidMount() {
    this.getCountriesData();
  }

  getCountriesData = () => {
    const apiEndpoint = "https://restcountries.eu/rest/v2/all";
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const arrLength = data.length;
        const countries = [];
        for (var i = 1; i < 5; i++) {
          let randNum = Math.floor(Math.random() * arrLength);
          countries.push(data[randNum]);
        }
        this.setState({
          countries,
          answeredCorrectly: false,
          showAnswer: false,
          submittedAnswer: ""
        });
        this.setQuestion();
      })
      .catch(err => console.log(err));
  };

  setQuestion = () => {
    const randNum = Math.floor(Math.random() * this.state.countries.length);
    const country = this.state.countries[randNum];
    const flag = country.flag;
    const correctAnswer = country.name;
    this.setState({ flag, correctAnswer });
  };

  onOptionChoose = e => {
    this.setState({ submittedAnswer: e.target.value });
  };

  onSubmitAnswer = e => {
    e.preventDefault();
    this.state.correctAnswer === this.state.submittedAnswer
      ? this.setState({ answeredCorrectly: true, showAnswer: true })
      : this.setState({ answeredCorrectly: false, showAnswer: true });
  };

  render() {
    const {
      countries,
      submittedAnswer,
      flag,
      answeredCorrectly,
      showAnswer,
      correctAnswer
    } = this.state;

    const countryChoices = countries.map(country => {
      return (
        <FormControlLabel
          value={country.name}
          control={<Radio />}
          label={country.name}
          checked={submittedAnswer === country.name}
          key={country.numericCode}
        />
      );
    });

    return (
      <div className="app-container">
        <Typography variant="display3" paragraph={true}>
          Country Flag Quiz
        </Typography>
        <div className="question-container">
          <FormControl component="form">
            <FormLabel component="legend">Choose a country</FormLabel>
            <RadioGroup
              aria-label="country"
              name="countryChoice"
              value={submittedAnswer}
              onChange={this.onOptionChoose}
            >
              {countryChoices}
            </RadioGroup>
            <Button
              variant="raised"
              color="primary"
              onClick={this.onSubmitAnswer}
              size="large"
            >
              Answer
            </Button>
          </FormControl>
          <div className="image">
            <img src={flag} alt="" className="flag" />
          </div>
        </div>
        <div className="answer-container">
          <Answer
            correct={answeredCorrectly}
            newQuestion={this.getCountriesData}
            showAnswer={showAnswer}
            correctAnswer={correctAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;
