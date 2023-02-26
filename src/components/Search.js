import {  StyleSheet, Text, TextInput, View } from 'react-native';
import{FontAwesome} from "@expo/vector-icons"
import {elevation} from "../common/styles"
import { useState } from 'react';
function Search({setterm}){
    const [input, setInput] = useState("")
    
    const handleEndEditing = ()=>{
        if(!input){
            return
        }
        setterm(input);
        setInput("")
    }
    return(
        <View style={[styles.TextInputContainer, styles.elevation]}>
            <FontAwesome name='search' size={25}/>
            <TextInput 
            value={input}
            style={styles.input}
            placeholder='Restaurants, food'
            onChangeText={(text)=>{
                setInput(text)
            }}
            onEndEditing={handleEndEditing}
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