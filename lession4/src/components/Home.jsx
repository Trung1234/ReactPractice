import { useContext } from "react";
import Page from "./Page";
import { BaseContext } from "./shared/BaseProvider";
import Footer from "./shared/Footer";


function Home() {
    console.log('Home');
    const context = useContext(BaseContext);
    console.log(context);
    const changeLanguage = (e)=>{
        console.log(e.target.value);
        context.handleChangeLanguage(e.target.value);       
    };
   
    return (
      <div >
        <select  onChange={changeLanguage} value={context.language}>
            <option value="eng">English</option>
            <option value="vi">Vietnamese</option>
            <option value="jp">Japanese</option>
        </select>
        <Page></Page>
        <Footer></Footer>
      </div>      
    );
  }
  
  export default Home;