import { isMobile } from 'react-device-detect';
import {  koreanFlag, laosFlag } from '../assets/images';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const getButtonClass = (lang) => {
    return `w-12 h-auto rounded overflow-hidden cursor-pointer border ${
      i18n.language === lang ? 'border-gray-400' : 'border-transparent'
    }`;
  };

  return (
    <div className={`flex ${isMobile ? 'space-x-14' : 'space-x-24'} justify-center items-center`}>
      <button onClick={() => changeLanguage('en')} className={getButtonClass('en')}>
        <img src='/webimage/USA.png' alt="English" className="w-full h-full object-cover" />
      </button>
      <button onClick={() => changeLanguage('la')} className={getButtonClass('la')}>
        <img src={laosFlag} alt="Lao" className="w-full h-full object-cover" />
      </button>
      <button onClick={() => changeLanguage('ko')} className={getButtonClass('ko')}>
        <img src={koreanFlag} alt="Korean" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default LanguageSelector;
