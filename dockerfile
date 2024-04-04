# Use Node.js 14 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Install ts-node-dev globally
RUN npm install -g ts-node-dev typescript

# Copy the rest of the application code
COPY ./server .

# Expose the port used by your server
EXPOSE 3000

# Command to run your server using ts-node-dev
CMD ["npx" ,"ts-node-dev", "--poll", "src/server.ts"]
