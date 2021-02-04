FROM nginx

# Configurando o timezone do servidor
ENV TZ="America/Sao_Paulo"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./docker/default.conf /etc/nginx/conf.d/
COPY ./docker/proxy.conf /etc/nginx/
COPY ./docker/env.sh /etc/nginx/
RUN tar czvf dist.tar.gz ./dist/*

CMD ["sh", "-c", "/etc/nginx/env.sh ; nginx -g 'daemon off;'"]

ADD  dist.tar.gz /usr/share/nginx/html/
