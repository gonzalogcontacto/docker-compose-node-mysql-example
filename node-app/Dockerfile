# Es la imagen que ya tiene el servidor de node
FROM node:15.14.0-alpine3.10

WORKDIR /node-app

COPY . /node-app

RUN npm install -g nodemon
#RUN npm install -g sequelize

RUN npm install
#RUN ["chmod", "+x", "/node-app/docker-entrypoint.sh"]

EXPOSE 3000
# we can use ENTRYPOINT to load .sh script where we do any pipeline actions where run is executes and this service is ready to be executed (health check dependencies)
#ENTRYPOINT ["/node-app/docker-entrypoint.sh"]

#CMD ["node", "app.js"]
CMD ["npm", "start"]