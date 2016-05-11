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