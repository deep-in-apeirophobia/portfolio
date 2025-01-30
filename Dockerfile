FROM node:20-alpine3.20 as base

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN ${SENTRY_AUTH_TOKEN}

WORKDIR /app

RUN npm -i g yarn

COPY package.json package-lock.json  ./

RUN yarn install

COPY . .

RUN npm run build

FROM node:20-alpine3.20 as release

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]

