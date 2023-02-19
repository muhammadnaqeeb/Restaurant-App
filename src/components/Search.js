import {  StyleSheet, Text, TextInput, View } from 'react-native';
import{FontAwesome} from "@expo/vector-icons"
import {elevation} from "../common/styles"
function Search(){
    return(
        <View style={[styles.TextInputContainer, styles.elevation]}>
            <FontAwesome name='search' size={25}/>
            <TextInput 
            style={styles.input}
            placeholder='Restaurants, food' 
            />
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    TextInputContainer:{
        marginTop:5,
        flexDirection:"row",
        backgroundColor:"white",
        padding:15,
        borderRadius:40
    },
    elevation,
    input:{
        fontSize:18,
        marginLeft:15
    }
});