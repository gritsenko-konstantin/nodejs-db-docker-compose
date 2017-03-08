FROM node:latest
MAINTAINER Konstantin Gritsenko <gritsenko.konstantin@gmail.com>

RUN apt-get update
RUN apt-get install -y netcat

ADD . /app
WORKDIR /app

RUN npm install pm2@2 sequelize-cli -q -g
RUN npm install -q --no-progress --tldjs-update-rules

EXPOSE 8001

CMD ["bin/start.sh"]

