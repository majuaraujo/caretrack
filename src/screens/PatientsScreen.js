import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
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
    Alert.alert(
      "Paciente salvo",
      `Plano: ${selectedPlan}\nObservação: ${note || "-"}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <Text style={styles.label}>Plano</Text>
      <View style={styles.pickerWrap}>
        <Picker
          selectedValue={selectedPlan}
          onValueChange={(v) => setSelectedPlan(v)}
        >
          <Picker.Item label="Care Plus Basic" value="careplus-basic" />
          <Picker.Item label="Care Plus Premium" value="careplus-premium" />
          <Picker.Item label="Care Plus Corporate" value="careplus-corporate" />
        </Picker>
      </View>

      <Text style={styles.label}>Observações</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="Digite observações clínicas..."
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  label: { fontSize: 14, color: colors.muted, marginBottom: 6, marginTop: 12 },
  pickerWrap: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    overflow: "hidden",
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.success,
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
