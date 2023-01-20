import { FastifyReply, FastifyRequest } from "fastify";
import laptopsServices from "../services/laptopsServices";


async function getAllLaptops(request: FastifyRequest, reply: FastifyReply) {
    
    reply.send(await laptopsServices.getAllLaptops())
}

async function getLaptopsByBrand(request: FastifyRequest<{ Params: IParams }>, reply: FastifyReply) {
    let brand = request.params.brand
    let brandUpper = brand[0].toUpperCase() + brand.substring(1)
    reply.send(await laptopsServices.getLaptopsByBrand(brandUpper))
}

export default { getAllLaptops, getLaptopsByBrand }