FROM node:14.15.1-buster

RUN apt-get update && apt-get install -y vim
ENV CHOKIDAR_USEPOLLING true
COPY . /root/workspace/
WORKDIR /root/workspace
RUN yarn
# COPY entrypoint.sh /var/tmp
# CMD bash -E /var/tmp/entrypoint.sh && /bin/bash