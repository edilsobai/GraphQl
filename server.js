const express = require("express")
const { buildSchema } = require("graphql")

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`)

const app = express()



app.listen(5000, ()=> console.log("Server running on port 5000"))