import { useCallback, useMemo, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FormInput from "../components/FormInput";
import colors from "../styles/colors";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = useCallback(() => {
    const e = {};
    if (!EMAIL_RE.test(email.trim())) e.email = "Informe um e-mail válido";
    if (password.trim().length < 6) e.password = "Mínimo de 6 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [email, password]);

  const handleLogin = useCallback(() => {
    if (loading) return;
    if (!validate()) return;
    setLoading(true);
    Alert.alert("Bem-vindo(a)!", "Login efetuado com sucesso.", [
      {
        text: "OK",
        onPress: () => {
          setLoading(false);
          navigation.replace("MainTabs");
        },
      },
    ]);
  }, [loading, validate, navigation]);

  const canSubmit = useMemo(
    () => !loading && email.length > 0 && password.length >= 6,
    [loading, email, password]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/favicon.png")}
            style={styles.logo}
            accessible
            accessibilityLabel="Logo do CareTrack"
          />

          <Text style={styles.title}>CareTrack</Text>

          <FormInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            textContentType="username"
            returnKeyType="next"
            blurOnSubmit={false}
            error={errors.email}
          />

          <FormInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
            textContentType="password"
            returnKeyType="done"
            onSubmitEditing={handleLogin}
            error={errors.password}
          />

          <TouchableOpacity
            style={[styles.button, !canSubmit && { opacity: 0.6 }]}
            onPress={handleLogin}
            disabled={!canSubmit}
            accessibilityRole="button"
            accessibilityLabel="Entrar no aplicativo"
            testID="login-button"
          >
            <Text style={styles.buttonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.background,
  },
  logo: {
    width: 80, // um pouco menor
    height: 80,
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 8, // dá um “respiro” visual
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
