FROM node:alpine

# Install curl
RUN apk add --no-cache curl

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]