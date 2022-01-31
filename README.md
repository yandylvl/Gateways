# Installation guides.

You can view a fully working example of the project at [https://gateways-app.herokuapp.com/](https://gateways-app.herokuapp.com/)

In order to Edit/Delete gateways you must be logged in on the app, whether by using Google Auth, signing up on the site, or using this default login credentials:

email: test@test.com

pass: 123qweQ@

## Available Scripts

First you need to install node_modules in both projects, client and server, in each directory run:

```sh
 npm install
```

- Using build mode\
   Build the solution, in the client directory run:

  ```sh
  npm run build
  ```

  Builds the app for production to the `build` folder.\
   It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
   Your app is ready to be deployed!

  You may serve it with a static server:

  ```sh
  serve -s build
  ```

  **Note: In this mode you don't need to run the server locally because the env variables are set to the server deployed in heroku**

<br/>

- Using dev mode\
   In the client project directory, you can run:

  ```sh
  npm start
  ```

  Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  You may see any lint errors in the console.

  **Note: To see the gateways you must run the server locally**

  - First download the server from [https://github.com/yandylvl/Gateways-server](https://github.com/yandylvl/Gateways-server)

  - In the server project directory, you can run:

    ```sh
    node server.js
    ```

## Test

In the client project directory, you can run:

```sh
npm test
```

Launches the test runner in the interactive watch mode.
