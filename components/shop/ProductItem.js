import React from "react";
import {View,Text,Image,StyleSheet,Button} from 'react-native';



const ProductItem = (props)=>{

    return (
        <View style={styles.product}>
           
                <Image style={styles.image} source={{uri:props.image}}/>
            
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button color='#D22779' title="View Details" onPress={props.onViewDetails}/>
                <Button color='#D22779' title="To Cart" onPress={props.onAddToCart}/>
            </View>
        </View>
    )


};


const styles = StyleSheet.create({

    product:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20
    },
  
    image:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontSize:18,
        marginVertical:4
    },
    price:{
        fontSize:14,
        color:"#888"
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'20%',
        paddingHorizontal:20
    },
    details:{
        alignItems:'center',
        padding:10,
        height:'20%'
    }


});

export default ProductItem;