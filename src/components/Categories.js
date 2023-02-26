import { FlatList} from 'react-native';
import CategoryItem from './CategoryItem';
export default function Categories(props){
    
    return(
        <FlatList
       horizontal
       showsHorizontalScrollIndicator={false}
          data={props.CategoriesList}
          renderItem={(itemData) => {
            //itemData.index, itemData will be pass by React
            //itemData.item 
            return (
              <CategoryItem
              title={itemData.item.name} 
              imagePath={itemData.item.imagePath} 
              active = {itemData.item.name === props.term}
              onPress={()=>props.setterm(itemData.item.name)}
              />
            )
          }}
        />
    );
}