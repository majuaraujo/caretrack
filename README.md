# CareTrack

> Aplicativo mobile desenvolvido para o **Challenge FIAP – Cliente: Care Plus**  
> Solução de bem-estar digital com foco em prevenção, hábitos saudáveis e qualidade de vida.

---

# Sobre o Projeto

O **CareTrack** é um aplicativo desenvolvido em **React Native (Expo)** com integração a conceitos de **IoT**, **Mobile Development** e **Service-Oriented Architecture**.  
A proposta é **promover bem-estar e autocuidado** de forma leve e gamificada — sem recorrer a funcionalidades clínicas (como telemedicina ou diagnósticos).

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

# Estrutura de Pastas

```bash
caretrack/
├── assets/                # Ícones e imagens (splash, favicon)
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── WellnessScreen.js
│   │   └── ProfileScreen.js
│   └── components/        # (opcional) componentes reutilizáveis
├── App.js                 # Estrutura principal com Stack + Tab Navigator
├── app.json               # Configurações do Expo
├── babel.config.js        # Configuração de plugins do NativeWind
├── tailwind.config.js     # Configuração de estilos
└── package.json           # Dependências e scripts
```

## 1️ Clonar o repositório
git clone https://github.com/seuusuario/caretrack.git
cd caretrack

## 2️ Instalar dependências
npm install

# 3️ Iniciar o servidor Expo
npx expo start -c

## 4️ Abrir o app no emulador Android
# (pressione 'a' no terminal com o Pixel 4 aberto)

# Integrantes
-Rafael Cristofalli	553521
-Enzo Rodrigues	553377
-Hugo Oliveira	553266
-Maria Julia A. Rodrigues	553384


