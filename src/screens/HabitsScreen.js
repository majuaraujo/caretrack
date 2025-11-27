import * as Notifications from "expo-notifications";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
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

/**
 * Configuração global de como as notificações aparecem
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/** gera um número “plausível” de passos para simulação */
function randomSteps() {
  return Math.floor(Math.random() * 4000 + 2000); // 2000–6000
}

/**
 * Obtém a contagem de passos do dia atual.
 * Se o pedômetro não estiver disponível OU devolver 0 / muito baixo,
 * retorna um valor aleatório apenas para fins de simulação.
 */
async function getStepCountAsync() {
  try {
    const available = await Pedometer.isAvailableAsync();
    if (!available) {
      return randomSteps();
    }

    const end = new Date();
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const res = await Pedometer.getStepCountAsync(start, end);
    const steps = res?.steps ?? 0;

    // se o sensor devolveu 0 ou algo muito baixo, usamos simulado
    if (!steps || steps <= 10) {
      return randomSteps();
    }

    return steps;
  } catch {
    // Em caso de erro, simula um valor
    return randomSteps();
  }
}

/**
 * Agenda lembretes recorrentes de hidratação
 */
async function scheduleHydrationReminder(everyMinutes = 60) {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permissão de notificações negada.");
  }

  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hidratação",
      body: "Hora de beber água!",
    },
    trigger: {
      seconds: everyMinutes * 60,
      repeats: true,
    },
  });
}

export default function HabitsScreen() {
  const [steps, setSteps] = useState(0);
  const [hydrationEvery, setHydrationEvery] = useState("60");

  async function readSteps() {
    const value = await getStepCountAsync();
    setSteps(value);
  }

  useEffect(() => {
    readSteps();

    // limpeza das notificações ao sair da tela
    return () => {
      Notifications.cancelAllScheduledNotificationsAsync();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Hábitos & Rotina</Text>

        {/* Card de passos do dia */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Passos de hoje</Text>
          <Text style={styles.value}>{steps}</Text>

          <TouchableOpacity style={styles.btn} onPress={readSteps}>
            <Text style={styles.btnText}>Atualizar</Text>
          </TouchableOpacity>
        </View>

        {/* Card de lembrete de hidratação */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Lembrete de hidratação (em minutos)
          </Text>

          <TextInput
            value={hydrationEvery}
            onChangeText={setHydrationEvery}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Ex: 60"
            placeholderTextColor={colors.muted}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: colors.success }]}
              onPress={async () => {
                try {
                  const minutes = parseInt(hydrationEvery, 10) || 60;
                  await scheduleHydrationReminder(minutes);
                  Alert.alert(
                    "Ativado",
                    `Lembrete a cada ${minutes} minuto(s) foi agendado.`
                  );
                } catch (e) {
                  Alert.alert("Erro", String(e?.message || e));
                }
              }}
            >
              <Text style={styles.btnText}>Ativar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: colors.danger }]}
              onPress={async () => {
                await Notifications.cancelAllScheduledNotificationsAsync();
                Alert.alert("Parado", "Lembretes de hidratação cancelados.");
              }}
            >
              <Text style={styles.btnText}>Parar</Text>
            </TouchableOpacity>
          </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 14,
    color: colors.muted,
  },
  value: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 8,
    color: colors.text,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  btnText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    minWidth: 120,
    color: colors.text,
    backgroundColor: "#0B1020",
  },
  buttonRow: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 10,
  },
});
