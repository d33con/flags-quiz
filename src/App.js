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
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        const arrLength = data.length;
        const randNumArray = [];
        for (var i = 1; i < 5; i++) {
          let randNum = Math.floor(Math.random() * arrLength);
          randNumArray.push(data[randNum]);
        }
        this.setState({ countries: randNumArray });
        this.setQuestion();
      })
      //.then(this.setQuestion())
      .catch(err => console.log(err));
  };

  setQuestion = () => {
    const randNum = Math.floor(Math.random() * this.state.countries.length);
    const country = this.state.countries[randNum];
    const flag = country.flag;
    const correctAnswer = country.name;
    this.setState({ flag, correctAnswer });
  };

  render() {
    const countryChoices = this.state.countries.map(country => {
      return (
        <div>
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label htmlFor="contactChoice1">{country.name}</label>
        </div>
      );
    });

    return (
      <div className="App">
        <header>Country Flag Quiz!</header>
        <div className="question-container">
          <form action="">{countryChoices}</form>
          <div className="image">
            <img src={this.state.flag} alt="" className="flag" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
