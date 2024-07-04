import { Sequelize } from "sequelize";

export function connect(): Sequelize{

    const {Sequelize, DataTypes} = require('sequelize');
    
    const sequelize = new Sequelize('bookish', 'User', '&inger_sn4p3402', {
        host: 'KOMODODRAGON',
        dialect: 'mssql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
      });
    
    async function authenticate() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    authenticate()
    return sequelize
    }
export default connect