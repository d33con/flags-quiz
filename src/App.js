import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
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
        this.setState({ countries });
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
      ? console.log("correct")
      : console.log("wrong");
  };

  render() {
    const countryChoices = this.state.countries.map(country => {
      return (
        <div key={country.numericCode}>
          <input
            type="radio"
            id={country.demonym}
            value={country.name}
            onChange={this.onOptionChoose}
            checked={this.state.submittedAnswer === country.name}
          />
          <label htmlFor={country.demonym}>{country.name}</label>
        </div>
      );
    });

    return (
      <div className="App">
        <header>Country Flag Quiz!</header>
        <div className="question-container">
          <form action="">
            {countryChoices}
            <button onClick={this.onSubmitAnswer}>Answer</button>
          </form>
          <div className="image">
            <img src={this.state.flag} alt="" className="flag" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
