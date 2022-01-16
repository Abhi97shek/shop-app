import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore,combineReducers } from "redux";
import { Provider } from "react-redux";
import ProductReducer from "./store/reducers/products";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';

const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  products:ProductReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="All Products" component={ProductOverviewScreen}
            options={{
              headerStyle:{
                backgroundColor:'#f4511e'
              },
              headerTintColor:'#fff'
            }}
          />
     
      </Stack.Navigator>
      </NavigationContainer>
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
