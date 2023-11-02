# Chat-App - Chat Application 
It is a simple chat application built with the power of MERN Stack.


## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure MongoDB is running.

```shell
git clone git@github.com:devangmittal/Chat-app.git
cd Chat-app
```
Now rename env files from .env.example to .env
```shell
cd Back
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd Back
npm install
cd ..
cd Front
npm install

```
We are almost done, Now start the development server.

For Frontend.
```shell
cd Front
npm start
```
For Backend.

Open another terminal in a folder, Also make sure MongoDB is running in the background.
```shell
cd Back
npm start OR nodemon index.js
```

Done! Now open localhost:3000 in your browser, and register at least 2 new users.
