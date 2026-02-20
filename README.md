# 🛌 Sleep Colchões

Projeto Full Stack desenvolvido com foco em demonstrar habilidades em desenvolvimento web moderno, utilizando **React no frontend** e **Java com Spring Boot no backend**.

O projeto simula um site comercial para uma empresa de colchões, com estrutura escalável, organização por camadas e boas práticas de desenvolvimento.

---

# 📌 Objetivo do Projeto

O Sleep Colchões foi desenvolvido como parte do meu portfólio para:

- Demonstrar conhecimento em arquitetura Full Stack
- Aplicar boas práticas de organização de código
- Trabalhar integração entre frontend e backend
- Explorar componentização e organização de layout
- Simular um ambiente real de aplicação comercial

---

# 🧠 Funcionalidades

- Página inicial com apresentação da marca
- Listagem de produtos
- Estrutura preparada para integração com API
- Componentização reutilizável
- Layout responsivo
- Organização por camadas (Controller, Service, Repository)

---

# 🛠 Tecnologias Utilizadas

## 🔹 Frontend
- React
- TypeScript
- SCSS / CSS
- Axios (para integração com API)
- React Router

## 🔹 Backend
- Java 17+
- Spring Boot
- Maven
- JPA / Hibernate
- API REST

## 🔹 Versionamento
- Git
- GitHub

---

# 🏗 Arquitetura do Projeto

O projeto segue o padrão:

### Backend
- `controller` → Camada responsável pelas requisições HTTP
- `service` → Regras de negócio
- `repository` → Acesso a dados
- `model` → Entidades da aplicação

### Frontend
- `components` → Componentes reutilizáveis
- `pages` → Páginas principais
- `services` → Comunicação com API
- `routes` → Gerenciamento de rotas

---

# ⚙️ Requisitos para Executar o Projeto

Antes de rodar o projeto, você precisa ter instalado:

## 🔹 Backend
- Java 17 ou superior
- Maven 3.8+
- IDE (IntelliJ, VSCode ou Eclipse)

## 🔹 Frontend
- Node.js 18+
- NPM ou Yarn

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/luispieta/sleep_colchoes.git
```

## ▶ Executando o Backend

Acesse a pasta do backend:

```
cd sleep_colchoes
```

Execute o projeto com Maven:

```
mvn spring-boot:run
```

Ou rode pela sua IDE executando a classe principal do Spring Boot.

Por padrão o backend irá subir em:

```
http://localhost:8080
```

## ▶ Executando o Frontend

Acesse a pasta do frontend:

```
cd sleep_front
```

Instale as dependências:

```
npm install
```

Rode o projeto:

```
npm start
```

O frontend irá subir em:

```
http://localhost:3000
```

## 🔄 Integração Frontend ↔ Backend

A comunicação ocorre via API REST utilizando Fetch, mas será alterado para Axios futuramente.

Exemplo de endpoint:

- GET /produtos

- POST /produtos

## 🧩 Boas Práticas Aplicadas

- Separação de responsabilidades (SRP)

- Arquitetura em camadas

- Componentização no React

- Código organizado e legível

- Padrão REST

- Versionamento semântico

- Estrutura escalável

## 📈 Melhorias Futuras

- Dashboard administrativo

- Paginação e filtros

- Deploy em ambiente cloud

- Testes automatizados (JUnit / React Testing Library)

# 📌 Status do Projeto

### 🟡 Em desenvolvimento
Projeto utilizado para estudo e aprimoramento contínuo.

# 👨‍💻 Autor

Luis Pieta
Estudante de Análise e Desenvolvimento de Sistemas na UNIDEP
Analista de Testes | Entusiasta em Desenvolvimento Full Stack

GitHub: https://github.com/luispieta
