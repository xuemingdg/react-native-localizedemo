import * as actionType from './actions';
 
let initialState = {
  userLanguageSetting: null  // 用户手动设置的语言
};
 
const publicReducer = (state = initialState, action) => {
  const { type, payload } = action;
 
  switch(type) {
    case actionType.USER_SET_LANGUAGE:
      const { languageCode } = payload;
 
      return {
        ...state,
        userLanguageSetting: languageCode
      }
    default:
      return state;
  }
}
 
export default publicReducer;