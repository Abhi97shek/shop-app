import React from "react";
import { View,Text,StyleSheet,Image,Button,ScrollView } from "react-native";
import { useSelector } from "react-redux";

const ProductDetailsScreen = (props)=>{

    const {productId,productTile} = props.route.params;
    const selectedProduct = useSelector((state)=> state.products.availableProducts.find(prod=> prod.id === productId));

    return (
        <View>
        <Text>{selectedProduct.title}</Text>
        </View>
    )

};

const style = StyleSheet.create({

});

export default ProductDetailsScreen;