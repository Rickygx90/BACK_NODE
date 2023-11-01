import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('biblioteca', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export const Libro = sequelize.define('libros', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
})

sequelize.sync()
