import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Translator = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>{language === "en" ? "Hello" : "Hola"}</h1>
    </div>
  );
};

export default Translator;