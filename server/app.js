import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from 'cors';
import {expressMiddleware} from '@apollo/server/express4';
import {typeDefs , resolvers } from './'


const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});


app.use(bodyParser.json());
app.use(cors())

app.use('/api/v1/graphql' , expressMiddleware(server))

export {
    app,
    server
}