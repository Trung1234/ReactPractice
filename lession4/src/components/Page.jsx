import { useContext } from "react";
import { BaseContext } from "./shared/BaseProvider";


const Page = ()=>{
    //const language = "English";
    const context = useContext(BaseContext);
    const listLanguage = {vi:'Tiếng Việt', eng:'Tiếng Anh',jp:'Tiếng Nhật'};
    return (
        <>
        <p>This is</p>
        <p>Current language is {listLanguage[context.language]} </p>
        </>
    );
}

export default Page;