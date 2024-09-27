const express = require('express');
const bodyParser = require('body-parser');
const marcaRoutes = require('../routes/marca');
const corteCajaRoutes = require('../routes/corteCaja');
const categoriaRoutes = require('../routes/categoria');
const modelosRoutes = require('../routes/modelos');
const productosRoutes = require('../routes/productos');
const proveedoresRoutes = require('../routes/proveedores');
const usersRoutes = require('../routes/users');
const ventasRoutes = require('../routes/ventas');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
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

// Configurar Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'zapateria API',
            version: '1.0.0',
            description: 'API para gestionar las ventas de una zapateria'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3002}/api`
            }
        ]
    },
    apis: ['./app.js','./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Uso de rutas
app.use('/api/marcas', marcaRoutes);
app.use('/api/corte_caja', corteCajaRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/modelos', modelosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/ventas', ventasRoutes);


// Ruta a los archivos estáticos de Angular
app.use(express.static(path.join(__dirname, '../../dist/zapateria/browser')));

// Redirigir todas las solicitudes a index.html para el routing de Angular
app.get('*', (req, res) => {
  // Navegar hacia atrás para salir de "Backend/src/app" y luego moverte a la carpeta "Frontend"
  const filePath = path.join(__dirname, '../../dist/zapateria/browser/index.html');
  res.sendFile(filePath);
});
module.exports = app;