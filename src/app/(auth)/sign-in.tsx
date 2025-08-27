import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Inicio de Sesión' }} />

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button text="Iniciar Sesión" />
      <Link href="/sign-up" style={styles.textButton}>
        Registrarse
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  label: {
    color: Colors.light.secondaryText,
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.border,
    padding: 12,
    marginBottom: 16,
    backgroundColor: Colors.light.surface,
    borderRadius: 10,
    fontSize: 16,
    color: Colors.light.text,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 12,
    fontSize: 14,
  },
});

export default SignInScreen;