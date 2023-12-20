import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from 'cors';
import {expressMiddleware} from '@apollo/server/express4';
import {typeDefs } from './src/models/typedef.models.js'


const app = express();
const server = new ApolloServer({
    typeDefs ,
    resolvers : {}
});


app.use(bodyParser.json());
app.use(cors())

await server.start();

app.use('/api/v1/graphql' , expressMiddleware(server))

app.listen(8000 , ()=>{
    console.log(`⚙️  Server is running at port : ${8000}`);
})

export {
    app,
    server
}