FROM node:alpine

WORKDIR /usr/local

COPY package.json .

RUN npm config set unsafe-perm true
RUN npm install --silent

COPY . .

RUN chown -R 777 /usr/local/node_modules

USER node

CMD ["npm", "run", "start"]