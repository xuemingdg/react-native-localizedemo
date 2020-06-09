import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from './locale/en.js'
import zh from './locale/zh.js'
import ja from './locale/ja.js'

import {store} from '../redux/store'

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;  // 用户系统偏好语言
const { userLanguageSetting } = store.getState();
 
if (userLanguageSetting) {
  I18n.locale = userLanguageSetting;
} else if (systemLanguage) {
  I18n.locale = systemLanguage;
} else {
  I18n.locale = 'en';  // 用户既没有设置，也没有获取到系统语言时，默认加载英语语言资源
}

store.subscribe(() => {
  const { userLanguageSetting: newUserLanguageSetting } = store.getState();
 
  if (newUserLanguageSetting && newUserLanguageSetting !== userLanguageSetting) {
    I18n.locale = newUserLanguageSetting;
  }
});

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh,
    ja
};

export default I18n;

export { systemLanguage };