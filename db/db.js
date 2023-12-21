import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

//conexão com o banco

// postgres://admin:gWWj5JaS4RXygrqJDeCpoLNRPfuL9l9p@dpg-clp43r946foc73a6la8g-a.oregon-postgres.render.com/dc_kynk

const URL_RENDER = `${DB_CONFIG.DIALECT}://${DB_CONFIG.USER}:${DB_CONFIG.PASS}@${DB_CONFIG.HOST}/${DB_CONFIG.DB}`
console.log(`[URL_RENDER]: ${URL_RENDER}`)

export const connection = new Sequelize(URL_RENDER,
  {
    pool:{
      max:5, // MAXIMO CONEXOES SUPORTADAS
      min:0, // MINIMO DE CONEXÕES SUPORTADAS
      acquire:30000, // TEMPO MAXIMO EM MS
      idle:10000
  },
    dialectOptions: {
      ssl:{
        require:true,
        rejectUnauthorized: false,
      },
      keepAlive:true
    },
    ssl: true,
   
  });

  try {
    await connection.authenticate();
    console.log('Conexão estabilizada com sucesso!');
  } catch (error) {
    console.error('Não habilitado para conectar ao database:', error);
  }

 
