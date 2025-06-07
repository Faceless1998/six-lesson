import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <h1> {t('welcome')} </h1>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('fr')}>fr</button>
      <button onClick={() => changeLanguage('ka')}>ka</button>

    </div>
  );
}

export default App;
