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

FROM base AS runner
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
WORKDIR /app
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD [ "node", "server.js" ]
