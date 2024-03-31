FROM node:16
WORKDIR /frontend
EXPOSE 3000
COPY package.json package-lock.json ./
RUN npm install
COPY tsconfig.json gulpfile.mjs ./
COPY src/ ./src
COPY public/ ./public
# Now that node_modules are installed, you can run npm start
CMD ["npm", "start"]