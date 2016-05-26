## Installation

After cloning the repository, install project dependencies:
```sh
npm install
```

Now run your local server:
```sh
npm start
```
Go to http://localhost:3000 and enjoy

Note: To allow external viewing of the demo, change the following value in `webpack-dev-server.config.js`

```
host: 'localhost'  //Change to '0.0.0.0' for external facing server
```

You can also lint your code with:

```sh
npm run lint
```

You can start delivering production build right from the 'build' folder with docker:
```
cd build/
docker run -p 80:80 -itd  --name my-apache-app-7 -v "$PWD":/var/www/html php:7.0.6-apache &
```
