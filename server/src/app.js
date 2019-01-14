const express = require('express');
const graphqlHTTP = require("express-graphql")
const schema = require('./graphql/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin request
app.use(cors());

mongoose.connect('mongodb://hilton:hilton123@ds155614.mlab.com:55614/hiltondb');
mongoose.connection.once('open',() => {
    console.log(`connected to database`);
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => {
    console.log('now listeneing for request on port 4000')
});
