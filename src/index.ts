import Fastify, { FastifyReply, FastifyRequest } from "fastify"

import puppeteer from "./scrap_puppeteer"


const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send(await puppeteer.getDataFromSite())
})

fastify.listen({ port: 3333 }, (err, address) => {



  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})