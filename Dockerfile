# Multi-Stage Build
FROM selenium/standalone-chrome as ssc

FROM jenkinsci/jenkins:lts
 
USER seluser

# Install dependencies from selenium standalone chrome image
COPY --from=ssc /opt/bin/entry_point.sh /opt/bin/entry_point.sh
EXPOSE 4444

USER root

# JDK Java installation
RUN set -ex && \
    echo 'deb http://deb.debian.org/debian jessie-backports main' \
      > /etc/apt/sources.list.d/jessie-backports.list && \
    apt update -y && \
    apt install -t \
    jessie-backports \
    openjdk-8-jre-headless \
    ca-certificates-java -y

# NodeJS installation Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        python \
        rsync \
        software-properties-common \
        devscripts \
        autoconf \
        ssl-cert \
    && apt-get clean

# update the repository sources list and install dependencies
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# confirm installation
RUN node -v
RUN npm -v

# Use latest npm
RUN npm i npm@latest -g

# Protractor installation
RUN npm install -g protractor

# Install Chrome & Chrome Driver for Chrome Browser
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get -y update
RUN apt-get -y install google-chrome-stable

RUN apt-get install unzip

RUN wget https://chromedriver.storage.googleapis.com/2.39/chromedriver_linux64.zip \
    && unzip chromedriver_linux64.zip \
    && chmod +x chromedriver \
    && mv chromedriver /usr/bin/ \
    && rm chromedriver_linux64.zip

# XVFB display
RUN apt-get install libxfont1 libxfont2 libxkbfile1 x11-xkb-utils xauth xfonts-base xfonts-encodings xfonts-utils xserver-common xvfb
RUN Xvfb :1 -screen 0 1600x1200x16 &
RUN export DISPLAY=:1.0


# Docker installation
RUN apt-get update -qq \
    && apt-get install -qqy apt-transport-https ca-certificates curl gnupg2 software-properties-common 
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update  -qq \
    && apt-get install docker-ce=17.12.1~ce-0~debian -y
RUN usermod -aG docker jenkins


# How to run the container
# docker container run -d -p 8021:8080 --name ms_seluser1 --shm-size=2g --privileged -v /var/run/docker.sock:/var/run/docker.sock ms_seluser