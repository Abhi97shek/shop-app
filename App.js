import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore,combineReducers } from "redux";
import { Provider } from "react-redux";
import ProductReducer from "./store/reducers/products";
import ShopNavigator from './navigation/ShopNavigator';
import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from './screens/shop/ProductDetailsScreen';



const fetchFonts = ()=>{

  return Font.loadAsync({
      'product-sans': require('./assets/fonts/Product-Sans-Regular.ttf'),
      'product-sans-bold':require('./assets/fonts/Product-Sans-Bold.ttf')
  });

};
const rootReducer = combineReducers({
  products:ProductReducer
});

const store = createStore(rootReducer);

export default function App() {

 

  
    return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    );
  

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
