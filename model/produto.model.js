import { DataTypes } from "sequelize";

// cria uma tabela de produtos
const produtoModel = (sequelize, Sequelize) =>{
    const Produto = sequelize.define('produto', {
        // colunas
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        categoria: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
        descrição: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }, 
        desconto: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        precoAntes: {
            type: DataTypes.DECIMAL
            // allowNull defaults to true
        },
        precoDepois: {
            type: DataTypes.DECIMAL
            // allowNull defaults to true
        }, 
        ativo: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        },
      });

      return Produto
};