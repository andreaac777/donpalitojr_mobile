import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/CartListItem'

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 20, gap: 10 }}
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})