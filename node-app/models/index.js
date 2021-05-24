import { Orders } from './orders.js'
import { Products } from './products.js'
import { User } from './user.js'

User.hasMany(Orders, { foreignKey: 'userId' })
Products.hasMany(Orders, { foreignKey: 'productId' })

Orders.hasOne(User, { foreignKey: 'id'})
Orders.hasOne(Products, { foreignKey: 'id'})

export { Orders, User, Products }