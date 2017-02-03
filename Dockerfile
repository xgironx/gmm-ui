#
#	FROM:  pulls the 7.4.0 build of node.js from the official docker image
#	MAINTAINER:  the keeper of the file

FROM node:7.4.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

#Set some volumes
VOLUME ["/usr/src/app", "/usr/src/app/node_modules"]

EXPOSE 8080
CMD [ "npm", "start" ]
