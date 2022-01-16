import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

const stack = createNativeStackNavigator({
    ProductOverview:ProductOverviewScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'red'
        }
    }
});