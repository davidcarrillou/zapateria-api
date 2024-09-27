const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const Marca = sequelize.define('Marca', {
    id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'marcas', // Especifica el nombre de la tabla si no es pluralizado
    timestamps: false // Para desactivar createdAt y updatedAt si no los usas
});

module.exports = Marca;
