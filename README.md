# 📱 Wallet App

Projeto desenvolvido como parte de um teste técnico. Consiste em uma carteira virtual onde o usuário pode visualizar seus cartões cadastrados e adicionar novos cartões.

---

## 📹 Demonstração do App

-   Aqui está a animação do aplicativo:

![Animação do App](https://raw.githubusercontent.com/rodrigocardoso-rc/wallet-app/master/src/assets/gif/demo.gif)

## 🚀 Funcionalidades

-   Visualizar lista de cartões cadastrados.
-   Adicionar novos cartões com informações como nome, número, validade e CVV.
-   Interface intuitiva e responsiva.

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)
-   [JSON Server](https://github.com/typicode/json-server)
-   [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
-   [React Hook Form](https://www.react-hook-form.com/)

---

## 🔧 Como rodar o projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1️⃣ Clonar o repositório

```sh
  git clone https://github.com/rodrigocardoso-rc/wallet-app.git
  cd wallet-app
```

### 2️⃣ Instalar as dependências

```sh
  yarn install
```

### 3️⃣ Configurar API local

#### 3.1 Obter o IPV4

-   No terminal, execute o seguinte comando para obter seu endereço IPV4:

    ```sh
    ipconfig # No Windows
    ifconfig # No Mac/Linux
    ```

-   Copie o endereço IPV4 exibido.


#### 3.2 Iniciar o JSON Server

-   Para iniciar a API mockada localmente, execute no terminal:

    ```sh
    # Exemplo: npx json-server --host 192.168.18.70 db.json
    npx json-server --host 'SEU_IPV4' db.json
    ```


#### 3.3 Configurar o arquivo `.env`

-   No arquivo `.env`, substitua `API_URL` pelo seu IPV4:

    ```sh
    # Exemplo: API_URL=http://192.168.18.70:3000
    API_URL=http://SEU_IPV4:3000
    ```


### 4️⃣ Iniciar o projeto

```sh
  yarn expo start
```

-   Após iniciar o Expo, você verá um QR Code no terminal ou na interface web.
-   Para rodar no seu dispositivo:
    -   Baixe o aplicativo [Expo Go](https://expo.dev/client) na Play Store ou App Store.
    -   Escaneie o QR Code usando o Expo Go.
-   Para rodar no emulador:
    -   No terminal, pressione `a` para rodar no Android (emulador do Android Studio).
    -   Pressione `i` para rodar no iOS (emulador do Xcode, apenas para macOS).

---

## 📂 Estrutura do Projeto

```sh
src/
├── @types/         # Tipos TypeScript globais
├── assets/         # Recursos estáticos (imagens, fontes, ícones)
├── components/     # Componentes reutilizáveis
├── contexts/       # Contextos do React para gerenciamento de estados
├── hooks/          # Hooks customizados
├── model/          # Modelos de dados utilizados pela API
├── modules/        # Módulos (externos) utilizados no projeto
├── navigators/     # Configurações de navegação
├── screens/        # Telas do aplicativo
├── services/       # Serviços da API
├── styles/         # Estilização global
└── utils/          # Funções utilitárias
.env                # Variáveis de ambiente
```

---

## ✅ Testes

Os testes unitários foram parcialmente implementados. Futuras melhorias podem incluir a ampliação da cobertura de testes e ajustes conforme necessário.

---

Feito com 🌟 por [Rodrigo Cardoso](https://github.com/rodrigocardoso-rc) 🚀