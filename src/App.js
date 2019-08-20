import React from "react";
import { Component } from "react";
import "./App.css";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import axios from "axios";

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          process.env.REACT_APP_MY_KEY
        }`
      )
      .then(res => this.setState({ photo: res.data }));
  }

  getPhoto = date => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${
          process.env.REACT_APP_MY_KEY
        }`
      )
      .then(res => this.setState({ photo: res.data }));
  };

  render() {
    return (
      <div>
        <DateInput changeDate={this.changeDate} date={this.state.date} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
