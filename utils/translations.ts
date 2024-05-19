import it from '../locale/it.json';
import en from '../locale/en.json';

interface Translation {
  [key: string]: string;
}

interface Translation {
  // chi-siamo
  title: string;
  mission_title: string;
  thought_1: string;
  thought_2: string;
  thought_3: string;
  thought_4: string;
  thought_5: string;
  help_title: string;
  why_title: string;
  why_description: string;
  friendly_note: string;
  playlist_note: string;
  link_text: string;
}



  

const translations = {
  it: it as Translation,
  en: en as Translation
};

export const translate = (key: string, language: 'it' | 'en') => {
  return translations[language][key] || key;
};

