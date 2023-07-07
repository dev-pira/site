FROM node:18 AS base

FROM base AS deps
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM deps AS src
WORKDIR /app
COPY . .

FROM src AS build
WORKDIR /app
RUN yarn build

FROM build AS runner
ENV NODE_ENV production
ENV PORT 5000
EXPOSE ${PORT}
WORKDIR /app
CMD [ "yarn", "start" ]
