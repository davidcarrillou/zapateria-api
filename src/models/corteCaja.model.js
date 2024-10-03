const { DataTypes } = require('sequelize');
// Importa tu configuración de base de datos
const sequelize = require('./db');

const CorteCaja = sequelize.define('CorteCaja', {
    id_corte_caja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    horario: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    saldo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_venta: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_modelo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'corte_caja',
    timestamps: false
});

module.exports = CorteCaja;
