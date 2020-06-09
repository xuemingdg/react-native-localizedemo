import * as actionType from './actions';
 
// languageCode一定要严格按照RNLocalize.getLocales()中返回各语言字段编码来定义
const setLanguage = (languageCode) => {
  return {
    type: actionType.USER_SET_LANGUAGE,
    payload: {
      languageCode
    }
  }
}
 
export {
  setLanguage
};