#!/bin/bash

sed -i 's|${ENDERECO_API}|'"$ENDERECO_API"'|' /etc/nginx/conf.d/default.conf
sed -i 's|${PORTA_API}|'"$PORTA_API"'|' /etc/nginx/conf.d/default.conf
