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
