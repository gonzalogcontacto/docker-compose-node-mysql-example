#!/bin/sh
npx sequelize-cli db:migrate

nodemon app.js