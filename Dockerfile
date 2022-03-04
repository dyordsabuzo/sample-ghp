FROM public.ecr.aws/docker/library/node:17.5.0-alpine3.15 AS base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install --production

COPY . .

FROM base
COPY --from=base --chown=node /usr/src/app /usr/src/app
USER node
EXPOSE 3000

CMD ["npm", "start"]