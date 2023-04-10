
# Chat app

The app where you need to register with Google and after transferring to the chat page, you can start communications with other members who also need to register with a Google account.


## Demo

https://application-chat-by-anna.netlify.app


## Tech Stack

**Client:** React, Tailwind CSS

**Server:** React, Firebase


## API Reference

- [Chat Engine](https://chatengine.io)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env and firebase.js files.

.env file:

`REACT_APP_CHAT_ENGINE_KEY=*put your key*`

`REACT_APP_CHAT_ENGINE_ID=*put your ID*`

firebase.js file
```bash
export const auth = firebase.initializeApp({
  apiKey: '....',
  authDomain: '....',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...'
}).auth();
```
## Run Locally

Download the project

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.


## Lessons Learned

I practiced my skill in building and deploying a database application. I used Firebase to store and authenticate users.
