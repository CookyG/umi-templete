# build stage
FROM node:16.14.2 as build-stage
ARG BUILDVAR
WORKDIR /www
COPY . .
RUN yarn install
RUN yarn run ${BUILDVAR}

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /www/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
