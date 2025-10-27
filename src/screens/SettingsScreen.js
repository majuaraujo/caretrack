import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../styles/colors";

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Notificações</Text>
        <TouchableOpacity
          style={styles.action}
          onPress={() => Alert.alert("Notificações", "Preferências salvas!")}
        >
          <Text style={styles.actionText}>Salvar Preferências</Text>
        </TouchableOpacity>
      </View>
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
  item: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
  },
  itemLabel: { fontSize: 16, marginBottom: 8 },
  action: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  actionText: { color: "#fff", fontWeight: "600" },
});
