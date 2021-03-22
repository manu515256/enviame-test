FROM node:14

WORKDIR /app-empresas-enviame

COPY package*.json ./

RUN npm install

RUN npm run build

COPY /dist .

CMD ["npm", "start"]