# ---- Stage 1: Build ----
# Use an official Node.js runtime as the base image for building the app.
# We are using 'alpine' for a smaller image size.
FROM node:20-alpine AS builder

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and package-lock.json for dependency caching.
# This step is separated to leverage Docker's layer caching.
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies.
RUN npm install

# Copy the rest of the application source code.
COPY . .

# Build the application for production.
# The output will be in the /app/build directory.
RUN npm run build


# ---- Stage 2: Serve ----
# Use a lightweight Nginx image to serve the static files.
FROM nginx:1.27-alpine

# Set the working directory to Nginx's default public folder.
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page.
RUN rm -rf ./*

# Copy the built files from the 'builder' stage into the Nginx public directory.
COPY --from=builder /app/build .

# This line is crucial for React Router to work correctly.
# It tells Nginx to redirect all traffic to index.html, allowing
# React Router to handle client-side routing.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80, which is the default port Nginx listens on.
EXPOSE 80

# Start Nginx in the foreground to keep the container running.
CMD ["nginx", "-g", "daemon off;"]