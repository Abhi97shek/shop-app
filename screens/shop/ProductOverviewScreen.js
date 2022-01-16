import React from "react";
import { FlatList,Text,StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";





const ProductOverviewScreen = (props)=>{

    const products = useSelector((state)=>state.products.availableProducts);
    return (
        
        <FlatList 
            data={products}
            keyExtractor={item=>item.id}
            renderItem={itemData=> <ProductItem image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetails={()=>{}} onAddToCart={()=>{}}/> }
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