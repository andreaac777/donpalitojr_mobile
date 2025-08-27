import { Stack, Link } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function MenuStack() {
  const colorScheme = useColorScheme();
  return (
    <Stack screenOptions={{ 
            headerRight: () => (
                <Link href="/cart" asChild>
                    <Pressable>
                        {({ pressed }) => (
                        <FontAwesome
                            name="shopping-cart"
                            size={25}
                            color={Colors[colorScheme ?? 'light'].text}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                        )}
                    </Pressable>
                </Link>
            ),
        }}>
        <Stack.Screen
            name="index"
            options={{ title: 'Productos'}}
        />
    </Stack>
    );
};