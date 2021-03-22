FROM node:14-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD npm run test && npm run after-30-days && npm run server