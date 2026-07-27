import { useState } from "react";
import LanguageContext from "./LanguageContext";
import Translator from "./Translator";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <button
        onClick={() =>
          setLanguage(language === "en" ? "es" : "en")
        }
      >
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>

      <Translator />
    </LanguageContext.Provider>
  );
};

export default App;