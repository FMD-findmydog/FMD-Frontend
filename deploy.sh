#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo /usr/bin/yarn

sudo /usr/bin/pm2 start dist
