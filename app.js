import express from "express";
import router from "./routes/stations-route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
const app = express();
//  handle Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
      origin: "http://localhost:3000", 
      credentials: true,
  })
);
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());




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
