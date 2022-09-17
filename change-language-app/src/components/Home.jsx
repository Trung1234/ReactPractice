
import React from 'react'
import Footer from "./shared/Footer";
import * as constants from '../common/constant';
import { BaseContext } from './shared/BaseContext';


export default class Home extends React.Component {
  static contextType = BaseContext;
  context;
  state = {
    language: {},
    setLanguage: this.handleChangeLanguage,
  }; 

  handleChangeLanguage = (lang)=>{
    localStorage.setItem('lang', lang);
    this.context.setLanguage(lang);
  };
  componentDidMount() {
    //context  = this.context;
    //It will get the data from context, and put it into the state.
    this.setState({ language: this.context.language });
  }

  render() {
    console.log('Home');
    //const context = useContext(BaseContext);
    // console.log(context);
    const changeLanguage = (e)=>{
        console.log(e.target.value);
        this.context.handleChangeLanguage(e.target.value);       
    };
    const listLanguage = {vi:'Tiếng Việt', eng:'Tiếng Anh',jp:'Tiếng Nhật'};
    // Array of objects containing our language data
    let languages = constants.languages;
    console.log(languages);
    
    return (<div >
    <select   onChange={changeLanguage} value={this.context.language}>
    {languages.map((language) => <option value={language.key}>{language.value}</option>)}
      
    </select>
    <p>This is</p>
        <p>Current language is {listLanguage[this.context.language]} </p>
    {/* <Page></Page> */}
    <Footer></Footer>
  </div>);   
  }
}




