import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../styles/colors";

export default function SettingsScreen() {
  const handleSavePreferences = () => {
    Alert.alert("Notificações", "Preferências salvas!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Configurações</Text>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Notificações</Text>
          <TouchableOpacity
            style={styles.action}
            onPress={handleSavePreferences}
            accessibilityRole="button"
            accessibilityLabel="Salvar preferências de notificações"
            activeOpacity={0.8}
          >
            <Text style={styles.actionText}>Salvar Preferências</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Privacidade</Text>
          <TouchableOpacity
            style={[styles.action, { backgroundColor: colors.success }]}
            onPress={() =>
              Alert.alert(
                "Privacidade",
                "Preferências de privacidade atualizadas."
              )
            }
          >
            <Text style={styles.actionText}>Atualizar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Sobre o aplicativo</Text>
          <TouchableOpacity
            style={[styles.action, { backgroundColor: colors.info }]}
            onPress={() =>
              Alert.alert(
                "CareTrack",
                "Versão 1.0.0\nApp desenvolvido por alunos FIAP para o desafio Care Plus."
              )
            }
          >
            <Text style={styles.actionText}>Ver detalhes</Text>
          </TouchableOpacity>
        </View>
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
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  item: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
  },
  itemLabel: { fontSize: 16, marginBottom: 8, color: colors.text },
  action: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  actionText: { color: "#fff", fontWeight: "600" },
});
