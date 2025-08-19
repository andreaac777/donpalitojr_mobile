import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import { defaultImage } from '@/components/ProductListItem'
import Button from '@/components/Button'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams(); 
  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <Text>Producto no Encontrado</Text>;
  }

  const addToCart = () => {
    console.warn('Añadido al carrito');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ 
          title: product.name,
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />
      <Image
        source={{ uri: product.image || defaultImage}}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price} COP</Text>
      <Button onPress={addToCart} text='Añadir al Carrito'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
    padding: 20,
  }, 
  description : {
    fontSize: 18,
    textAlign: 'justify',
    marginVertical: 10,
    marginTop: 10,
    padding: 20,
  }
});

export default ProductDetailsScreen
