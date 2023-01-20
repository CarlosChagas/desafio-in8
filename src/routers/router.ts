import { FastifyInstance } from "fastify";
import laptopController from "../controllers/laptopsController";


async function router(fastify: FastifyInstance) {

    fastify.get('/all', laptopController.getAllLaptops)
    fastify.get('/:brand', laptopController.getLaptopsByBrand)
    
}
export default router