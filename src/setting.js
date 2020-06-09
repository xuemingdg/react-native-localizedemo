import React, { Component } from 'react';
import { View, SafeAreaView, Text} from 'react-native';

import {Button} from 'native-base';
import CBCarolWidget from 'react-native-carol-widget'

import {store} from './redux/store'
import { setLanguage } from './redux/actionCreator'
import I18n,{ systemLanguage } from './languages/i18n'
import { useLanguageUpdate } from './hook/useLanguageUpdate';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

console.log(store.getState());

export default function SettingPage({navigation}) {
    useLanguageUpdate();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}>
            <Text style={{}}>{I18n.t('test_key_1')}</Text>
            {/* <CBCarolWidget></CBCarolWidget> */}
            <Button warning
            style={{marginTop:30, padding:10}}
            onPress={()=>{
                console.log('on click!');  
                if(I18n.locale != systemLanguage){
                    store.dispatch(setLanguage(systemLanguage));
                }
                else{
                    store.dispatch(setLanguage('en'));
                }
                console.log(store.getState());
            }}>
                <Text style={{}}>{I18n.t('switch_key')}</Text>
            </Button>
            <Button warning
            style={{marginTop:30, padding:10}}
            onPress={()=>{
                navigation.navigate("Random");
            }}>
                <Text style={{}}>{I18n.t('random_key')}</Text>
            </Button>
            </View>
        </SafeAreaView>
      
    );
};
