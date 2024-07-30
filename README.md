# Tech-Challenge-Livraria
tech challenge 2 da FIAP Pós Tech
API de Livraria

Esta é uma API para uma livraria, construída com Node.js, Express e MongoDB. Ela permite realizar operações básicas de CRUD (criar, ler, atualizar e excluir) para livros.

Estrutura do Projeto

    • server.js: Inicia o servidor.
    • app.js: Configura as rotas e a conexão com o banco de dados.
    • models/livro.js: Define o esquema do livro.
    • config/dbConnect.js: Conecta ao banco de dados MongoDB.
    • routes/index.js: Configura as rotas da aplicação.
    • routes/livrosRoutes.js: Define as rotas específicas para livros.
    • controllers/livroController.js: Contém a lógica para manipular livros.

Como Rodar o Projeto

  Clone o repositório:

   git clone https://github.com/seu-usuario/seu-repositorio.git](https://github.com/lilibsp/Tech-Challenge-Livraria.git

    Instale as dependências node.js, express e mongodb.
  
  Configure o banco de dados:
        ◦ Crie um arquivo .env na raiz do projeto.
        ◦ Adicione a variável MONGO_URI com a URL de conexão do seu MongoDB: MONGO_URI=mongodb://localhost:27017/sua-base-de-dados
          
  Inicie o servidor:

    npm start
  
  Endpoints
 
  1. GET /
    Retorna uma mensagem simples para verificar se a API está funcionando.
    Resposta:
      json :"Livraria - Tech Challenge"

  2. GET /livros
    Retorna uma lista de todos os livros.
    Resposta:
      json

        {
          "_id": "id-do-livro",
          "titulo": "Título do Livro",
          "autor": "Autor do Livro",
          "editora": "Editora do Livro"
        },

  3. GET /livros/:id
        Retorna um livro pelo ID.
        Resposta:
        json

        {
          "_id": "id-do-livro",
          "titulo": "Título do Livro",
          "autor": "Autor do Livro",
          "editora": "Editora do Livro"
        }

 4. POST /livros
        Cria um novo livro. O corpo da requisição deve conter:
        json

        {
          "titulo": "Título do Livro",
          "autor": "Autor do Livro",
          "editora": "Editora do Livro"
        }

        Resposta: json: "Livro cadastrado com sucesso"

 5. PUT /livros/:id
        Atualiza um livro existente pelo ID. O corpo da requisição deve conter os campos que deseja atualizar.
        Resposta:
          json

          {
            "titulo": "Novo Título",
            "autor": "Novo Autor",
            "editora": "Nova Editora"
          }
      
 6. DELETE /livros/:id
        Remove um livro pelo ID.
        Resposta: json: "Livro removido com sucesso"
