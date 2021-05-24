'use strict';
import pkg from 'sequelize';
import database from '../database.js';
import { Products } from './products.js';
import { User } from './user.js';
const { Model, DataTypes } = pkg;

export class Orders extends Model {};

  Orders.init({
    totalPrice: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize: database,
    modelName: 'Orders',
  });