# CareTrack

CareTrack é um aplicativo mobile desenvolvido com React Native e Expo  para acompanhamento de hábitos e bem-estar, com sensores e lembretes inteligentes. O projeto foi desenvolvido para atender aos requisitos da disciplina de Mobile Development – Challenge FIAP.

---

O app permite que o usuário:
- Faça login e acesse um ambiente personalizado;
- Acompanhe métricas de bem-estar e hábitos diários;
- Explore conteúdos e desafios de saúde;
- Gerencie suas preferências no perfil;
- Experimente uma interface responsiva e intuitiva.

---

# Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| Framework principal | [React Native](https://reactnative.dev/) + [Expo SDK 52](https://docs.expo.dev/) |
| Navegação | `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs` |
| Estilização | [NativeWind](https://www.nativewind.dev/) + [TailwindCSS](https://tailwindcss.com/) |
| Componentes | `@react-native-picker/picker`, `react-native-screens`, `react-native-safe-area-context` |
| Build e execução | Android Studio (Pixel 4 AVD) |
| Versão do Node | v20.12.2 |

---

# Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:
- Node.js  (LTS recomendado, ex.: v20)
- npm (vem com o Node)
- Android Studio com emulador Android configurado (ex.: Pixel 4) ou app Expo Go instalado no celular
-Java 17 (caso vá usar build nativa com npx expo run:android)

# Como rodar o projeto:

## 1️ Clonar o repositório
git clone https://github.com/seuusuario/caretrack.git
cd caretrack

## 2️ Instalar dependências
npm install

# 3️ Iniciar o servidor Expo
npx expo start 

## 4️ Abrir o app no emulador Android
# (pressione 'a' no terminal com o Pixel 4 aberto)

# Dependências:
- @react-navigation/native
- @react-navigation/native-stack
- @react-navigation/bottom-tabs
- expo-sensors
- expo-notifications
- @react-native-picker/picker
As dependências são instaladas automaticamente via npm install.

# Funcionalidades:
- Login com validação
- Navegação entre múltiplas telas (Login, Home, Hábitos, Pacientes, Configurações)
- Contagem de passos (mock ou sensor)
- Lembrete de hidratação com notificações locais
- Cadastro de pacientes com Picker
- Navegação com Stack + Tabs
- Estilização com StyleSheet

# Integrantes
-Rafael Cristofalli	553521
-Enzo Rodrigues	553377
-Hugo Oliveira	553266
-Maria Julia A. Rodrigues	553384


