// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Opciones de configuración para swagger-jsdoc
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Gestión de Inventario',
    version: '1.0.0',
    description: 'API para gestionar productos, categorías, marcas, colores, etc.',
  },
  servers: [
    {
      url: `http://localhost:3002`,
      description: 'Servidor de Desarrollo',
    },
    // Puedes añadir más servidores aquí
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      // Aquí puedes definir tus modelos
      Color: {
        type: 'object',
        properties: {
          id_color: {
            type: 'integer',
            description: 'ID único del color',
            example: 1,
          },
          nombre: {
            type: 'string',
            description: 'Nombre del color',
            example: 'Rojo',
          },
          descripcion: {
            type: 'string',
            description: 'Descripción del color',
            example: 'Un color vibrante y energético',
          },
          fecha_registro: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de registro del color',
            example: '2024-04-25T10:00:00.000Z',
          },
        },
        required: ['nombre'],
      },
      // Puedes definir otros modelos aquí
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

// Opciones para swagger-jsdoc
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: [path.join(__dirname, 'routes', '*.js')], // Ruta absoluta a los archivos de rutas
};

// Inicializar swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
