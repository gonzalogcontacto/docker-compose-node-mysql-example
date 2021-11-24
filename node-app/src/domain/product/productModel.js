'use strict';
import pkg from 'sequelize';
import database from '../database.js';
import { Orders } from './orders.js';
const { Model, DataTypes } = pkg;

export class Products extends Model {};

Products.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL
}, {
  sequelize: database,
  modelName: 'Products',
});

