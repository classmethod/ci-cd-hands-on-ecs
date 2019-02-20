FROM node:10-alpine

ENV APP_ROOT /usr/src/fizzbuzz/

WORKDIR $APP_ROOT

COPY package.json package-lock.json $APP_ROOT
RUN npm install --only=prod && npm cache clean --force

COPY . $APP_ROOT
EXPOSE 80
CMD ["node", "src/index.js"]
