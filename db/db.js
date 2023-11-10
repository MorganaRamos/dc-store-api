import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

const connection = new Sequelize(DB_CONFIG.db, DB_CONFIG.user, DB_CONFIG.pass, {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
  });

  try {
    await connection.authenticate();
    console.log('Conexão estabilizada com sucesso!');
  } catch (error) {
    console.error('Não habilitado para conectar ao database:', error);
  }

  const db = {}
  db.Sequelize = Sequelize
  db.connection = connection

  export default db
