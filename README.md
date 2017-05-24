# Simple demo of Firebase Cloud Functions built with JSPM

This repo is intended to show the simplest possible configuration of a Firebase Cloud Function written in ES2016 and bundled using JSPM/Babel.

### Setup:
*  npm install -g jspm@beta
*  npm install
*  jspm install
*  cd functions
*  npm install
*  cd ..

The main Cloud Functions module is still a vanilla JavaScript module (functions/index.js) that imports firebase-admin and firebase-functions using `require()`. If there's a way around this, I haven't found it. The main implementation of the function is in functions/main.js, which is ES2016 (with an async function). To deploy, you build a bundle called functions/build.js using JSPM:

*  jspm build functions/main.js functions/build.js --format cjs --node

and then you should be able to deploy with `firebase deploy --only functions`. (If you're actually doing this yourself, you'll need to create a Firebase project and specify that project when you deploy, or edit `.firebase` to use your new project.)

You can ignore the `public` directory for now; it doesn't actually do anything. The cloud function can be tested by adding data to the Realtime Database directly from the Firebase Console.
