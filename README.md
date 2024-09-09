# Eagle Eye Network Interview Assignment

## intro

This project displays camera details that belong to the user who signs in.

## instructions

This project follows the below instructions

- Logs in
- After logging in, retrieves all the cameras in that account and display them in a list.
- When pressing one of the cameras, it opens a next screen and displays a few basic details of this camera (like IP address and if it is online for example) I leave it to you to decide what details you put in there.
- Feel free to use a UI framework like vuetify, bootstrap, material-ui etc.

Technologies Required:
A web page made with modern framework like Vue, React, Angular etc. Vue would be preferred.
Use of a router for navigation such as Vue Router.

Good To Have
Use of State Management Library such as Vuex, Redux etc.
Use of ES6 syntax.
Use of Unit Tests.

## Run Locally

**Notes:**

- This is a monorepo full stack application and you need to install and run the front and backend seperatly in seperate terminals
- Mske sure to include the env values shown in the .env.example file (fill values with correct details as this is for authentication for API routes)

- Fork and clone the project

- client

```
cd client
npm install
npm run dev

```

- server

```
cd server
npm install
npm run dev

```

## Notes

- There were dependence issues with jest and vue so I had to use vitest for testing. This meant I was unable to test DOM elements so I only made tests for the portal.
