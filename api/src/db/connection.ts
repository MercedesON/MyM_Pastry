import { Sequelize } from "sequelize";

const Accessdatabase = new Sequelize('bakery', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});
export default Accessdatabase;