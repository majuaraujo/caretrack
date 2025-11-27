import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../styles/colors";

export default function PatientsScreen() {
  const [selectedPlan, setSelectedPlan] = useState("careplus-basic");
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (!selectedPlan) {
      Alert.alert("Erro", "Selecione um plano antes de salvar.");
      return;
    }
    Alert.alert(
      "Paciente salvo",
      `Plano: ${selectedPlan}\nObservações: ${note.trim() || "-"}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Cadastro de Paciente</Text>

        <Text style={styles.label}>Plano</Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={selectedPlan}
            onValueChange={(v) => setSelectedPlan(v)}
            dropdownIconColor={colors.text}
            style={styles.picker}
          >
            <Picker.Item label="Care Plus Basic" value="careplus-basic" />
            <Picker.Item label="Care Plus Premium" value="careplus-premium" />
            <Picker.Item
              label="Care Plus Corporate"
              value="careplus-corporate"
            />
          </Picker>
        </View>

        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="Digite observações clínicas..."
          placeholderTextColor={colors.muted}
          value={note}
          onChangeText={setNote}
          textAlignVertical="top"
          accessibilityLabel="Campo de observações clínicas"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          accessibilityRole="button"
          accessibilityLabel="Salvar cadastro de paciente"
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050816",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  label: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 6,
    marginTop: 12,
  },
  pickerWrap: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#111827",
  },
  picker: {
    color: colors.text,
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    backgroundColor: "#111827",
    color: colors.text,
  },
  button: {
    backgroundColor: colors.success,
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
