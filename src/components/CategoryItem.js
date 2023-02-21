import { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, Pressable } from 'react-native';
import { elevation } from '../common/styles';
function CategoryItem(props) {
    return (
        <Pressable onPress={props.onPress}>
            
            <View
                style={[
                    styles.elevation,
                    styles.CategoryContainer,
                    props.active ? { backgroundColor: "rgb(241,186,87)" } : { backgroundColor: "white" }
                ]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.Image} source={props.imagePath} />
                </View>
                <Text style={styles.imageLabel}>{props.title}</Text>
            </View>
        </Pressable>
    );
}

export default CategoryItem;

const styles = StyleSheet.create({
    CategoryContainer: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center"

    },
    elevation,
    Image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5,
    },
    imageLabel: {
        fontWeight: "bold"
    }

});