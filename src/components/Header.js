import { StyleSheet, View, Text } from "react-native";
function Header() {
    return (<View>
        <Text style={styles.lightHeader}>Grab your</Text>
        <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    lightHeader: {
        fontSize: 35,
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold"
    }
});
