#! /bin/bash
source ${HOME}/.bashrc

cd /var/www/alpineclient.com
export NODE_ENV=production
npm run start