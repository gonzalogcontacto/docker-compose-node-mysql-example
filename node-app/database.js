import Sequelize from 'sequelize';

const dbUser = 'root'
const dbPass = 'root'
const dbName =  'sequelize_class_1'

// Prepare the setup to connect BD
const database = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "mysql",
    host: "bd-mysql",
    port: 3306,
    define: {
        timestamps: true
    }
});
    
database.authenticate().then(() =>{
    console.log('DB connected');
}).catch((err)=> {
    console.log('DB not connected',err )
})

export default database;