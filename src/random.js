import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';

import I18n from './languages/i18n'
import { useLanguageUpdate } from './hook/useLanguageUpdate';

import 'react-native-gesture-handler';

export default function RandomPage() {
    useLanguageUpdate();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}>
            <Text style={{}}>{I18n.t('test_key_1')}</Text>
            {/* <CBCarolWidget></CBCarolWidget> */}
            </View>
        </SafeAreaView>
      
    );
};
