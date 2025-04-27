FROM node:20-alpine3.20 as base

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN ${SENTRY_AUTH_TOKEN}
ARG SENTRY_ENVIRONMENT
ENV SENTRY_ENVIRONMENT ${SENTRY_ENVIRONMENT}

WORKDIR /app

RUN npm -i g yarn

COPY package.json package-lock.json  ./

RUN yarn install

COPY . .

RUN npm run build

FROM node:20-alpine3.20 as release

WORKDIR /app

ARG NEXT_PUBLIC_POSTHOG_KEY
ENV NEXT_PUBLIC_POSTHOG_KEY ${NEXT_PUBLIC_POSTHOG_KEY}
ARG SENTRY_ENVIRONMENT
ENV SENTRY_ENVIRONMENT ${SENTRY_ENVIRONMENT}

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]

