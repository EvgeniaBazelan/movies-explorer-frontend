# Getting Started with Create React App

https://movies.frontend.nomoredomains.rocks

ssh evgenia@51.250.19.218
sudo apt update

sudo mkdir /data
sudo mkdir /data/db
sudo chown -R user:evgenia /data
sudo systemctl enable mongod
sudo systemctl start mongod
sudo systemctl status mongod

"frontend"
cd movies-explorer-frontend
cd movies-explorer
npm run build

cd /etc/nginx
cd sites-available
sudo nano default
sudo nginx -t
sudo systemctl start nginx
sudo systemctl status nginx
sudo systemctl restart nginx

sudo cp -r /home/evgenia/movies-explorer-frontend/movies-explorer/build/* /movies-explorer



movies.frontend.nomoredomains.rocks


"backend"
cd movies-explorer-api

npm run start app.js (local start)

pm2 start app.js (global start)
pm2 logs
pm2 restart app.js

movies.backend.nomoredomains.rocks

server {

        server_name movies.frontend.nomoredomains.rocks;

        root /movies-explorer;
        index index.html;

        location / {
                try_files $uri $uri/ /index.html;
        }
        location /api {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
      add_header "Access-Control-Allow-Origin"  "https://movies.frontend.nomoredomains.rocks" always;
      add_header "Access-Control-Allow-Methods" "GET, PATCH, POST, PUT, DELETE, OPTIONS, HEAD" always;
      add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept" always;
      add_header "Access-Control-Allow-Credentials" "true" always;
if ($request_method = OPTIONS) {
add_header Content-Length 0;
add_header Content-Type text/plain;
add_header "Access-Control-Allow-Methods" "GET, PATCH, POST, PUT, DELETE, OPTIONS";
add_header Access-Control-Allow-Origin "https://movies.frontend.nomoredomains.rocks";
add_header Access-Control-Allow-Headers "Authorization, Content-Type";
add_header "Access-Control-Allow-Credentials" "true";
return 200;
}
}

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/movies.frontend.nomoredomains.rocks/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/movies.frontend.nomoredomains.rocks/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
server {

        server_name movies.backend.nomoredomains.rocks;


        location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header  Authorization $http_authorization;
        proxy_pass_header Authorization;
        add_header "Access-Control-Allow-Credentials" "true" always;
        add_header "Access-Control-Allow-Origin" "https://movies.frontend.nomoredomains.rocks" always;
        add_header "Access-Control-Allow-Methods" "GET, PATCH, POST, PUT, DELETE, OPTIONS, HEAD" always;
        add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept" always;
if ($request_method = OPTIONS) {
add_header Content-Length 0;
add_header Content-Type text/plain;
add_header Access-Control-Allow-Methods "GET, PATCH, POST, PUT, DELETE, OPTIONS";
add_header Access-Control-Allow-Origin "https://movies.frontend.nomoredomains.rocks";
add_header Access-Control-Allow-Headers "Authorization, Content-Type";
add_header "Access-Control-Allow-Credentials" "true";
return 200;
}
}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/movies.frontend.nomoredomains.rocks/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/movies.frontend.nomoredomains.rocks/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
if ($host = movies.frontend.nomoredomains.rocks) {
return 301 https://$host$request_uri;
} # managed by Certbot


        listen 80;
        listen [::]:80;

        server_name movies.frontend.nomoredomains.rocks;
    return 404; # managed by Certbot


}
server {
if ($host = movies.backend.nomoredomains.rocks) {
return 301 https://$host$request_uri;
} # managed by Certbot


        listen 80;
        listen [::]:80;

        server_name movies.backend.nomoredomains.rocks;
    return 404; # managed by Certbot


}


  
