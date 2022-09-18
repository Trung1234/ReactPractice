import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BaseContext } from "./components/shared/BaseContext";
import ErrorBoundary from "./components/shared/ErrorBoundary";

class App extends React.Component {
  //Let's declare our main state here, it would be global, and can be shared!
  constructor(props) {
    super(props);
    this.state = {
      language: "eng",
    };
  }

  render() {
    const handleChangeLanguage = (language) => {
      localStorage.setItem("lang", language);
      console.log("handleChangeLanguage");
      // this.setState({ lang });
      this.setState({
        language: language,
      });
    };
    return (
      <div className="App">
        <BaseContext.Provider
          value={{ state: this.state, handleChangeLanguage }}>
          <ErrorBoundary>
            <Home></Home>
            </ErrorBoundary>
        </BaseContext.Provider>
      </div>
    );
  }
}

export default App;
