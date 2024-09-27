const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const CorteCaja = sequelize.define('CorteCaja', {
    id_corte_caja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    horario: {
        type: DataTypes.DATE,
        allowNull: true
    },
    saldo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    total_venta: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    id_marca: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    id_modelo: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    id_categoria: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'corte_caja', // Especifica el nombre de la tabla si no es pluralizado
    timestamps: false // Para desactivar createdAt y updatedAt si no los usas
});

module.exports = CorteCaja;
