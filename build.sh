#! /bin/bash

yarn build:prod
cp -v ./public/js/bundle.js ../convini/src/static/frontend
