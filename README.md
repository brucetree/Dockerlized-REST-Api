# Dockerlized REST Api
This a dockerlized REST Api written by Express JS framework 

This API also enables ES6 feature 

This API can fetch data from http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json and return a response key with an array of stations. API will filter only ‘apparent_t’ that is greater than 15 and sort it in ascending orderEach element have name, apparent_t, lat and long attribute.

Also can go to swagger UI to check api documents

### local routes

Get stations ``` http://localhost:3000 ```

Swagger ``` http://localhost:3000/api-docs ```

### run the application with unit tests
``` npm run test-with-app ```

### start application using Docker Compose
``` docker-compose up ```
