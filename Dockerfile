FROM node:23-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

COPY prisma ./prisma/

USER node

RUN npm install

RUN npm run generate

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]