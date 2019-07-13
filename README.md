# Banking web-app

Using MERN stack, basing off of [`mern-auth`](https://github.com/johnhany97/mern-auth), and following through [Rishi Prasad's Tutorial](https://blog.bitsrc.io/build-a-full-stack-banking-web-app-with-plaid-the-mern-stack-508914ce5694), this is a banking web-app that utilizes [Plaid](https://plaid.com/) to allow users to link up their banking accounts and obtain a list of all their banking transactions all in one secure place.

## Acknowledgment

This is based off of a tutorial published by [Rishi Prasad in Bits and Pieces](https://blog.bitsrc.io/build-a-full-stack-banking-web-app-with-plaid-the-mern-stack-508914ce5694) but extended to use ES6, Docker, ESLint and some other additional bits and pieces (pun intended) all over. Thanks, Rishi, for the amazing guide!

## Setup
You'll need to add your config file which has the required props for your various enviornments, an example is demonstrated as follows:
```json
{
  "development": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_dev_db:port",
    "SECRET_OR_KEY": "someSecretY'all",
    "PLAID_CLIENT_ID": "YOUR_CLIENT_ID",
    "PLAID_SECRET": "YOUR_SECRET",
    "PLAID_PUBLIC_KEY": "YOUR_PUBLIC_KEY"
  },
  "prod": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_prod_db:port",
    "SECRET_OR_KEY": "someProdSecretY'all",
    "PLAID_CLIENT_ID": "YOUR_CLIENT_ID",
    "PLAID_SECRET": "YOUR_SECRET",
    "PLAID_PUBLIC_KEY": "YOUR_PUBLIC_KEY"
  }
}
```
You'll also need to run a node installation
```
npm i
```

## Running
Development mode
```
npm run dev
```
Production mode
```
npm run prod
```
Watch mode (using `nodemon`)
```
npm run watch
```
Using Docker
```
docker run -p 5000:5000 johnhany97/banko
```
