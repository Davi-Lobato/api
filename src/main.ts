import express from 'express';
import router from './router';

const app = express();
const port = 3000;

app.use(router);

//Rota principal (/), rretornando dados em formato json
app.get('/', function(request, response) {
	response.send({
			api_name: 'api-contatos',
			descricao: 'API para gestão de contatos',
			status: 'OK',
			porta: port,
	});
});

app.get('/sobre', function(request, response) {
	response.send({
			nome: 'João Teixeira',
			email: 'joao.teixeira@ifro.edu.br',
			github: 'github.com/joaoteixeira',
	});
});

app.listen(port, function() {
	console.log(`API up Porta: ${port}`);
});