import enUS from './en-US';
import deDE from './de-DE';
import { LANGUAGE } from '../constants';

const selectTranslation = language => {
  switch (language) {
    case 'de-DE':
      return deDE;

    case 'en-US':
      return enUS;

    default:
      return enUS;
  }
}

export default selectTranslation(LANGUAGE);
