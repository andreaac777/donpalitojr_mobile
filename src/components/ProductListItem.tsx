import { Image, StyleSheet, Text, Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultImage =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
};     

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={{
        pathname: "/menu/[id]",
        params: { id: product.id.toString() },
      }} asChild>
      <Pressable style={styles.container}>
        <Image 
          source={{ uri: product.image || defaultImage}} 
          style={styles.image}
          resizeMode='contain' 
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price} COP</Text>
      </Pressable>
    </Link>  
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  image:{
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 10
  },
  price: {
    color: 'gray',
    fontWeight: 'bold'
  },
});
