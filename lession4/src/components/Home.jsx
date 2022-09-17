import { useContext } from "react";
import Page from "./Page";
import { BaseContext } from "./shared/BaseProvider";
import Footer from "./shared/Footer";
import * as constants from '../common/constant';

function Home() {
    console.log('Home');
    const context = useContext(BaseContext);
    console.log(context);
    const changeLanguage = (e)=>{
        console.log(e.target.value);
        context.handleChangeLanguage(e.target.value);       
    };
    // Array of objects containing our language data
    let languages = constants.languages;
    console.log(languages);
    // let optionItems = languages.map((item) =>
    //     <option value={i}>{item}</option>
    // );
    return (
      <div >
        <select  onChange={changeLanguage} value={context.language}>
        {languages.map((language) => <option value={language.key}>{language.value}</option>)}
          
        </select>
        <Page></Page>
        <Footer></Footer>
      </div>      
    );
  }
  
  export default Home;