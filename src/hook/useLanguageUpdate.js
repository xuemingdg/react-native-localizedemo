import React, { useState, useEffect } from 'react';
import { store } from '../redux/store';
import I18n from '../languages/i18n';
 
const useLanguageUpdate = (funcWhenUpdate) => {
  const [currentLanguageCode, setCurrentLanguageCode] = useState(I18n.locale);
 
  useEffect(() => {
    return store.subscribe(() => {
      const { userLanguageSetting: newLanguageCode } = store.getState();
 
      if (newLanguageCode && newLanguageCode != currentLanguageCode) {
        setCurrentLanguageCode(newLanguageCode);
        if (funcWhenUpdate) funcWhenUpdate();
      }
    });
  }, [currentLanguageCode]);
 
  return currentLanguageCode;
};
 
export {useLanguageUpdate} ;