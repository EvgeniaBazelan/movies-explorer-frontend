# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
localhost

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


  
