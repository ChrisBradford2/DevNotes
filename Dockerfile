FROM node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json /usr/src/app

RUN yarn

COPY . /usr/src/app

EXPOSE 3000
CMD [ "yarn", "start"]