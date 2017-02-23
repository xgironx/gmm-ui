#
#	FROM:  pulls the 7.4.0 build of node.js from the official docker image
#	MAINTAINER:  the keeper of the file

FROM node:7.4.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
# Install app dependencies
RUN npm install -g webpack aspnet-webpack http-server angular-cli
RUN npm uninstall -g angular-cli @angular/cli
RUN npm cache clean
RUN npm install -g @angular/cli@latest
RUN npm install

#Set some volumes
VOLUME ["/usr/src/app", "/usr/src/app/node_modules"]
RUN ng -v
RUN ng build --env=dev

WORKDIR /usr/src/app/node-server
COPY server.js /usr/src/app/dist/

WORKDIR /usr/src/app/

EXPOSE 8080
CMD [ "npm", "start" ]