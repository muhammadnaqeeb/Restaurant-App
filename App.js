import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, ScrollView, StyleSheet, View , Text,Image} from 'react-native';
import Search from './src/components/Search';
import Header from './src/components/Header';
import CategoryItem from './src/components/CategoryItem';
import { useState } from 'react';

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
      <Search />
      <FlatList
       horizontal
       showsHorizontalScrollIndicator={false}
          data={CategoriesList}
          renderItem={(itemData) => {
            //itemData.index, itemData will be pass by React
            //itemData.item 
            return (
              <CategoryItem 
              title={itemData.item.name} 
              imagePath={itemData.item.imagePath} 
              active = {itemData.item.name === term}
              onPress={()=>setterm(itemData.item.name)}
              />
            )
          }}
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
