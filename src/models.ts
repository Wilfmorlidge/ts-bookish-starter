
import { connect } from './connector'


const {Sequelize, DataTypes} = require('sequelize');
const sequelize = connect();

//export const Catalogue = sequelize.define('Catalogue',{ISBN: {type: DataTypes.INTEGER}},{title: {type: DataTypes.STRING}},{author: {type: DataTypes.STRING}},{number: {type: DataTypes.INTEGER}})
//export const Users = sequelize.define('Users',{Users_ID: {type: DataTypes.INTEGER}})
//export const checkouts = sequelize.define('checkouts',{checkout_ID:{type: DataTypes.INTEGER}},{Users_ID:{type: DataTypes.INTEGER}},{ISBN:{type: DataTypes.INTEGER}})
