import { en } from './en';
import { ru } from './ru';

const locale = localStorage.getItem('locale');
const chosenLocale = (locale === 'ru') ? ru : en;

export default chosenLocale;
