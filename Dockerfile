FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @ionic/cli
RUN npm run build
EXPOSE 8100
ENTRYPOINT ["/usr/local/bin/npm", "run"]
CMD [ "start" ]