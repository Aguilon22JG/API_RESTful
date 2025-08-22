const express = require('express');
const app = express();
require('dotenv').config();
const { syncModels } = require('./src/models');

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Recursos Humanos',
      version: '1.0.0',
      description: 'API RESTful para gestión de empleados, proyectos y asignaciones',
    },
    servers: [
      { url: 'http://localhost:' + (process.env.PORT) }
    ],
  },
  apis: ['./src/routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

// Rutas
app.use('/api/empleados', require('./src/routes/empleados'));
app.use('/api/proyectos', require('./src/routes/proyectos'));
app.use('/api/asignaciones', require('./src/routes/asignaciones'));

const PORT = process.env.PORT;

syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/`);
    console.log(`Swagger docs en http://localhost:${PORT}/api-docs`);
  });
});
