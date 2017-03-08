#!/bin/bash

while ! nc -z mysql-db 3306; do sleep 1; done

sequelize db:migrate

pm2-docker start /app/pm2-app-config.json
