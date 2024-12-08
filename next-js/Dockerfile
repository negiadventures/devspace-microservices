# Use Node.js LTS version as the base image
FROM node:20.9.0

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project into the container
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port for the Next.js app
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
