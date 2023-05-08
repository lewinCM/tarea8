const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Documentacion de mi API Tarea 8 de Node REST",
    description: " A través de esta actividad vamos a poder establecer los principios básicos de una arquitectura de aplicación compleja para una aplicación generada a partir del framework Express. Además, nos va a ayudar a entender cómo podemos trabajar con los diferentes métodos y acciones disponibles dentro de una base de datos generada a partir de MongoDB.",
    version: "1.0.0",
    dev: 'Flower Lewyn Cordoba Moreno'
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },

  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    },
    schemas: {
      inmueble: {
        type: "object",
        required: [
          "n_propietario",
          "letra",
          "email",
          "extension",
          "desc",
          "n_habitaciones",
          "piso"

        ],
        properties: {
          n_propietario: {
            type: "string",
          },
          letra: {
            type: "string",
          },
          email: {
            type: "string",
          },
          extension: {
            type: "string",
          },
          desc: {
            type: "string",
          },
          n_habitaciones: {
            type: "Number",
          },
          piso: {
            type: "Number",
          },
        },
      },
    },
  },
};

/**
 * Opciones
 */
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;