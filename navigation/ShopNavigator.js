import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
const MyStack = createNativeStackNavigator();

const ShopNavigator = (props)=>{
    return (
        <NavigationContainer>
            <MyStack.Navigator >
                <MyStack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen}
                options={{
                    title:'All Products',
                    headerStyle:{
                        backgroundColor:'#f4511e'
                    },
                    headerTintColor:'#fff'
                }}
                
                />
                <MyStack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}
                options={{
                    title:'Product Detail',
                    headerStyle:{
                        backgroundColor:'#f4511e'
                    },
                    headerTintColor:'#fff'
                }}

                />
            </MyStack.Navigator>

        </NavigationContainer>
    )
};


export default ShopNavigator;