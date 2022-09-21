import React, { useState } from "react";

export const BaseContext = React.createContext();
  const BaseProvider = (props) => {
  const setDefaultLanguage = () => {
    let languageLocal = localStorage.getItem("lang");
    if (languageLocal === "" || languageLocal === undefined) {
      return "eng";
    }
    return languageLocal;
  };
  const [language, setLanguage] = useState(setDefaultLanguage);
  const handleChangeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };
  return (
    <BaseContext.Provider value={{ language, handleChangeLanguage }}>
      {props.children}
    </BaseContext.Provider>
  );
};
export default BaseProvider;
