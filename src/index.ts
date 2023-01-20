import Fastify from "fastify"
import router from "./routers/router"


const fastify = Fastify({
  logger: true
})

fastify.register(router, {prefix:'laptops'})

fastify.listen({ port: 3333 }, (err, address) => {



  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})

function routers(routers: any) {
  throw new Error("Function not implemented.")
}
