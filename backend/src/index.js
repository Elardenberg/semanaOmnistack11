//use npm install express dentro da pasta backend
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*
  MÉTODOS HTTP
    GET: Buscar uma informação do backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação no backend
    DELETE: Deletar uma informação no backend

  Tipos de parâmetros
    Querry: Parâmetros nomeados enviados na rota após "?"
      (filtros, paginação)
    Route: Parâmetros utilizados para identificar recursos
    Request Body: utilizado para criar ou alterar recursos
*/

app.use(cors());
app.use(express.json()); //fazer a app entender json
app.use(routes);

/*
  request: guarda todos os dados que vêm da requisição do usuário
  response: retorna resposta ao usuário
*/

app.listen(3333);
