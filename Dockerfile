# Base image with selenium and chrome
FROM selenium/standalone-chrome

# Change the User to Root
USER root

# JDK Java installation
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y  software-properties-common && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer && \
    apt-get clean


# NodeJS installation
# Set debconf to run non-interactively
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

# update the repository sources list
# and install dependencies
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# Use latest npm
RUN npm i npm@latest -g

# Protractor installation
RUN npm install -g protractor

# Install Chrome Driver for Chrome Browser
RUN apt-get install unzip

RUN wget https://chromedriver.storage.googleapis.com/2.39/chromedriver_linux64.zip \
    && unzip chromedriver_linux64.zip \
    && chmod +x chromedriver \
    && mv chromedriver /usr/bin/ \
    && rm chromedriver_linux64.zip

# Create a new directory
RUN mkdir usr/src/app

# Copy Source Code to the newly created directory
COPY . usr/src/app

# Change the working directory
WORKDIR usr/src/app

# Npm install
RUN npm install