import React from "react";
import { View,Text,StyleSheet,Image,Button,ScrollView } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import * as cartAction from "../../store/actions/cart";
const ProductDetailsScreen = (props)=>{

    const {productId,productTile} = props.route.params;
    const selectedProduct = useSelector((state)=> state.products.availableProducts.find(prod=> prod.id === productId));
    const dispatch = useDispatch();
    return (
        <ScrollView>
                <Image style={styles.image} source={{uri:selectedProduct.imageUrl}}/>
                <View style={styles.actions}>
                <Button color="#D22779" title="Add to Cart" onPress={()=>{
                        dispatch(cartAction.addToCart(selectedProduct));
                }}/>
                </View>
                <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.decription}>{selectedProduct.decription}</Text>
        </ScrollView>
    )

};

// ProductDetailsScreen.navigationOptions = (navData)=>{

//     console.log(navData.navigation.route.params.productTile);
//     return {
//         headerTitle : navData.navigation.route.params.productTitle
//     }

// };


const styles = StyleSheet.create({
        image:{
            width:'100%',
            height:300,
        },
        price:{
            fontSize:20,
            color:'#888',
            textAlign:'center',
            marginVertical:20,

        },
        decription:{
            fontSize:14,
            textAlign:'center'
        },
        actions:{
            marginVertical:10,
            alignItems:'center'
        }

});

export default ProductDetailsScreen;