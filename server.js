const path = require("path")

const express = require("express")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { graphqlHTTP } = require("express-graphql")
const { loadFilesSync } = require("@graphql-tools/load-files")

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"))

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: (parent, args, context, info) => {
        console.log("Getting the products...")
        return parent.products
      },
      orders: (parent) => {
        console.log("Getting the orders...")
        return parent.orders
      }
    }
  }
})

const root = {

  products: require("./products/products.model") ,

  orders: require("./orders/orders.model")
}

const app = express()

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))


app.listen(5000, () => console.log("Running GraphQL Server on PORT: 5000..."))