import express from "express";
import router from "./routes/stations-route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
  next()
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
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spacs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
