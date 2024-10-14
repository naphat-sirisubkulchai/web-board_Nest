# Stage 1: Build the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build the NestJS application
RUN yarn run build

# Stage 2: Run the app in production mode
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy the build from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# If you have Prisma, copy the Prisma schema
COPY --from=build /app/prisma ./prisma

# Expose the port the app will run on
EXPOSE 3000

# Run the Prisma migrations (if necessary)
RUN npx prisma generate

# Start the NestJS application
CMD ["node", "dist/main.js"]
