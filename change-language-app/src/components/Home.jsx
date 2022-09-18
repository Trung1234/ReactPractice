import React from "react";
import Footer from "./shared/Footer";
import * as constants from "../common/constant";
import { BaseContext } from "./shared/BaseContext";
import Page from "./Page";

export default class Home extends React.Component {
  static contextType = BaseContext;
  context;

  // componentDidMount() {
  //   const context = this.context;
  //   //context  = this.context;
  //   //It will get the data from context, and put it into the state.
  //   this.setState({ language: context.state.language });
  // }

  render() {
    console.log("Home");
    const changeLanguage = (e) => {
      console.log(e.target.value);
      this.context.handleChangeLanguage(e.target.value);
    };

    // Array of objects containing our language data
    let languages = constants.languages;
    console.log(languages);

    return (
      <div>
        <select onChange={changeLanguage} value={this.context.state.language}>
          {languages.map((language) => (
            <option value={language.key}>{language.value}</option>
          ))}
        </select>

        <Page></Page>
        <Footer></Footer>
      </div>
    );
  }
}
