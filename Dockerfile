FROM node:20-alpine3.20 as base

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

EXPOSE 3000

CMD ["npm", "start"]

