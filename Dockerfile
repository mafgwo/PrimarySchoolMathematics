FROM nginx:alpine
# 使用 sed 命令替换配置文件中的内容
RUN sed -i 's/index  index.html index.htm;/try_files  $uri $uri\/ \/index.html;/g' /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html