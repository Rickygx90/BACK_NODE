import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('Tasks', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
})

export const Task = sequelize.define(
	'tasks',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		complete: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
)

sequelize.sync()
