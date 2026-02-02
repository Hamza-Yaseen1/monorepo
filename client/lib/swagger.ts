import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Decentralized Social Media API',
            version: '1.0.0',
            description: 'API documentation for the Decentralized Social Media application',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./app/api/**/*.ts'], // Path to the API docs
};

export const spec = swaggerJsdoc(options);
