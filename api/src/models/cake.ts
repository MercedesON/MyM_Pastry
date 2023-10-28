import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Cake = db.define('cake', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'cake' 
});

