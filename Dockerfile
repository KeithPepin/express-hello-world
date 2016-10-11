FROM nodesource/trusty:4.4.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Expose the defaul port for the app
EXPOSE 5000

CMD [ "npm", "start" ]