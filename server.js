const path = require("path")

const cors = require("cors")
const express = require("express")

const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")

const { makeExecutableSchema } = require("@graphql-tools/schema")
const { loadFilesSync } = require("@graphql-tools/load-files")

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"))
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"))

async function startApolloServer() {
  const app = express()

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  })
  const server = new ApolloServer({
    schema
  })
  await server.start()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", expressMiddleware(server))

  app.listen(5000, () => console.log("Running GraphQL Server on PORT: 5000..."))
}

startApolloServer()
