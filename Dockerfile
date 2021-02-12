FROM node:14
WORKDIR /home
RUN npm install --global ts-node 2>&1 </dev/null
COPY package* /home/
RUN npm install --production
COPY server.ts /home
EXPOSE 8080
CMD ts-node server.ts
