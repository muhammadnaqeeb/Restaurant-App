import {  StyleSheet,Image, Text, TextInput, View } from 'react-native';
import { elevation } from '../common/styles';
function CategoryItem(props){
    return(<View style={[styles.elevation, styles.CategoryContainer]}>
        <View style={styles.imageContainer}>
        <Image style={styles.Image} source={props.imagePath} />
        </View>
        <Text style={styles.imageLabel}>{props.title}</Text>
    </View>);
}

export default CategoryItem;

const styles = StyleSheet.create({
    CategoryContainer:{
       width:70,
       height:100,
       borderRadius:50,
       marginVertical:15,
       backgroundColor:"white",
       marginRight:15, 
       alignItems:"center",
       justifyContent: "center"
       
    },
    elevation,
    Image:{
        width:35,
        height:35
    },
    imageContainer:{
        width:50,
        height:50,
        backgroundColor:"white",
        alignItems:"center",
       justifyContent: "center",
       borderRadius:50,
       marginBottom:5,
    },
    imageLabel:{
        fontWeight:"bold"
    }
    
});