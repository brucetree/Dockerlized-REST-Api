import express from "express";
import router from "./routes/stations-route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

//  handle Cross-Origin Resource Sharing (CORS)
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true
 }
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// define routes
app.use("/", router);

const options = {
  definition: {
    openapi: "3.0.0",
    info:{
      title:"Stations api doc",
      version:"0.1",
      description:"This is the station api doc made with Express and documented with Swagger"
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// swagger ui route
const spacs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
