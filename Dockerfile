# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the Express app will listen on
EXPOSE 3000

# Command to start both the Express app and run tests using npm-run-all
CMD [ "npm", "run", "test-with-app" ]






