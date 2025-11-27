import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.heading}>Dashboard de Bem-estar</Text>

        <Image
          source={require("../../assets/images/favicon.png")}
          style={styles.banner}
          resizeMode="contain"
          accessible
          accessibilityLabel="Logo do CareTrack"
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Consultas / check-ins hoje</Text>
          <Text style={styles.cardValue}>12</Text>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => Alert.alert("Info", "Abrindo agenda...")}
            accessibilityRole="button"
            accessibilityLabel="Abrir agenda de consultas de hoje"
          >
            <Text style={styles.cardBtnText}>Ver agenda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Hábitos concluídos hoje</Text>
          <Text style={styles.cardValue}>5 / 8</Text>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => Alert.alert("Info", "Abrindo hábitos...")}
            accessibilityRole="button"
            accessibilityLabel="Ver hábitos concluídos hoje"
          >
            <Text style={styles.cardBtnText}>Ver hábitos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 32 },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: colors.text,
  },
  banner: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#0B1020",
  },
  card: {
    backgroundColor: "#111824",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: { fontSize: 14, color: colors.muted },
  cardValue: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 8,
    color: "#fff",
  },
  cardBtn: {
    backgroundColor: "#0D99FF",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  cardBtnText: { color: "#fff", fontWeight: "600" },
});
