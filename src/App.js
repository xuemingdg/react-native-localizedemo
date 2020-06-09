import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';

import {Button} from 'native-base';

import {store, persistor} from './redux/store'
import I18n from './languages/i18n'
import { useLanguageUpdate } from './hook/useLanguageUpdate';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SettingPage from "./setting";
import RandomPage from "./random";

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  useLanguageUpdate();
  return (
        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1,
          flexDirection:'column',
          justifyContent:'center',
            alignItems:'center'}}>
            {/* <CBCarolWidget></CBCarolWidget> */}
          <Text>{I18n.t('home_key')}</Text>
            <Button danger
            style={{marginTop:30, padding:10}}
            onPress={()=>{
              navigation.navigate("Setting");
            }}>
              <Text style={{color:'#FFFFFF'}}>{I18n.t('btn_key')}</Text>
            </Button>
          </View>
        </SafeAreaView>
  );
}

export default function App() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator headerMode={"screen"} screenOptions={{title:""}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Setting" component={SettingPage} />
              <Stack.Screen name="Random" component={RandomPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
      
    );
};
