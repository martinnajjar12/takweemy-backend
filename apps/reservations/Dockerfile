FROM node:alpine as development

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY --from=development /app/dist ./dist

CMD ["node", "dist/apps/reservations/main"]