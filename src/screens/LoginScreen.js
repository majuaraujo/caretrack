import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import colors from '../styles/colors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email.includes('@')) e.email = 'Informe um e-mail válido';
    if (password.length < 6) e.password = 'Mínimo de 6 caracteres';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    Alert.alert('Bem-vindo(a)!', 'Login efetuado com sucesso.', [
      { text: 'OK', onPress: () => navigation.replace('MainTabs') }
    ]);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image source={{ uri: 'https://i.imgur.com/6lZ6r9q.png' }} style={styles.logo} />
          <Text style={styles.title}>CareTrack</Text>

          <FormInput label="E-mail" value={email} onChangeText={setEmail}
            autoCapitalize="none" keyboardType="email-address" error={errors.email} />

          <FormInput label="Senha" value={password} onChangeText={setPassword}
            secureTextEntry error={errors.password} />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: colors.background },
  logo: { width: 96, height: 96, alignSelf: 'center', marginBottom: 16, borderRadius: 20 },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 24, color: colors.text },
  button: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, marginTop: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 16 },
});
