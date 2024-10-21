
# Simple To-Do List Application

## Descrição

Este é um projeto simples de lista de tarefas, construído com **Spring Boot** no back-end e uma interface front-end utilizando **HTML**, **CSS** e **JavaScript**. O usuário pode adicionar, editar, excluir e marcar/desmarcar tarefas como concluídas.

## Funcionalidades

- **Adicionar tarefa**: O usuário pode adicionar novas tarefas.
- **Marcar como concluída**: O usuário pode marcar uma tarefa como concluída através de uma checkbox.
- **Excluir tarefa**: O usuário pode excluir tarefas indesejadas.
- **Persistência**: As tarefas são salvas no banco de dados e recuperadas ao recarregar a página.

## Tecnologias Utilizadas

### Backend:
- **Java**: Linguagem de programação principal usada para o desenvolvimento do servidor.
- **Spring Boot**: Framework para criar APIs RESTful.
  - **Spring Data JPA**: Para interação com o banco de dados.
  - **H2 Database**: Um banco de dados em memória para persistir as tarefas.
- **Maven**: Gerenciador de dependências e build.

### Frontend:
- **HTML**: Estrutura do site.
- **CSS**: Estilização básica da página.
- **JavaScript**: Para a lógica de interação com o usuário, como adicionar tarefas, marcar como concluídas, etc.
- **Fetch API**: Para interagir com o backend via chamadas REST.

## Como Funciona

### 1. Backend (Spring Boot)
O backend é uma API RESTful simples, que permite:
- **GET /api/tasks**: Recuperar todas as tarefas.
- **POST /api/tasks**: Criar uma nova tarefa.
- **PUT /api/tasks/{id}**: Atualizar uma tarefa existente (incluindo o status de "concluída").
- **DELETE /api/tasks/{id}**: Excluir uma tarefa.

#### Estrutura do projeto:
- `Controller`: Gera os endpoints para o CRUD das tarefas.
- `Service`: Contém a lógica de negócios para manipular as tarefas.
- `Repository`: Interface para interagir com o banco de dados através de JPA.

### 2. Frontend (HTML/CSS/JavaScript)
O front-end faz requisições ao backend usando a API Fetch para carregar, adicionar, excluir e atualizar tarefas.

A interface tem:
- Um campo de texto para adicionar tarefas.
- Checkboxes ao lado de cada tarefa para marcá-las como concluídas.
- Botões de exclusão (ícone de lixeira) para remover tarefas.

### Lógica no JavaScript:
- **fetchTasks**: Carrega todas as tarefas do backend e atualiza a interface.
- **addTask**: Envia a nova tarefa para o backend e recarrega a lista de tarefas.
- **deleteTask**: Remove a tarefa do backend e atualiza a lista.
- **toggleTask**: Atualiza o status de "concluído" da tarefa no backend sem recarregar toda a lista.

## Como Executar o Projeto

### Pré-requisitos

- **Java 11+**
- **Maven**
- **Navegador Web**

### Passos para executar:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/simple-todo-list.git
    cd simple-todo-list
    ```

2. **Execute o programa**:
    - No diretório do projeto, execute o comando Maven:
      ```bash
      mvn spring-boot:run
      ```
    - O backend estará disponível em `http://localhost:8080`.
