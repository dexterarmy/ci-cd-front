FROM node:18-alpine as build

# set working directory
WORKDIR /app

# install and cache app dependencies
RUN npm install -g @angular/cli --save-dev

# add app
COPY . /app


# generate build
RUN ng build --output-path=dist

############
### prod ###
############

# base image
FROM nginx:1.18.0-alpine



# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

# expose port 4201
EXPOSE 4201

# run nginx
CMD ["nginx", "-g", "daemon off;"]
