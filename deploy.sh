REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo ln -s /root/.nvm/versions/node/v18.18.2/bin/yarn /usr/bin/yarn

/usr/bin/yarn deploy