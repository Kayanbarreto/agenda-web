# 📅 Sistema de Agendamentos – Teste Técnico Full Stack

Este repositório contém minha solução para o **Teste Técnico de Estágio Full Stack**.

O projeto consiste em um sistema simples de **agendamento de serviços**, contendo:

- **Backend** com API REST feita em Node.js + Express + Prisma + PostgreSQL  
- **Frontend Web** em React + Vite + TailwindCSS  
- Funcionalidades completas: criar, listar, buscar e excluir agendamentos.

---

# 🚀 Tecnologias Utilizadas

## 🧩 **Backend**
- Node.js  
- Express  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- ts-node-dev  
- Validação manual com RegEx  
- Arquitetura simples baseada em rotas

## 🎨 **Frontend**
- React.js  
- Vite  
- TypeScript  
- TailwindCSS  
- React Router DOM  
- Axios (para consumo da API)

---

# 📚 Funcionalidades Implementadas

## 🔧 **Backend**
- **POST /agendamentos** → cria um novo agendamento  
- **GET /agendamentos** → lista todos os agendamentos  
- **GET /agendamentos/:id** → busca por ID  
- **GET /agendamentos?nome=** → busca por nome ou parte do nome  
- **DELETE /agendamentos/:id** → exclui um agendamento  
- **Validações avançadas**:
  - Campos obrigatórios  
  - Formato da data `dd-mm-aaaa`  
  - Formato da hora `hh:mm`  
  - Bloqueio de datas passadas  
- Conexão com PostgreSQL via Prisma

---

## 💻 **Frontend**
- Tela de **listagem de agendamentos**  
- Campo de **busca inteligente**:
  - Identifica automaticamente se o usuário digitou **ID** ou **nome**
  - Busca automática ao digitar  
  - Botão de "Limpar busca"  
- Tela de **criação de agendamento**
  - Campos: nome, serviço, data e hora  
  - Botão de “Limpar formulário”  
  - Validação visual  
- **Exclusão direta na listagem**
- Navegação entre páginas com **React Router**
- Interface responsiva usando TailwindCSS

---
# 📁 Estrutura Geral
```bash
  agenda-backend/
  agenda-web/
  README.md
```
## 📁 Estrutura do Projeto

### **agenda-backend/**
```bash
agenda-backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── prisma/
│   │   └── client.ts
│   ├── routes/
│   │   └── agendamentos.routes.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```
### **agenda-web/**
```bash
agenda-web/
├── src/
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── AgendamentosList.tsx
│   │   └── AgendamentoCreate.tsx
│   ├── services/
│   │   └── api.ts
│   ├── main.tsx
│   └── App.tsx
├── tailwind.config.js
└── package.json
```
# 🛠 Como Rodar o Projeto

## 📌 1. Clonar os repositórios

```bash
git clone https://github.com/Kayanbarreto/agenda-backend.git
git clone https://github.com/Kayanbarreto/agenda-web.git
```

## ⚙️ Backend
### 🔹 Instalar dependências

```bash
cd agenda-backend
npm install
```
### 🔹 Configurar banco (PostgreSQL)

Criar o banco:
```bash
CREATE DATABASE agenda_db;
```

Criar o arquivo .env:
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/agenda_db?schema=public"
```


### 🔹 Rodar Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```
### 🔹 Iniciar API
```bash
npm run dev
```

API disponível em:
👉 http://localhost:3333

## 🎨 Frontend
### 🔹 Instalar dependências
```bash
cd agenda-web
npm install
```

### 🔹 Iniciar aplicação React
```bash
npm run dev
```


Frontend disponível em:
👉 http://localhost:5173

# 📡 Endpoints da API
| Método | Rota                | Descrição             |
|--------|----------------------|------------------------|
| POST   | /agendamentos       | Criar agendamento     |
| GET    | /agendamentos       | Listar todos          |
| GET    | /agendamentos/:id   | Buscar por ID         |
| GET    | /agendamentos?nome= | Buscar por nome parcial |
| DELETE | /agendamentos/:id   | Excluir               |

#### 📋 Listagem de agendamentos

#### ➕ Tela de criação

#### 🔍 Busca funcional

#### ❌ Exclusão

## 📦 Extras Implementados

#### 🔎 Filtro inteligente no frontend (ID ou nome)

#### 🔄 Busca automática sem botão

#### 🧹 Botão de limpar formulário

#### 📱 UI responsiva em Tailwind


# 👨‍💻 Autor

### Kayan Marques Barreto

### 🔗 GitHub: https://github.com/Kayanbarreto

### 🔗 LinkedIn: [https://www.linkedin.com/in/SEU-LINK](https://www.linkedin.com/in/kayan-barreto-39a330265/)

### 📧 Email: kayan.marques.barreto@ccc.ufcg.edu.br
