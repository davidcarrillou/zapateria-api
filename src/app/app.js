const sequelize = require('../models/db');
const express = require('express');
const bodyParser = require('body-parser');
const marcaRoutes = require('../routes/marca');
const corteCajaRoutes = require('../routes/corteCaja');
const categoriaRoutes = require('../routes/categoria');
const modelosRoutes = require('../routes/modelos');
const productosRoutes = require('../routes/productos');
const proveedoresRoutes = require('../routes/proveedores');
const usuariosRoutes = require('../routes/usuarios');
const ventasRoutes = require('../routes/ventas');
const historialVentasRoutes = require('../routes/historialVentaRoutes');
const colorRoutes = require('../routes/colores');
const tallasRoutes = require('../routes/tallas');
const { swaggerUi, swaggerSpec } = require('../config/swagger');

const cors = require('cors');
const path = require("path");
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
// Configuración de CORS para permitir todas las conexiones
app.use(cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Uso de rutas
app.use('/api/marcas', marcaRoutes);
app.use('/api/corte_caja', corteCajaRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/modelos', modelosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/venta/historial', historialVentasRoutes);
app.use('/api/colores', colorRoutes);
app.use('/api/talla', tallasRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Ruta a los archivos estáticos de Angular
app.use(express.static(path.join(__dirname, '../../dist/zapateria/browser')));

// Redirigir todas las solicitudes a index.html para el routing de Angular
app.get('*', (req, res) => {
  // Navegar hacia atrás para salir de "Backend/src/app" y luego moverte a la carpeta "Frontend"
  const filePath = path.join(__dirname, '../../dist/zapateria/browser/index.html');
  res.sendFile(filePath);
});
module.exports = app;