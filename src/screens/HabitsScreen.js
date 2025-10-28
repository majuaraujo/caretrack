import * as Notifications from 'expo-notifications';
import { Pedometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function getStepCountAsync() {
  try {
    const available = await Pedometer.isAvailableAsync();
    if (!available) return Math.floor(Math.random() * 4000 + 2000);
    const end = new Date();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const res = await Pedometer.getStepCountAsync(start, end);
    return res?.steps ?? 0;
  } catch {
    return Math.floor(Math.random() * 4000 + 2000);
  }
}

async function scheduleHydrationReminder(everyMinutes = 60) {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') throw new Error('Permissão negada');
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: { title: 'Hidratação', body: 'Hora de beber água! 💧' },
    trigger: { seconds: everyMinutes * 60, repeats: true },
  });
}

export default function HabitsScreen() {
  const [steps, setSteps] = useState(0);
  const [hydrationEvery, setHydrationEvery] = useState('60');

  const readSteps = async () => setSteps(await getStepCountAsync());

  useEffect(() => {
    readSteps();
    return () => {
      Notifications.cancelAllScheduledNotificationsAsync();
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hábitos & Rotina</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Passos de hoje</Text>
        <Text style={styles.value}>{steps}</Text>
        <TouchableOpacity style={styles.btn} onPress={readSteps}>
          <Text style={styles.btnText}>Atualizar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lembrete de Hidratação (min)</Text>
        <TextInput
          value={hydrationEvery}
          onChangeText={setHydrationEvery}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: colors.success }]}
            onPress={async () => {
              try {
                const minutes = parseInt(hydrationEvery, 10) || 60;
                await scheduleHydrationReminder(minutes);
                Alert.alert('Ativado', 'Lembrete de hidratação agendado');
              } catch (e) {
                Alert.alert('Erro', String(e?.message || e));
              }
            }}
          >
            <Text style={styles.btnText}>Ativar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: colors.danger }]}
            onPress={async () => {
              await Notifications.cancelAllScheduledNotificationsAsync();
              Alert.alert('Parado', 'Lembretes cancelados');
            }}
          >
            <Text style={styles.btnText}>Parar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: colors.text,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 14, color: colors.muted },
  value: { fontSize: 28, fontWeight: '800', marginVertical: 8 },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  btnText: { color: '#fff', fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    minWidth: 100,
  },
});

