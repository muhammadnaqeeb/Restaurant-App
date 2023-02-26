import { SafeAreaView, StyleSheet } from 'react-native';
import Search from './src/components/Search';
import Header from './src/components/Header';
import { useState } from 'react';
import Categories from './src/components/Categories';

export default function App() {
  const [term, setterm] = useState("Burger");
  const CategoriesList = [
    {
      key: 1,
      name: "Burger",
      imagePath: require("./assets/Images/burger.png")
    },
    {
      key: 2,
      name: "Pizza",
      imagePath: require("./assets/Images/pizza.png")
    },
    {
      key: 3,
      name: "cake",
      imagePath: require("./assets/Images/cake.png")
    },
    {
      key: 4,
      name: "pasta",
      imagePath: require("./assets/Images/pasta.png")
    },
    {
      key: 5,
      name: "Drink",
      imagePath: require("./assets/Images/smoothies.png")
    },
    {
      key: 6,
      name: "Steak",
      imagePath: require("./assets/Images/steak.png")
    },
  ]
  return (
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <Header />
      <Search setterm={setterm}/>
      <Categories 
      CategoriesList = {CategoriesList} 
      setterm={setterm}
      term={term}
      />
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,

  },

});
