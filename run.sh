#!/bin/bash

docker run -t --rm --name infr \
            -v $PWD/nginx:/etc/nginx/conf.d/ \
            -p 80:80 infr
