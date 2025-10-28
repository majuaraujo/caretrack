import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // se já usa a lib; senão, pode remover
// Se preferir manter a Image do RN, troque a linha abaixo por: import { Image } from 'react-native';
import { Image } from 'expo-image';
import colors from '../styles/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.heading}>Dashboard</Text>

        <Image
          source={{ uri: 'https://i.imgur.com/9d1Xyq0.png' }}
          style={styles.banner}
          contentFit="cover"              // expo-image
          transition={200}                // expo-image (fade-in)
          accessible
          accessibilityLabel="Gráfico com indicadores do dashboard"
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Consultas hoje</Text>
          <Text style={styles.cardValue}>12</Text>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => Alert.alert('Info', 'Abrindo agenda...')}
            accessibilityRole="button"
            accessibilityLabel="Abrir agenda de consultas de hoje"
          >
            <Text style={styles.cardBtnText}>Ver agenda</Text>
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
    fontWeight: '700',
    marginBottom: 12,
    color: colors.text,
  },
  banner: { width: '100%', height: 160, borderRadius: 16, marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
  },
  cardTitle: { fontSize: 14, color: colors.muted },
  cardValue: { fontSize: 28, fontWeight: '800', marginVertical: 8 },
  cardBtn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  cardBtnText: { color: '#fff', fontWeight: '600' },
});
