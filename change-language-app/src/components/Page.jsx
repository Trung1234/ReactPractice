import React from "react";
import { BaseContext } from "./shared/BaseContext";

class Page extends React.Component {
  static contextType = BaseContext;
  context;
  render() {
    const listLanguage = {
      vi: "Tiếng Việt",
      eng: "Tiếng Anh",
      jp: "Tiếng Nhật",
    };
    console.log("Page");
    return (
      <>
        <p>This is</p>
        <p>Current language is {listLanguage[this.context.state.language]} </p>
      </>
    );
  }
}

export default Page;
