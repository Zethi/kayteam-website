FROM node:alpine
WORKDIR /frontend

ENV NODE_ENV=production

COPY package*.json ./
COPY --chown=node . .

RUN yarn install --production && yarn cache clean && npm run build && rm -rf /usr/local/share/.cache

EXPOSE 3000

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]