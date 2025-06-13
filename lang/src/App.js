import "./App.css";
import { useTranslation } from "react-i18next";
import eng from "./asserts/Flag_of_England.svg.png";
import frc from "./asserts/Flag_of_France.svg.webp";
import geo from "./asserts/Flag_of_Georgia.svg.png";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();

  const [flag, setFlag] = useState("");

  const siteLanguage = [
    {
      code: "en",
      name: "English",
      flag: eng,
    },
    {
      code: "fr",
      name: "French",
      flag: frc,
    },
    {
      code: "ka",
      name: "Georgian",
      flag: geo,
    },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleFlagChange = (e) => {
    if (i18n.language === "en") {
      setFlag(eng);
    } else if (i18n.language === "ka") {
      setFlag(geo);
    } else {
      setFlag(frc);
    }
  };

  return (
    <div className="App">
      <h1> {t("welcome")} </h1>

      <div className="language-menu">
        <div className="select-wrapper" >
          <div className="flag" style={{backgroundImage: `${flag}`}}></div>
          <div className="select-arrow globe">
            <select
              className="select"
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              {siteLanguage.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
