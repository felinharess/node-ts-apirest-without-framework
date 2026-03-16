# 🎧 Podcast Manager API

API simples para **gerenciamento e busca de podcasts**.
O projeto permite listar podcasts salvos e pesquisar episódios de podcasts por nome específico.

Este projeto foi desenvolvido utilizando **Node.js com TypeScript**, com uma estrutura organizada em camadas para facilitar manutenção e escalabilidade.

---

# 🚀 Funcionalidades

✔️ Listar todos os podcasts cadastrados
✔️ Buscar episódios de podcasts por nome
✔️ Estrutura organizada em **Controller e Service**
✔️ API simples e leve utilizando **Node.js puro**

---

# 🛠️ Tecnologias Utilizadas

* Node.js
* TypeScript
* TSX
* Tsup

---


# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/projeto-app-flow.git
```

Entre na pasta do projeto:

```bash
cd projeto-app-flow
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o Projeto

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

### Executar com modo watch (recarrega automaticamente)

```bash
npm run start:watch
```

### Gerar build do projeto

```bash
npm run dist
```

### Executar versão compilada

```bash
npm run start:dist
```

---

# 📡 Rotas da API

## 📃 Listar Podcasts

Retorna todos os podcasts cadastrados.

```
GET /api/list
```

### Exemplo de resposta

```json
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": [
            "saúde",
            "bodybuilder",
            "esporte"
        ]
    },
    {
        "podcastName": "Flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "categories": [
            "corrida",
            "esporte"
        ]
    },
    {
        "podcastName": "Podpah",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "categories": [
            "corrida",
            "esporte"
        ]
    }
]
```

---

# 🔎 Buscar Episódio de Podcast

Permite buscar episódios de um podcast específico pelo nome.

```
GET /api/episode?p=nome-do-podcast
```

### Exemplo

```
GET /api/episode?p=flow
```

### Exemplo de resposta

```json
[
    {
        "podcastName": "Flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "categories": [
            "corrida",
            "esporte"
        ]
    },
]
```

---

# 🎯 Objetivo do Projeto

Este projeto foi criado com objetivo educacional para praticar:

* Desenvolvimento de **APIs com Node.js**
* Uso de **TypeScript no backend**
* Organização de código em **controllers e services**
* Estruturação de projetos backend

---

# 📜 Scripts disponíveis

No arquivo **package.json** existem os seguintes scripts:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env src/server.ts",
  "dist": "tsup src",
  "start:dist": "npm run dist && node/server.js"
}
```

---

# 👨‍💻 Autor

Projeto desenvolvido por **Felipe Linhares**
Futuro desenvolvedor focado em **JavaScript, Node.js e React**.
