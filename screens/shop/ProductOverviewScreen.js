import React from "react";
import { FlatList,Text,StyleSheet, Button,View } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductOverviewScreen = ({navigation})=>{

    
    const products = useSelector((state)=>state.products.availableProducts);
    const dispatch = useDispatch();
    
    return (
        
         <FlatList 
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData=> <ProductItem image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetails={()=>{navigation.navigate('ProductDetailsScreen',{
                productId:itemData.item.id,
                productTitle:itemData.item.title
            })}} onAddToCart={()=>{

                    dispatch(cartActions.addToCart(itemData.item));
            }}/> }
        /> 
      
        
    )
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});