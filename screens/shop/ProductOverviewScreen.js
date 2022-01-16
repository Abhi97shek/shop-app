import React from "react";

import { FlatList,Text,View,StyleSheet } from "react-native";
import { useSelector } from "react-redux";



const ProductOverviewScreen = (props)=>{

    const products = useSelector((state)=>state.products.availableProducts);
    return (
        
        <FlatList 
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData=> <Text>{itemData.item.title}</Text>}
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