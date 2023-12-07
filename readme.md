mysql -u root -p

API utilizando o express = configura os metodos http na aplicãção apra cria os endpoints.
documentação: https://sequelize.org/docs/v6/getting-started/

NO POSTMAN

modelo de body:
{
    "nome": "Nike Air force",
    "categoria": "Corrida",
    "descricao": "pratico, leve e estiloso",
    "desconto": 30,
    "precoAntes": 800,
    "precoDepois": 560,
    "ativo": true
}

metodo POST : http://localhost:5000/api/produto

Criar arquivo .env
Comando -> npm i dotenv
colocar no arquivo os dados do config
import no config do arquivo env

inserir no arquivo db o comando em naxio do dialect:

dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Configuração para evitar o erro "SSL/TLS required"
        },
    },

comando -> npm start


