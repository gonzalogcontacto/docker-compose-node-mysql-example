'use strict';
import pkg from 'sequelize';
import database from '../database.js';
const { Model, DataTypes } = pkg;

export class User extends Model {};

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'User',
});
