# backend/Dockerfile

# Use official Node.js LTS image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the backend port (8080)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
