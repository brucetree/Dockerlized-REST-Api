# Coding Challenge
This a dockerlized REST Api written by Express JS framework 

This API also enables ES6 feature 

This API can fetch data from http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json and return a response key with an array of stations. API will filter only ‘apparent_t’ that is greater than 15 and sort it in ascending orderEach element have name, apparent_t, lat and long attribute.

Also can go to swagger UI to check api documents

### deployed link

Get stations ``` https://coding-challenges69-6e9ad87f3454.herokuapp.com/ ```

Swagger ``` https://coding-challenges69-6e9ad87f3454.herokuapp.com/api-docs ```

### local routes

Get stations ``` http://localhost:3000 ```

Swagger ``` http://localhost:3000/api-docs ```

### run the application with unit tests
``` npm run test-with-app ```

### start application using Docker Compose
``` docker-compose up ```

## Bonus Question:
### What is Kafka and what are some of the key terminologies when dealing with Kafka? 

Kafka is an open-source stream-processing software platform.It's widely used to create scalable and fault-tolerant data pipelines. Kafka follows a publish-subscribe model, making it an effective solution for handling high-volume, low-delay data streams

Key terminologies:
Topic: a category or channel where data records which are sent by producers and consumed by consumers

Producer: a sender application that writes data records to Kafka topics

Consumer: Consumers are applications that subscribe to topics to receive and process the data records published to those topics. They read and work with the data in real-time or in batches.

Broker: Picture a broker as a server for managing data storage, distribution, and replication.

Producer API: Kafka provides tools and interfaces for applications to produce and publish data records to topics.

Consumer API: Kafka provides tools and interfaces for applications to consume and process data records from topics.