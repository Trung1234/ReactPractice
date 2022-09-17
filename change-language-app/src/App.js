import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './components/Home';
import { BaseContext } from './components/shared/BaseContext';


class App extends React.Component {
   //Let's declare our main state here, it would be global, and can be shared!
   
  
  //This is the method to set the context data.
  setLanguage = (language) => {
    
    this.setState({ language });
  };
   
  
  setDefaultLanguage = ()=>{
    let languageLocal = localStorage.getItem('lang');
    if(languageLocal === '' || languageLocal === undefined){
        return "eng";
    }       
    return languageLocal;
  };  
   
  render() {
    const state = {
      language: "eng",
    }
    const handleChangeLanguage = (lang)=>{
      localStorage.setItem('lang', lang);
      this.setState({ lang });
    };
    return <div className="App">
      <BaseContext.Provider value={{state, handleChangeLanguage}}>
      <Home></Home>     
    </BaseContext.Provider>

      </div>;
  }
}

export default App;
