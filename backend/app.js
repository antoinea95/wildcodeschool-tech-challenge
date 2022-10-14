const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// import de la connexion a mongoDB
require("./config/mongoDb");

// import router
const argonautesRoute = require("./routes/argonautes");

const app = express();

app.use(helmet());

/* Headers permettent d'accéder à l'API depuis n'importe quelle orgine, d'ajouter les headers mentionnées 
et de formuler les requêtes avec les méthodes mentionnées */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cross-Origin-Resource-Policy", "same-site");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// configuration pour les requêtes axios
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.json());
app.use(argonautesRoute);
module.exports = app;
