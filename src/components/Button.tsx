import { Pressable, StyleSheet, Text, View } from 'react-native';
import { forwardRef } from 'react';
import Colors from '../constants/Colors';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint, // Terracota primario
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 2, // sombra ligera Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Button;
