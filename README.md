# Bitcoin Buy Order Demo App

Thoughts:
* Client-side validation on user inputs should be added, no validation is added
* No security setup for ExpressJS 
* MongoDB should get some models for data integrity

### Prerequisites
* A instance of mongoDB should be running local
Example: (MacOS using homebrew)
```
brew services start mongodb
```
This should start the mongodb on local at port 27017 but if this is not the case set your mongodb in the server/server.js file `MONGO_URL = 'mongodb://localhost:27017';` (or move to a environmental variable)

* The demo application will add entries to a testDatabase in your local mongodb instance

* The Spot buy order amount is received on API request form [https://www.coinbase.com/] and is updated every 20 seconds

## Getting started

### MacOS
* ```npm install``` to load the node_modules
* ```npm run start_dev_watch``` should get you going in dev mode
* Visit `localhost:3000` on your browser

If you have trouble building the `start_dev_watch` which will be the case in Windows use the following
### Windows
* ```npm install``` to load the node_modules
* ```npm run build_client``` this builds the client-side using Webpack bundler
* ```npm run build_server``` this builds the server-code with Babel
* ```node ./build/server/server.js``` will fire up the app
* Visit `localhost:3000` on your browser






## Build With

* ExpressJS
* WebPack
* Babel
* ReactJS
* Axios
* MongoDB

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

## Credits

* React-Credit-cards [https://github.com/amarofashion/react-credit-cards]