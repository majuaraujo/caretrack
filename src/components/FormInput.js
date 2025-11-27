import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../styles/colors";

export default function FormInput({ label, error, ...props }) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Rótulo do campo */}
      <Text style={styles.label}>{label}</Text>

      {/* Campo de texto */}
      <TextInput
        style={[
          styles.input,
          focused && styles.inputFocused,
          error && styles.inputError,
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={colors.muted}
        accessibilityLabel={label}
        {...props}
      />

      {/* Mensagem de erro */}
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: colors.text,
    backgroundColor: "#1C2135",
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.danger,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 4,
  },
});

