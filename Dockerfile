FROM node:14-alpine
WORKDIR /plataforma-sabia/blog-web
COPY ./package*.json /plataforma-sabia/blog-web/
RUN npm install
COPY ./ /plataforma-sabia/blog-web/
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]