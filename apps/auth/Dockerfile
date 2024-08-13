FROM node:alpine AS development

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY --from=development /app/dist ./dist

CMD ["node", "dist/apps/auth/main"]