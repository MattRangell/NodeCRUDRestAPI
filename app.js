import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'
import petRoutes from './routes/pets.routes.js'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient();
const app = express()
const port = 3000

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pets API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ]
    },
    apis: ['./routes/pets.routes.js'],
}

/* Global middlewares */
app.use(cors())
app.use(express.json())
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)

/* Routes */
app.use('/pets', petRoutes(prisma))

app.get('/test-prisma', async (req, res) => {
    try {
      const pets = await prisma.pet.findMany();
      res.json(pets);
    } catch (err) {
      console.error('Test Prisma Error:', err);
      res.status(500).send('Prisma test failed');
    }
  });

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default app